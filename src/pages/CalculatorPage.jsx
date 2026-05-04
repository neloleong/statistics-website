import { useMemo, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import CalculatorCard from "../components/CalculatorCard";
import MeanCalculator from "../calculators/MeanCalculator";
import StandardDeviationCalculator from "../calculators/StandardDeviationCalculator";
import CorrelationCalculator from "../calculators/CorrelationCalculator";
import RegressionCalculator from "../calculators/RegressionCalculator";
import TTestCalculator from "../calculators/TTestCalculator";
import ChiSquareCalculator from "../calculators/ChiSquareCalculator";
import ConfidenceIntervalCalculator from "../calculators/ConfidenceIntervalCalculator";
import { calculators } from "../data/calculators";

const calculatorComponents = {
  "mean-calculator": MeanCalculator,
  "standard-deviation-calculator": StandardDeviationCalculator,
  "correlation-calculator": CorrelationCalculator,
  "regression-calculator": RegressionCalculator,
  "t-test-calculator": TTestCalculator,
  "chi-square-calculator": ChiSquareCalculator,
  "confidence-interval-calculator": ConfidenceIntervalCalculator
};

function CalculatorPage() {
  const [selectedCalculatorId, setSelectedCalculatorId] = useState("mean-calculator");

  const selectedCalculator = useMemo(() => {
    return (
      calculators.find((calculator) => calculator.id === selectedCalculatorId) ||
      calculators[0]
    );
  }, [selectedCalculatorId]);

  const ActiveCalculator =
    calculatorComponents[selectedCalculator?.id] || ComingSoonCalculator;

  const availableCalculators = calculators.filter(
    (calculator) => calculatorComponents[calculator.id]
  );

  const plannedCalculators = calculators.filter(
    (calculator) => !calculatorComponents[calculator.id]
  );

  return (
    <section className="page-section">
      <SectionTitle
        eyebrow="Calculators"
        title="統計計算器"
        description="常用統計工具已接入，包括描述統計、相關分析、回歸分析、t-test、卡方檢定和置信區間。"
      />

      <div className="calculator-page-layout">
        <aside className="calculator-sidebar">
          <h3>可使用計算器</h3>

          <div className="calculator-nav-list">
            {availableCalculators.map((calculator) => (
              <button
                key={calculator.id}
                className={
                  selectedCalculatorId === calculator.id
                    ? "calculator-nav-item active"
                    : "calculator-nav-item"
                }
                onClick={() => setSelectedCalculatorId(calculator.id)}
              >
                <strong>{calculator.title}</strong>
                <span>{calculator.category}</span>
              </button>
            ))}
          </div>

          {plannedCalculators.length > 0 && (
            <>
              <h3 className="sidebar-subtitle">規劃中</h3>

              <div className="calculator-nav-list">
                {plannedCalculators.map((calculator) => (
                  <button
                    key={calculator.id}
                    className={
                      selectedCalculatorId === calculator.id
                        ? "calculator-nav-item active"
                        : "calculator-nav-item"
                    }
                    onClick={() => setSelectedCalculatorId(calculator.id)}
                  >
                    <strong>{calculator.title}</strong>
                    <span>{calculator.category}</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </aside>

        <div className="calculator-main">
          <ActiveCalculator calculator={selectedCalculator} />
        </div>
      </div>

      <div className="content-section inner-section">
        <SectionTitle
          eyebrow="All Tools"
          title="全部統計工具"
          description="這裏顯示所有已規劃的計算器，方便後續繼續增加更多統計分析功能。"
        />

        <div className="calculator-card-grid">
          {calculators.map((calculator) => (
            <CalculatorCard
              key={calculator.id}
              calculator={calculator}
              onClick={() => setSelectedCalculatorId(calculator.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ComingSoonCalculator({ calculator }) {
  return (
    <div className="calculator-box">
      <h3>{calculator?.title || "計算器"}</h3>
      <p>{calculator?.description || "這個計算器正在規劃中。"}</p>

      <div className="empty-state">
        <strong>功能正在開發中</strong>
        <p>
          這個計算器已經放入網站架構，之後會補充輸入欄位、計算公式和結果解釋。
        </p>
      </div>

      {Array.isArray(calculator?.inputs) && calculator.inputs.length > 0 && (
        <div className="detail-section">
          <h4>預計輸入資料</h4>
          <ul>
            {calculator.inputs.map((input) => (
              <li key={input}>{input}</li>
            ))}
          </ul>
        </div>
      )}

      {Array.isArray(calculator?.outputs) && calculator.outputs.length > 0 && (
        <div className="detail-section">
          <h4>預計輸出結果</h4>
          <ul>
            {calculator.outputs.map((output) => (
              <li key={output}>{output}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CalculatorPage;