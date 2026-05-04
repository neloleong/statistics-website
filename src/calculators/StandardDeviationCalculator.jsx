import { useMemo, useState } from "react";
import { descriptiveSummary, parseNumberInput } from "../utils/statistics";
import { formatNumber, formatPercent } from "../utils/formatters";

function StandardDeviationCalculator() {
  const [input, setInput] = useState("10, 12, 15, 18, 20, 22, 25");

  const numbers = useMemo(() => parseNumberInput(input), [input]);
  const summary = useMemo(() => descriptiveSummary(numbers), [numbers]);

  return (
    <div className="calculator-box">
      <h3>標準差 / 方差計算器</h3>
      <p>用於理解數據的分散程度。標準差越大，代表數據越分散。</p>

      <label>
        輸入數據
        <textarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="例如：10, 12, 15, 18, 20"
        />
        <span className="input-help">
          如果你的資料只是抽樣資料，通常看「樣本方差」和「樣本標準差」。
        </span>
      </label>

      <div className="stats-result-grid">
        <div>
          <span>樣本數</span>
          <strong>{summary.count}</strong>
        </div>

        <div>
          <span>平均數</span>
          <strong>{formatNumber(summary.mean)}</strong>
        </div>

        <div>
          <span>樣本方差</span>
          <strong>{formatNumber(summary.sampleVariance)}</strong>
        </div>

        <div>
          <span>樣本標準差</span>
          <strong>{formatNumber(summary.sampleStandardDeviation)}</strong>
        </div>

        <div>
          <span>母體方差</span>
          <strong>{formatNumber(summary.populationVariance)}</strong>
        </div>

        <div>
          <span>母體標準差</span>
          <strong>{formatNumber(summary.populationStandardDeviation)}</strong>
        </div>

        <div>
          <span>變異係數</span>
          <strong>{formatPercent(summary.coefficientOfVariation)}</strong>
        </div>

        <div>
          <span>Q1 第一四分位數</span>
          <strong>{formatNumber(summary.q1)}</strong>
        </div>

        <div>
          <span>Q2 中位數</span>
          <strong>{formatNumber(summary.q2)}</strong>
        </div>

        <div>
          <span>Q3 第三四分位數</span>
          <strong>{formatNumber(summary.q3)}</strong>
        </div>

        <div>
          <span>IQR 四分位距</span>
          <strong>{formatNumber(summary.iqr)}</strong>
        </div>

        <div>
          <span>範圍</span>
          <strong>{formatNumber(summary.range)}</strong>
        </div>
      </div>

      <div className="result-box">
        <strong>結果解釋</strong>
        <p>
          標準差用來衡量數據距離平均值的典型距離；變異係數可用來比較不同單位或不同平均水平的資料波動。
        </p>
      </div>
    </div>
  );
}

export default StandardDeviationCalculator;