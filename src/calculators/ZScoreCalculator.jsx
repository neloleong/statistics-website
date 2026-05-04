import { useMemo, useState } from "react";

function ZScoreCalculator() {
  const [rawScore, setRawScore] = useState("85");
  const [mean, setMean] = useState("75");
  const [standardDeviation, setStandardDeviation] = useState("10");

  const result = useMemo(() => {
    const x = Number(rawScore);
    const m = Number(mean);
    const sd = Number(standardDeviation);

    if (
      !Number.isFinite(x) ||
      !Number.isFinite(m) ||
      !Number.isFinite(sd) ||
      sd <= 0
    ) {
      return null;
    }

    const z = (x - m) / sd;

    let positionText = "";
    let interpretation = "";
    let outlierText = "";
    let percentileText = "";

    if (z > 0) {
      positionText = "高於平均數";
    } else if (z < 0) {
      positionText = "低於平均數";
    } else {
      positionText = "等於平均數";
    }

    const absZ = Math.abs(z);

    if (absZ < 1) {
      interpretation = "這個數值距離平均數不遠，屬於常見範圍。";
      outlierText = "一般不視為離群值。";
    } else if (absZ < 2) {
      interpretation = "這個數值與平均數有一定距離，但仍屬於相對常見範圍。";
      outlierText = "通常不直接視為離群值，但可留意其位置。";
    } else if (absZ < 3) {
      interpretation = "這個數值距離平均數較遠，屬於較極端的位置。";
      outlierText = "可能需要進一步檢查是否為異常值或特殊個案。";
    } else {
      interpretation = "這個數值距離平均數非常遠，屬於非常極端的位置。";
      outlierText = "高度可能是離群值，建議檢查數據來源和輸入是否正確。";
    }

    if (z >= 3) {
      percentileText = "約高於 99.9% 的資料";
    } else if (z >= 2) {
      percentileText = "約高於 97.5% 的資料";
    } else if (z >= 1) {
      percentileText = "約高於 84% 的資料";
    } else if (z >= 0) {
      percentileText = "約高於 50% 至 84% 的資料";
    } else if (z >= -1) {
      percentileText = "約高於 16% 至 50% 的資料";
    } else if (z >= -2) {
      percentileText = "約高於 2.5% 至 16% 的資料";
    } else if (z >= -3) {
      percentileText = "約高於 0.1% 至 2.5% 的資料";
    } else {
      percentileText = "約低於 0.1% 的資料";
    }

    return {
      z,
      absZ,
      positionText,
      interpretation,
      outlierText,
      percentileText
    };
  }, [rawScore, mean, standardDeviation]);

  function formatNumber(value) {
    if (!Number.isFinite(value)) {
      return "-";
    }

    return value.toFixed(4);
  }

  return (
    <div className="calculator-box">
      <h3>z-score 標準分數計算器</h3>
      <p>
        z-score 用於判斷某個數值距離平均數有多少個標準差，常用於標準化分數、
        比較不同尺度資料，以及初步識別離群值。
      </p>

      <div className="two-column-layout" style={{ marginTop: 20 }}>
        <div>
          <label>
            原始分數 / 原始數值 X
            <input
              type="number"
              value={rawScore}
              onChange={(event) => setRawScore(event.target.value)}
            />
            <span className="input-help">
              例如某位學生的分數、某筆銷售額、某個觀察值。
            </span>
          </label>

          <label>
            平均數 Mean
            <input
              type="number"
              value={mean}
              onChange={(event) => setMean(event.target.value)}
            />
            <span className="input-help">
              整體資料或樣本資料的平均數。
            </span>
          </label>
        </div>

        <div>
          <label>
            標準差 Standard Deviation
            <input
              type="number"
              min="0.0001"
              step="0.0001"
              value={standardDeviation}
              onChange={(event) => setStandardDeviation(event.target.value)}
            />
            <span className="input-help">
              標準差必須大於 0，代表資料的分散程度。
            </span>
          </label>

          <div className="recommendation-warning">
            公式：z = (X - 平均數) ÷ 標準差。  
            若 z 為正數，代表高於平均數；若 z 為負數，代表低於平均數。
          </div>
        </div>
      </div>

      {!result ? (
        <div className="empty-state" style={{ marginTop: 20 }}>
          <strong>請輸入有效數據</strong>
          <p>
            原始數值、平均數必須是有效數字，標準差必須大於 0。
          </p>
        </div>
      ) : (
        <>
          <div className="stats-result-grid">
            <div>
              <span>z-score</span>
              <strong>{formatNumber(result.z)}</strong>
            </div>

            <div>
              <span>距離平均數</span>
              <strong>{formatNumber(result.absZ)} 個標準差</strong>
            </div>

            <div>
              <span>相對位置</span>
              <strong>{result.positionText}</strong>
            </div>

            <div>
              <span>粗略百分位理解</span>
              <strong>{result.percentileText}</strong>
            </div>
          </div>

          <div className="result-box">
            <strong>結果解讀：</strong>
            <p>{result.interpretation}</p>
          </div>

          <div className="recommendation-warning">
            <strong>離群值提示：</strong>
            <br />
            {result.outlierText}
          </div>

          <div className="detail-section">
            <h4>常見解讀標準</h4>
            <ul>
              <li>|z| 小於 1：距離平均數較近，通常屬於常見範圍。</li>
              <li>|z| 約 1 至 2：與平均數有一定距離，但仍不算非常極端。</li>
              <li>|z| 約 2 至 3：屬於較極端位置，需要留意。</li>
              <li>|z| 大於 3：非常極端，常被視為可能離群值。</li>
            </ul>
          </div>

          <div className="recommendation-warning">
            注意：z-score 的常見解讀通常假設資料接近正態分佈。
            如果資料高度偏態，或者存在明顯長尾分佈，應配合箱型圖、四分位距和專業判斷一起使用。
          </div>
        </>
      )}
    </div>
  );
}

export default ZScoreCalculator;