import { useMemo, useState } from "react";

const confidenceOptions = [
  {
    label: "90%",
    value: "90",
    z: 1.645
  },
  {
    label: "95%",
    value: "95",
    z: 1.96
  },
  {
    label: "99%",
    value: "99",
    z: 2.576
  }
];

function SampleSizeCalculator() {
  const [calculationType, setCalculationType] = useState("proportion");
  const [confidenceLevel, setConfidenceLevel] = useState("95");
  const [marginOfError, setMarginOfError] = useState("5");
  const [estimatedProportion, setEstimatedProportion] = useState("50");
  const [standardDeviation, setStandardDeviation] = useState("10");
  const [populationSize, setPopulationSize] = useState("");

  const result = useMemo(() => {
    const selectedConfidence = confidenceOptions.find(
      (item) => item.value === confidenceLevel
    );

    const z = selectedConfidence?.z || 1.96;
    const errorPercent = Number(marginOfError);
    const population = Number(populationSize);

    if (!Number.isFinite(errorPercent) || errorPercent <= 0) {
      return null;
    }

    const e = errorPercent / 100;

    let rawSampleSize = 0;
    let formulaType = "";
    let assumptionText = "";

    if (calculationType === "proportion") {
      const proportionPercent = Number(estimatedProportion);

      if (
        !Number.isFinite(proportionPercent) ||
        proportionPercent <= 0 ||
        proportionPercent >= 100
      ) {
        return null;
      }

      const p = proportionPercent / 100;
      rawSampleSize = (z * z * p * (1 - p)) / (e * e);
      formulaType = "比例估計";
      assumptionText =
        "適合估計支持率、滿意度、購買意願、轉化率等比例型結果。若不確定比例，通常使用 50%，因為它會得到較保守、較大的樣本量。";
    } else {
      const sd = Number(standardDeviation);

      if (!Number.isFinite(sd) || sd <= 0) {
        return null;
      }

      rawSampleSize = Math.pow((z * sd) / errorPercent, 2);
      formulaType = "平均數估計";
      assumptionText =
        "適合估計平均消費、平均分數、平均收入、平均等待時間等連續型結果。誤差範圍需要與標準差使用同一單位。";
    }

    const roundedRawSampleSize = Math.ceil(rawSampleSize);

    let adjustedSampleSize = null;

    if (Number.isFinite(population) && population > 0) {
      adjustedSampleSize =
        rawSampleSize / (1 + (rawSampleSize - 1) / population);
    }

    const roundedAdjustedSampleSize = adjustedSampleSize
      ? Math.ceil(adjustedSampleSize)
      : null;

    let interpretation = "";

    if (roundedAdjustedSampleSize) {
      interpretation = `在母體數量約為 ${population.toLocaleString()} 的情況下，建議樣本量約為 ${roundedAdjustedSampleSize.toLocaleString()} 份。`;
    } else {
      interpretation = `在未設定有限母體修正的情況下，建議樣本量約為 ${roundedRawSampleSize.toLocaleString()} 份。`;
    }

    return {
      z,
      formulaType,
      rawSampleSize,
      roundedRawSampleSize,
      adjustedSampleSize,
      roundedAdjustedSampleSize,
      interpretation,
      assumptionText
    };
  }, [
    calculationType,
    confidenceLevel,
    marginOfError,
    estimatedProportion,
    standardDeviation,
    populationSize
  ]);

  function formatNumber(value) {
    if (!Number.isFinite(value)) {
      return "-";
    }

    return value.toFixed(2);
  }

  return (
    <div className="calculator-box">
      <h3>樣本量計算器</h3>
      <p>
        用於估算問卷調查、論文研究、市場研究或商業分析所需樣本量。
        你可以選擇「比例估計」或「平均數估計」兩種方式。
      </p>

      <div className="two-column-layout" style={{ marginTop: 20 }}>
        <div>
          <label>
            計算類型
            <select
              value={calculationType}
              onChange={(event) => setCalculationType(event.target.value)}
            >
              <option value="proportion">比例估計，例如滿意度、支持率、購買意願</option>
              <option value="mean">平均數估計，例如平均消費、平均分數</option>
            </select>
          </label>

          <label>
            信心水平
            <select
              value={confidenceLevel}
              onChange={(event) => setConfidenceLevel(event.target.value)}
            >
              {confidenceOptions.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            允許誤差
            <input
              type="number"
              min="0.1"
              step="0.1"
              value={marginOfError}
              onChange={(event) => setMarginOfError(event.target.value)}
            />
            <span className="input-help">
              比例估計時代表百分比誤差，例如 5 代表 ±5%；平均數估計時代表實際單位誤差，例如 ±5 分或 ±5 元。
            </span>
          </label>
        </div>

        <div>
          {calculationType === "proportion" ? (
            <label>
              預估比例 %
              <input
                type="number"
                min="0.1"
                max="99.9"
                step="0.1"
                value={estimatedProportion}
                onChange={(event) => setEstimatedProportion(event.target.value)}
              />
              <span className="input-help">
                若不清楚預估比例，建議使用 50%，會得到較保守的樣本量。
              </span>
            </label>
          ) : (
            <label>
              預估標準差
              <input
                type="number"
                min="0.1"
                step="0.1"
                value={standardDeviation}
                onChange={(event) => setStandardDeviation(event.target.value)}
              />
              <span className="input-help">
                可參考過往研究、預調查或類似資料的標準差。
              </span>
            </label>
          )}

          <label>
            母體大小，可選
            <input
              type="number"
              min="1"
              value={populationSize}
              onChange={(event) => setPopulationSize(event.target.value)}
              placeholder="例如 10000；不知道可留空"
            />
            <span className="input-help">
              如果知道總母體數，可以輸入以進行有限母體修正；不知道可留空。
            </span>
          </label>
        </div>
      </div>

      {!result ? (
        <div className="empty-state" style={{ marginTop: 20 }}>
          <strong>請輸入有效數據</strong>
          <p>
            請確認誤差範圍大於 0；比例需介乎 0 至 100 之間；標準差需大於 0。
          </p>
        </div>
      ) : (
        <>
          <div className="stats-result-grid">
            <div>
              <span>計算類型</span>
              <strong>{result.formulaType}</strong>
            </div>

            <div>
              <span>Z 臨界值</span>
              <strong>{formatNumber(result.z)}</strong>
            </div>

            <div>
              <span>未修正樣本量</span>
              <strong>{result.roundedRawSampleSize.toLocaleString()}</strong>
            </div>

            <div>
              <span>有限母體修正後</span>
              <strong>
                {result.roundedAdjustedSampleSize
                  ? result.roundedAdjustedSampleSize.toLocaleString()
                  : "未設定"}
              </strong>
            </div>
          </div>

          <div className="result-box">
            <strong>建議樣本量：</strong>
            <p>
              {result.roundedAdjustedSampleSize
                ? result.roundedAdjustedSampleSize.toLocaleString()
                : result.roundedRawSampleSize.toLocaleString()}{" "}
              份
            </p>
          </div>

          <div className="recommendation-warning">
            <strong>解讀：</strong>
            <br />
            {result.interpretation}
          </div>

          <div className="detail-section">
            <h4>計算假設</h4>
            <ul>
              <li>{result.assumptionText}</li>
              <li>
                信心水平越高，所需樣本量越大。
              </li>
              <li>
                允許誤差越小，所需樣本量越大。
              </li>
              <li>
                若研究需要分組比較，通常每一組都需要足夠樣本，而不是只看總樣本量。
              </li>
            </ul>
          </div>

          <div className="recommendation-warning">
            注意：樣本量計算只是研究設計的初步估算。正式研究仍應考慮抽樣方法、
            回收率、無效問卷比例、分層抽樣、研究目的及統計檢定方法。
          </div>
        </>
      )}
    </div>
  );
}

export default SampleSizeCalculator;