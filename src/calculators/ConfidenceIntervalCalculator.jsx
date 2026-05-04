import { useMemo, useState } from "react";
import {
  confidenceIntervalForMean,
  parseNumberInput,
  sampleStandardDeviation
} from "../utils/statistics";
import { formatNumber } from "../utils/formatters";

const zCriticalMap = {
  "90": 1.645,
  "95": 1.96,
  "99": 2.576
};

function ConfidenceIntervalCalculator() {
  const [input, setInput] = useState("68, 70, 72, 75, 71, 69, 73, 74");
  const [confidenceLevel, setConfidenceLevel] = useState("95");

  const numbers = useMemo(() => parseNumberInput(input), [input]);
  const zCritical = zCriticalMap[confidenceLevel] || 1.96;

  const result = useMemo(() => {
    return confidenceIntervalForMean(numbers, zCritical);
  }, [numbers, zCritical]);

  const isValid = numbers.length >= 2;

  return (
    <div className="calculator-box">
      <h3>置信區間計算器</h3>
      <p>
        根據一組樣本數據估計母體平均數的可能範圍。
      </p>

      <label>
        輸入樣本數據
        <textarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="例如：68, 70, 72, 75, 71"
        />
      </label>

      <label>
        置信水平
        <select
          value={confidenceLevel}
          onChange={(event) => setConfidenceLevel(event.target.value)}
        >
          <option value="90">90%</option>
          <option value="95">95%</option>
          <option value="99">99%</option>
        </select>
      </label>

      {!isValid && (
        <div className="recommendation-warning">
          至少需要 2 個樣本數值才可以計算置信區間。
        </div>
      )}

      <div className="stats-result-grid">
        <div>
          <span>樣本數</span>
          <strong>{numbers.length}</strong>
        </div>

        <div>
          <span>樣本標準差</span>
          <strong>{formatNumber(sampleStandardDeviation(numbers))}</strong>
        </div>

        <div>
          <span>樣本平均數</span>
          <strong>{formatNumber(result.mean)}</strong>
        </div>

        <div>
          <span>z 臨界值</span>
          <strong>{formatNumber(zCritical, 3)}</strong>
        </div>

        <div>
          <span>誤差範圍</span>
          <strong>{formatNumber(result.marginOfError)}</strong>
        </div>

        <div>
          <span>置信區間</span>
          <strong>
            {formatNumber(result.lower)} 至 {formatNumber(result.upper)}
          </strong>
        </div>
      </div>

      <div className="result-box">
        <strong>結果解釋</strong>
        <p>
          在 {confidenceLevel}% 置信水平下，母體平均數可估計落在{" "}
          {formatNumber(result.lower)} 至 {formatNumber(result.upper)} 之間。
        </p>
      </div>

      <div className="recommendation-warning">
        此版本使用 z 臨界值作近似。樣本量較小且母體標準差未知時，正式分析應使用 t 分佈臨界值。
      </div>
    </div>
  );
}

export default ConfidenceIntervalCalculator;