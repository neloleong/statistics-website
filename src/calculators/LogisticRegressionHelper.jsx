import { useMemo, useState } from "react";

function sigmoid(value) {
  return 1 / (1 + Math.exp(-value));
}

function LogisticRegressionHelper() {
  const [intercept, setIntercept] = useState("-2");
  const [coefficient, setCoefficient] = useState("0.8");
  const [variableValue, setVariableValue] = useState("3");
  const [threshold, setThreshold] = useState("0.5");

  const result = useMemo(() => {
    const b0 = Number(intercept);
    const b1 = Number(coefficient);
    const x = Number(variableValue);
    const cutoff = Number(threshold);

    if (
      !Number.isFinite(b0) ||
      !Number.isFinite(b1) ||
      !Number.isFinite(x) ||
      !Number.isFinite(cutoff) ||
      cutoff <= 0 ||
      cutoff >= 1
    ) {
      return null;
    }

    const logit = b0 + b1 * x;
    const probability = sigmoid(logit);
    const odds = probability / (1 - probability);
    const oddsRatio = Math.exp(b1);
    const classification = probability >= cutoff ? "預測為 1 / 事件發生" : "預測為 0 / 事件未發生";

    let coefficientDirection = "";
    let oddsRatioText = "";
    let probabilityText = "";
    let classificationText = "";

    if (b1 > 0) {
      coefficientDirection =
        "係數為正數，代表自變量增加時，事件發生的機率傾向上升。";
    } else if (b1 < 0) {
      coefficientDirection =
        "係數為負數，代表自變量增加時，事件發生的機率傾向下降。";
    } else {
      coefficientDirection =
        "係數為 0，代表這個自變量對事件發生機率沒有明顯方向性影響。";
    }

    if (oddsRatio > 1) {
      oddsRatioText = `Odds Ratio 大於 1，代表自變量每增加 1 單位，事件發生的勝算約變為原本的 ${oddsRatio.toFixed(
        3
      )} 倍。`;
    } else if (oddsRatio < 1) {
      oddsRatioText = `Odds Ratio 小於 1，代表自變量每增加 1 單位，事件發生的勝算約變為原本的 ${oddsRatio.toFixed(
        3
      )} 倍，即勝算下降。`;
    } else {
      oddsRatioText =
        "Odds Ratio 等於 1，代表自變量每增加 1 單位，事件發生勝算沒有變化。";
    }

    if (probability >= 0.8) {
      probabilityText = "預測機率很高，模型認為事件較大機會發生。";
    } else if (probability >= 0.5) {
      probabilityText = "預測機率高於 50%，模型傾向判斷事件會發生。";
    } else if (probability >= 0.2) {
      probabilityText = "預測機率低於 50%，模型傾向判斷事件不會發生。";
    } else {
      probabilityText = "預測機率很低，模型認為事件發生機會較小。";
    }

    classificationText = `在分類門檻設定為 ${cutoff} 的情況下，當預測機率為 ${(
      probability * 100
    ).toFixed(2)}% 時，${classification}。`;

    return {
      intercept: b0,
      coefficient: b1,
      variableValue: x,
      threshold: cutoff,
      logit,
      probability,
      odds,
      oddsRatio,
      classification,
      coefficientDirection,
      oddsRatioText,
      probabilityText,
      classificationText
    };
  }, [intercept, coefficient, variableValue, threshold]);

  function formatNumber(value) {
    if (!Number.isFinite(value)) {
      return "-";
    }

    return value.toFixed(4);
  }

  function formatPercent(value) {
    if (!Number.isFinite(value)) {
      return "-";
    }

    return `${(value * 100).toFixed(2)}%`;
  }

  return (
    <div className="calculator-box">
      <h3>Logistic 回歸解釋工具</h3>
      <p>
        用於理解 Logistic 回歸輸出，包括係數、Odds Ratio 勝算比、logit、
        預測機率及二分類結果。適合用於是否購買、是否通過、是否復發、
        是否流失等二分類問題。
      </p>

      <div className="two-column-layout" style={{ marginTop: 20 }}>
        <div>
          <label>
            截距 Intercept β₀
            <input
              type="number"
              step="0.01"
              value={intercept}
              onChange={(event) => setIntercept(event.target.value)}
            />
            <span className="input-help">
              模型截距，例如統計軟件輸出的 Constant 或 Intercept。
            </span>
          </label>

          <label>
            自變量係數 β₁
            <input
              type="number"
              step="0.01"
              value={coefficient}
              onChange={(event) => setCoefficient(event.target.value)}
            />
            <span className="input-help">
              係數為正代表機率傾向上升，係數為負代表機率傾向下降。
            </span>
          </label>
        </div>

        <div>
          <label>
            自變量數值 X
            <input
              type="number"
              step="0.01"
              value={variableValue}
              onChange={(event) => setVariableValue(event.target.value)}
            />
            <span className="input-help">
              代入某個個案的自變量數值，用來估算預測機率。
            </span>
          </label>

          <label>
            分類門檻 Threshold
            <input
              type="number"
              min="0.01"
              max="0.99"
              step="0.01"
              value={threshold}
              onChange={(event) => setThreshold(event.target.value)}
            />
            <span className="input-help">
              常用 0.5。若預測機率大於或等於門檻，通常分類為事件發生。
            </span>
          </label>
        </div>
      </div>

      {!result ? (
        <div className="empty-state" style={{ marginTop: 20 }}>
          <strong>請輸入有效數據</strong>
          <p>
            截距、係數和自變量數值必須是有效數字；分類門檻必須介乎 0 至 1 之間。
          </p>
        </div>
      ) : (
        <>
          <div className="stats-result-grid">
            <div>
              <span>Logit 值</span>
              <strong>{formatNumber(result.logit)}</strong>
            </div>

            <div>
              <span>預測機率</span>
              <strong>{formatPercent(result.probability)}</strong>
            </div>

            <div>
              <span>Odds 勝算</span>
              <strong>{formatNumber(result.odds)}</strong>
            </div>

            <div>
              <span>Odds Ratio</span>
              <strong>{formatNumber(result.oddsRatio)}</strong>
            </div>
          </div>

          <div className="result-box">
            <strong>分類結果：</strong>
            <p>{result.classification}</p>
          </div>

          <div className="detail-section">
            <h4>結果解讀</h4>
            <ul>
              <li>{result.coefficientDirection}</li>
              <li>{result.oddsRatioText}</li>
              <li>{result.probabilityText}</li>
              <li>{result.classificationText}</li>
            </ul>
          </div>

          <div className="detail-section">
            <h4>計算公式</h4>
            <ul>
              <li>logit = β₀ + β₁X</li>
              <li>預測機率 p = 1 ÷ (1 + e^(-logit))</li>
              <li>Odds = p ÷ (1 - p)</li>
              <li>Odds Ratio = e^β₁</li>
            </ul>
          </div>

          <div className="recommendation-warning">
            注意：本工具用於解釋單一自變量 Logistic 回歸的概念和輸出。
            正式研究中的 Logistic 回歸通常會有多個自變量，並需要檢查樣本量、
            變量編碼、多重共線性、模型適配度、ROC/AUC、混淆矩陣和分類門檻設定。
          </div>
        </>
      )}
    </div>
  );
}

export default LogisticRegressionHelper;