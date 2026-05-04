import { useMemo, useState } from "react";

function ABTestCalculator() {
  const [aVisitors, setAVisitors] = useState("1000");
  const [aConversions, setAConversions] = useState("120");
  const [bVisitors, setBVisitors] = useState("1000");
  const [bConversions, setBConversions] = useState("150");

  const result = useMemo(() => {
    const nA = Number(aVisitors);
    const xA = Number(aConversions);
    const nB = Number(bVisitors);
    const xB = Number(bConversions);

    if (
      !Number.isFinite(nA) ||
      !Number.isFinite(xA) ||
      !Number.isFinite(nB) ||
      !Number.isFinite(xB) ||
      nA <= 0 ||
      nB <= 0 ||
      xA < 0 ||
      xB < 0 ||
      xA > nA ||
      xB > nB
    ) {
      return null;
    }

    const rateA = xA / nA;
    const rateB = xB / nB;
    const difference = rateB - rateA;
    const pooledRate = (xA + xB) / (nA + nB);

    const standardError = Math.sqrt(
      pooledRate * (1 - pooledRate) * (1 / nA + 1 / nB)
    );

    const zValue = standardError === 0 ? 0 : difference / standardError;
    const absZ = Math.abs(zValue);

    let significanceText = "差異暫未達到常見顯著水平";
    let confidenceLevel = "未達 95%";
    let recommendation = "目前數據不足以支持 B 版本明顯優於 A 版本。";

    if (absZ >= 2.58) {
      significanceText = "差異非常明顯，約達 99% 信心水平";
      confidenceLevel = "約 99%";
      recommendation =
        difference > 0
          ? "B 版本表現明顯較好，可考慮優先採用 B 版本。"
          : "A 版本表現明顯較好，不建議切換至 B 版本。";
    } else if (absZ >= 1.96) {
      significanceText = "差異明顯，約達 95% 信心水平";
      confidenceLevel = "約 95%";
      recommendation =
        difference > 0
          ? "B 版本表現較好，可考慮採用 B 版本，但仍需結合業務成本與測試設計判斷。"
          : "A 版本表現較好，暫不建議採用 B 版本。";
    } else if (absZ >= 1.65) {
      significanceText = "差異有一定跡象，約達 90% 信心水平";
      confidenceLevel = "約 90%";
      recommendation =
        difference > 0
          ? "B 版本有較好跡象，但建議增加樣本量後再判斷。"
          : "A 版本有較好跡象，但建議增加樣本量後再判斷。";
    }

    const lift = rateA === 0 ? 0 : difference / rateA;

    return {
      nA,
      xA,
      nB,
      xB,
      rateA,
      rateB,
      difference,
      lift,
      pooledRate,
      standardError,
      zValue,
      absZ,
      significanceText,
      confidenceLevel,
      recommendation
    };
  }, [aVisitors, aConversions, bVisitors, bConversions]);

  function formatPercent(value) {
    if (!Number.isFinite(value)) {
      return "-";
    }

    return `${(value * 100).toFixed(2)}%`;
  }

  function formatNumber(value) {
    if (!Number.isFinite(value)) {
      return "-";
    }

    return value.toFixed(4);
  }

  return (
    <div className="calculator-box">
      <h3>A/B Testing 兩比例計算器</h3>
      <p>
        用於比較 A 版本與 B 版本的轉化率是否有明顯差異，例如兩個落地頁、
        兩個廣告素材、兩個活動方案或兩個銷售頁面。
      </p>

      <div className="two-column-layout" style={{ marginTop: 20 }}>
        <div>
          <h4>A 版本</h4>

          <label>
            A 組樣本數 / 訪客數
            <input
              type="number"
              min="1"
              value={aVisitors}
              onChange={(event) => setAVisitors(event.target.value)}
            />
          </label>

          <label>
            A 組成功數 / 轉化數
            <input
              type="number"
              min="0"
              value={aConversions}
              onChange={(event) => setAConversions(event.target.value)}
            />
          </label>
        </div>

        <div>
          <h4>B 版本</h4>

          <label>
            B 組樣本數 / 訪客數
            <input
              type="number"
              min="1"
              value={bVisitors}
              onChange={(event) => setBVisitors(event.target.value)}
            />
          </label>

          <label>
            B 組成功數 / 轉化數
            <input
              type="number"
              min="0"
              value={bConversions}
              onChange={(event) => setBConversions(event.target.value)}
            />
          </label>
        </div>
      </div>

      {!result ? (
        <div className="empty-state" style={{ marginTop: 20 }}>
          <strong>請輸入有效數據</strong>
          <p>
            樣本數必須大於 0，成功數不能小於 0，且成功數不能大於樣本數。
          </p>
        </div>
      ) : (
        <>
          <div className="stats-result-grid">
            <div>
              <span>A 版本轉化率</span>
              <strong>{formatPercent(result.rateA)}</strong>
            </div>

            <div>
              <span>B 版本轉化率</span>
              <strong>{formatPercent(result.rateB)}</strong>
            </div>

            <div>
              <span>轉化率差異</span>
              <strong>{formatPercent(result.difference)}</strong>
            </div>

            <div>
              <span>相對提升 Lift</span>
              <strong>{formatPercent(result.lift)}</strong>
            </div>
          </div>

          <div className="result-grid-3" style={{ marginTop: 18 }}>
            <div className="result-card">
              <span>合併轉化率</span>
              <strong>{formatPercent(result.pooledRate)}</strong>
            </div>

            <div className="result-card">
              <span>標準誤</span>
              <strong>{formatNumber(result.standardError)}</strong>
            </div>

            <div className="result-card">
              <span>z 值</span>
              <strong>{formatNumber(result.zValue)}</strong>
            </div>
          </div>

          <div className="result-box">
            <strong>判斷結果：</strong>
            <p>{result.significanceText}</p>
          </div>

          <div className="recommendation-warning">
            <strong>建議：</strong>
            <br />
            {result.recommendation}
          </div>

          <div className="detail-section">
            <h4>解讀說明</h4>
            <ul>
              <li>A 版本轉化率 = A 組成功數 ÷ A 組樣本數。</li>
              <li>B 版本轉化率 = B 組成功數 ÷ B 組樣本數。</li>
              <li>z 值愈大，代表兩組轉化率差異愈明顯。</li>
              <li>常見粗略標準：|z| ≥ 1.96 約等於 95% 信心水平。</li>
            </ul>
          </div>

          <div className="recommendation-warning">
            注意：A/B Testing 結果不能只看顯著性，還要考慮樣本量、測試時間、
            流量來源是否一致、是否有節假日影響，以及轉化率提升是否具有實際商業價值。
          </div>
        </>
      )}
    </div>
  );
}

export default ABTestCalculator;