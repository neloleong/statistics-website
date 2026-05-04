import { useMemo, useState } from "react";
import { parseNumberInput, pearsonCorrelation } from "../utils/statistics";
import {
  formatNumber,
  getCorrelationDirection,
  getCorrelationStrength
} from "../utils/formatters";

function CorrelationCalculator() {
  const [xInput, setXInput] = useState("1, 2, 3, 4, 5");
  const [yInput, setYInput] = useState("2, 4, 5, 8, 10");

  const xValues = useMemo(() => parseNumberInput(xInput), [xInput]);
  const yValues = useMemo(() => parseNumberInput(yInput), [yInput]);

  const isValid = xValues.length === yValues.length && xValues.length >= 2;
  const r = isValid ? pearsonCorrelation(xValues, yValues) : 0;

  return (
    <div className="calculator-box">
      <h3>皮爾森相關係數計算器</h3>
      <p>用於衡量兩個連續變量之間的線性相關程度。</p>

      <label>
        X 數據
        <textarea
          value={xInput}
          onChange={(event) => setXInput(event.target.value)}
          placeholder="例如：1, 2, 3, 4, 5"
        />
        <span className="input-help">X 數據和 Y 數據必須一一對應。</span>
      </label>

      <label>
        Y 數據
        <textarea
          value={yInput}
          onChange={(event) => setYInput(event.target.value)}
          placeholder="例如：2, 4, 5, 8, 10"
        />
        <span className="input-help">數據數量必須與 X 相同。</span>
      </label>

      {!isValid && (
        <div className="recommendation-warning">
          X 和 Y 的數據數量必須相同，而且至少需要 2 組配對數據。
        </div>
      )}

      <div className="stats-result-grid">
        <div>
          <span>X 數據數量</span>
          <strong>{xValues.length}</strong>
        </div>

        <div>
          <span>Y 數據數量</span>
          <strong>{yValues.length}</strong>
        </div>

        <div>
          <span>相關係數 r</span>
          <strong>{formatNumber(r, 4)}</strong>
        </div>

        <div>
          <span>相關方向</span>
          <strong>{isValid ? getCorrelationDirection(r) : "未能判斷"}</strong>
        </div>

        <div>
          <span>相關強度</span>
          <strong>{isValid ? getCorrelationStrength(r) : "未能判斷"}</strong>
        </div>

        <div>
          <span>解釋提醒</span>
          <strong>相關 ≠ 因果</strong>
        </div>
      </div>

      <div className="result-box">
        <strong>結果解釋</strong>
        <p>
          r 接近 1 表示強正相關，接近 -1 表示強負相關，接近 0 表示線性關係較弱。
          但相關分析只能反映共同變化，不能直接證明因果關係。
        </p>
      </div>
    </div>
  );
}

export default CorrelationCalculator;