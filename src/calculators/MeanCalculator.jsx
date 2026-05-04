import { useMemo, useState } from "react";
import { descriptiveSummary, parseNumberInput } from "../utils/statistics";
import { formatMode, formatNumber } from "../utils/formatters";

function MeanCalculator() {
  const [input, setInput] = useState("12, 15, 18, 20, 25, 25");

  const numbers = useMemo(() => parseNumberInput(input), [input]);
  const summary = useMemo(() => descriptiveSummary(numbers), [numbers]);

  return (
    <div className="calculator-box">
      <h3>平均數 / 中位數 / 眾數計算器</h3>
      <p>
        輸入一組數據，系統會自動計算集中趨勢指標，包括平均數、中位數和眾數。
      </p>

      <label>
        輸入數據
        <textarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="例如：12, 15, 18, 20, 25"
        />
        <span className="input-help">可用逗號、空格、換行分隔數字。</span>
      </label>

      <div className="stats-result-grid">
        <div>
          <span>樣本數</span>
          <strong>{summary.count}</strong>
        </div>

        <div>
          <span>總和</span>
          <strong>{formatNumber(summary.sum)}</strong>
        </div>

        <div>
          <span>平均數</span>
          <strong>{formatNumber(summary.mean)}</strong>
        </div>

        <div>
          <span>中位數</span>
          <strong>{formatNumber(summary.median)}</strong>
        </div>

        <div>
          <span>眾數</span>
          <strong>{formatMode(summary.mode)}</strong>
        </div>

        <div>
          <span>最小值</span>
          <strong>{formatNumber(summary.min)}</strong>
        </div>

        <div>
          <span>最大值</span>
          <strong>{formatNumber(summary.max)}</strong>
        </div>

        <div>
          <span>範圍</span>
          <strong>{formatNumber(summary.range)}</strong>
        </div>
      </div>

      <div className="result-box">
        <strong>結果解釋</strong>
        <p>
          平均數代表數據的整體中心；中位數較不受極端值影響；眾數代表出現次數最多的值。
        </p>
      </div>
    </div>
  );
}

export default MeanCalculator;