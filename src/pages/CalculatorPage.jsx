import { useMemo, useState } from "react";
import { Calculator, Clock, CheckCircle2 } from "lucide-react";

import { calculators } from "../data/calculators";

import MeanCalculator from "../calculators/MeanCalculator";
import StandardDeviationCalculator from "../calculators/StandardDeviationCalculator";
import CorrelationCalculator from "../calculators/CorrelationCalculator";
import RegressionCalculator from "../calculators/RegressionCalculator";
import TTestCalculator from "../calculators/TTestCalculator";
import ChiSquareCalculator from "../calculators/ChiSquareCalculator";
import ConfidenceIntervalCalculator from "../calculators/ConfidenceIntervalCalculator";
import ABTestCalculator from "../calculators/ABTestCalculator";

const calculatorComponents = {
  "mean-calculator": MeanCalculator,
  "standard-deviation-calculator": StandardDeviationCalculator,
  "correlation-calculator": CorrelationCalculator,
  "regression-calculator": RegressionCalculator,
  "t-test-calculator": TTestCalculator,
  "chi-square-calculator": ChiSquareCalculator,
  "confidence-interval-calculator": ConfidenceIntervalCalculator,
  "ab-test-calculator": ABTestCalculator
};

function CalculatorPage() {
  const availableCalculators = useMemo(() => {
    return calculators.filter((item) => item.status === "available");
  }, []);

  const plannedCalculators = useMemo(() => {
    return calculators.filter((item) => item.status !== "available");
  }, []);

  const [activeCalculatorId, setActiveCalculatorId] = useState(
    availableCalculators[0]?.id || "mean-calculator"
  );

  const activeCalculator = calculators.find(
    (item) => item.id === activeCalculatorId
  );

  const ActiveCalculatorComponent = calculatorComponents[activeCalculatorId];

  return (
    <div className="container calculator-page">
      <section className="page-top">
        <div className="page-eyebrow">Statistics Calculator</div>
        <h1 className="page-title">統計計算器</h1>
        <p className="page-description">
          選擇需要的統計工具，輸入資料後即可快速計算平均數、標準差、相關係數、
          線性回歸、t 檢定、卡方檢定、置信區間及 A/B Testing 轉化率差異等結果。
        </p>
      </section>

      <section className="calculator-layout">
        <aside className="calculator-sidebar">
          <div className="sidebar-title">
            <Calculator size={18} />
            <span>可使用工具</span>
          </div>

          <div className="calculator-nav-list">
            {availableCalculators.map((item) => (
              <button
                key={item.id}
                type="button"
                className={
                  activeCalculatorId === item.id
                    ? "calculator-nav-item active"
                    : "calculator-nav-item"
                }
                onClick={() => setActiveCalculatorId(item.id)}
              >
                <span>{item.name}</span>
                <small>{item.englishName}</small>
              </button>
            ))}
          </div>
        </aside>

        <section className="calculator-main-panel">
          {activeCalculator ? (
            <div className="calculator-info-box">
              <div>
                <div className="status-row">
                  <span className="status-badge available">
                    <CheckCircle2 size={14} />
                    可使用
                  </span>
                  <span className="difficulty-badge">
                    {activeCalculator.difficulty}
                  </span>
                </div>

                <h2>{activeCalculator.name}</h2>
                <p>{activeCalculator.description}</p>
              </div>
            </div>
          ) : null}

          <div className="calculator-tool-box">
            {ActiveCalculatorComponent ? (
              <ActiveCalculatorComponent />
            ) : (
              <div className="empty-box">
                <h3>此工具尚未接入</h3>
                <p>
                  這個計算器資料已建立，但實際計算元件尚未完成。請先使用左側已開放工具。
                </p>
              </div>
            )}
          </div>
        </section>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div className="page-eyebrow">Available Tools</div>
          <h2 className="section-title">目前可使用的計算器</h2>
          <p className="section-description">
            以下工具已完成基本計算功能，適合用於學習、初步分析和教學示範。
          </p>
        </div>

        <div className="tool-card-grid">
          {availableCalculators.map((item) => (
            <CalculatorInfoCard
              key={item.id}
              item={item}
              statusLabel="可使用"
              statusType="available"
              onClick={() => setActiveCalculatorId(item.id)}
            />
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div className="page-eyebrow">Coming Soon</div>
          <h2 className="section-title">即將推出的計算器</h2>
          <p className="section-description">
            這些工具已經加入資料庫，之後可以逐步開發實際計算功能。
          </p>
        </div>

        <div className="tool-card-grid">
          {plannedCalculators.map((item) => (
            <CalculatorInfoCard
              key={item.id}
              item={item}
              statusLabel="即將推出"
              statusType="planned"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function CalculatorInfoCard({ item, statusLabel, statusType, onClick }) {
  const clickable = typeof onClick === "function";

  return (
    <article className={clickable ? "tool-info-card clickable" : "tool-info-card"}>
      <div className="tool-card-top">
        <span
          className={
            statusType === "available"
              ? "status-badge available"
              : "status-badge planned"
          }
        >
          {statusType === "available" ? (
            <CheckCircle2 size={14} />
          ) : (
            <Clock size={14} />
          )}
          {statusLabel}
        </span>

        <span className="difficulty-badge">{item.difficulty}</span>
      </div>

      <h3>{item.name}</h3>
      <p className="tool-english-name">{item.englishName}</p>
      <p>{item.description}</p>

      <div className="tool-meta">
        <span>{item.category}</span>
      </div>

      {item.outputs?.length ? (
        <div className="tool-output-list">
          <strong>主要輸出：</strong>
          <ul>
            {item.outputs.slice(0, 4).map((output) => (
              <li key={output}>{output}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {clickable ? (
        <button type="button" className="text-button" onClick={onClick}>
          使用這個工具
        </button>
      ) : null}
    </article>
  );
}

export default CalculatorPage;