import { useEffect, useMemo, useState } from "react";
import { Calculator, Clock, CheckCircle2 } from "lucide-react";

import { calculators } from "../data/calculators";
import { calculatorGuides } from "../data/calculatorGuides";

import MeanCalculator from "../calculators/MeanCalculator";
import StandardDeviationCalculator from "../calculators/StandardDeviationCalculator";
import CorrelationCalculator from "../calculators/CorrelationCalculator";
import RegressionCalculator from "../calculators/RegressionCalculator";
import TTestCalculator from "../calculators/TTestCalculator";
import ChiSquareCalculator from "../calculators/ChiSquareCalculator";
import ConfidenceIntervalCalculator from "../calculators/ConfidenceIntervalCalculator";
import ABTestCalculator from "../calculators/ABTestCalculator";
import SampleSizeCalculator from "../calculators/SampleSizeCalculator";
import ZScoreCalculator from "../calculators/ZScoreCalculator";
import CronbachAlphaCalculator from "../calculators/CronbachAlphaCalculator";
import ANOVACalculator from "../calculators/ANOVACalculator";
import ProbabilityCalculator from "../calculators/ProbabilityCalculator";
import LogisticRegressionHelper from "../calculators/LogisticRegressionHelper";

const calculatorComponents = {
  "mean-calculator": MeanCalculator,
  "standard-deviation-calculator": StandardDeviationCalculator,
  "correlation-calculator": CorrelationCalculator,
  "regression-calculator": RegressionCalculator,
  "t-test-calculator": TTestCalculator,
  "chi-square-calculator": ChiSquareCalculator,
  "confidence-interval-calculator": ConfidenceIntervalCalculator,
  "ab-test-calculator": ABTestCalculator,
  "sample-size-calculator": SampleSizeCalculator,
  "z-score-calculator": ZScoreCalculator,
  "cronbach-alpha-calculator": CronbachAlphaCalculator,
  "anova-calculator": ANOVACalculator,
  "probability-calculator": ProbabilityCalculator,
  "logistic-regression-helper": LogisticRegressionHelper
};

function CalculatorPage({ initialCalculatorId, navigate }) {
  const availableCalculators = useMemo(() => {
    return calculators.filter((item) => item.status === "available");
  }, []);

  const plannedCalculators = useMemo(() => {
    return calculators.filter((item) => item.status !== "available");
  }, []);

  const defaultCalculatorId = availableCalculators[0]?.id || "mean-calculator";

  const [activeCalculatorId, setActiveCalculatorId] = useState(() => {
    const hasInitialCalculator =
      initialCalculatorId &&
      calculators.some(
        (item) =>
          item.id === initialCalculatorId && item.status === "available"
      );

    return hasInitialCalculator ? initialCalculatorId : defaultCalculatorId;
  });

  useEffect(() => {
    if (!initialCalculatorId) {
      return;
    }

    const hasCalculator = calculators.some(
      (item) =>
        item.id === initialCalculatorId && item.status === "available"
    );

    if (hasCalculator) {
      setActiveCalculatorId(initialCalculatorId);

      setTimeout(() => {
        const target = document.querySelector(".calculator-main-panel");
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }, 80);
    }
  }, [initialCalculatorId]);

  const activeCalculator = calculators.find(
    (item) => item.id === activeCalculatorId
  );

  const activeGuide = calculatorGuides[activeCalculatorId];

  const ActiveCalculatorComponent = calculatorComponents[activeCalculatorId];

  function selectCalculator(calculatorId) {
    setActiveCalculatorId(calculatorId);

    if (typeof navigate === "function") {
      navigate("calculators", calculatorId);
    } else {
      window.location.hash = `calculators/${calculatorId}`;
    }

    setTimeout(() => {
      const target = document.querySelector(".calculator-main-panel");
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }, 80);
  }

  return (
    <div className="container calculator-page">
      <section className="page-top">
        <div className="page-eyebrow">Statistics Calculator</div>
        <h1 className="page-title">統計計算器</h1>
        <p className="page-description">
          選擇需要的統計工具，輸入資料後即可快速計算平均數、標準差、相關係數、
          線性回歸、t 檢定、卡方檢定、置信區間、A/B Testing、樣本量估算、
          z-score、Cronbach&apos;s Alpha、ANOVA、機率分佈及 Logistic 回歸解釋等結果。
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
                onClick={() => selectCalculator(item.id)}
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

          {activeGuide ? (
            <CalculatorGuideBox guide={activeGuide} />
          ) : null}
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
              onClick={() => selectCalculator(item.id)}
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

function CalculatorGuideBox({ guide }) {
  return (
    <section className="calculator-guide-box">
      <div className="section-heading">
        <div className="page-eyebrow">How to Use</div>
        <h2 className="section-title">{guide.title}</h2>
        <p className="section-description">
          以下內容可幫助你理解這個工具適合什麼情況、如何輸入資料，以及如何解讀結果。
        </p>
      </div>

      <div className="calculator-guide-grid">
        <GuideCard title="適合什麼情況" items={guide.suitableFor} />
        <GuideCard title="不適合什麼情況" items={guide.notSuitableFor} />
        <GuideCard title="輸入格式" items={guide.inputFormat} />
        <GuideCard title="結果如何解讀" items={guide.interpretation} />
        <GuideCard title="常見錯誤" items={guide.commonMistakes} />
        <GuideCard title="正式研究注意事項" items={guide.researchNotes} />
      </div>
    </section>
  );
}

function GuideCard({ title, items }) {
  if (!items?.length) {
    return null;
  }

  return (
    <article className="tool-info-card">
      <h3>{title}</h3>

      <ul className="tool-output-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function CalculatorInfoCard({ item, statusLabel, statusType, onClick }) {
  const clickable = typeof onClick === "function";

  return (
    <article
      className={clickable ? "tool-info-card clickable" : "tool-info-card"}
    >
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