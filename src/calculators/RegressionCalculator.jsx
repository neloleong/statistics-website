import { useMemo, useState } from "react";
import { parseNumberInput, simpleLinearRegression } from "../utils/statistics";
import { formatNumber } from "../utils/formatters";

function RegressionCalculator() {
  const [xInput, setXInput] = useState("1, 2, 3, 4, 5");
  const [yInput, setYInput] = useState("2, 4, 5, 8, 10");
  const [predictX, setPredictX] = useState("6");

  const xValues = useMemo(() => parseNumberInput(xInput), [xInput]);
  const yValues = useMemo(() => parseNumberInput(yInput), [yInput]);
  const xToPredict = Number(predictX);

  const isValid = xValues.length === yValues.length && xValues.length >= 2;

  const regression = isValid
    ? simpleLinearRegression(xValues, yValues)
    : {
        slope: 0,
        intercept: 0,
        r: 0,
        rSquared: 0,
        predict: () => 0
      };

  const predictedY = Number.isFinite(xToPredict) ? regression.predict(xToPredict) : 0;

  return (
    <div className="calculator-box">
      <h3>簡單線性回歸計算器</h3>
      <p>用一組 X 數據預測 Y 數據，建立簡單線性回歸方程。</p>

      <label>
        X 數據
        <textarea
          value={xInput}
          onChange={(event) => setXInput(event.target.value)}
          placeholder="例如：1, 2, 3, 4, 5"
        />
        <span className="input-help">X 可以是廣告費、時間、價格、學習時數等自變量。</span>
      </label>

      <label>
        Y 數據
        <textarea
          value={yInput}
          onChange={(event) => setYInput(event.target.value)}
          placeholder="例如：2, 4, 5, 8, 10"
        />
        <span className="input-help">Y 可以是銷售額、成績、收入、轉化率等因變量。</span>
      </label>

      <label>
        輸入一個 X 值作預測
        <input
          value={predictX}
          onChange={(event) => setPredictX(event.target.value)}
          placeholder="例如：6"
        />
      </label>

      {!isValid && (
        <div className="recommendation-warning">
          X 和 Y 的數據數量必須相同，而且至少需要 2 組配對數據。
        </div>
      )}

      <div className="stats-result-grid">
        <div>
          <span>斜率 b</span>
          <strong>{formatNumber(regression.slope, 4)}</strong>
        </div>

        <div>
          <span>截距 a</span>
          <strong>{formatNumber(regression.intercept, 4)}</strong>
        </div>

        <div>
          <span>相關係數 r</span>
          <strong>{formatNumber(regression.r, 4)}</strong>
        </div>

        <div>
          <span>R²</span>
          <strong>{formatNumber(regression.rSquared, 4)}</strong>
        </div>

        <div>
          <span>回歸方程</span>
          <strong>
            y = {formatNumber(regression.intercept, 2)} +{" "}
            {formatNumber(regression.slope, 2)}x
          </strong>
        </div>

        <div>
          <span>預測 Y</span>
          <strong>{formatNumber(predictedY, 4)}</strong>
        </div>
      </div>

      <div className="result-box">
        <strong>結果解釋</strong>
        <p>
          斜率表示 X 每增加 1 單位，Y 平均改變多少。R² 表示模型可解釋 Y 變化的比例。
          回歸分析仍需要留意離群值、線性關係和因果解釋問題。
        </p>
      </div>
    </div>
  );
}

export default RegressionCalculator;