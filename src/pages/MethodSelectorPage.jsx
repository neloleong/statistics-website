import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import MethodCard from "../components/MethodCard";
import { testMethods } from "../data/testMethods";
import {
  findRecommendedMethod,
  getMethodOptions
} from "../utils/methodRules";

function MethodSelectorPage() {
  const options = getMethodOptions();

  const [form, setForm] = useState({
    goal: "compare-means",
    groupCount: "two",
    dataType: "continuous",
    sampleRelation: "independent",
    normality: "normal"
  });

  const [selectedMethod, setSelectedMethod] = useState(null);

  const recommendation = findRecommendedMethod(form);

  function updateField(field, value) {
    setForm((previous) => ({
      ...previous,
      [field]: value
    }));
  }

  return (
    <section className="page-section">
      <SectionTitle
        eyebrow="Method Selector"
        title="統計方法選擇器"
        description="根據研究目的、數據類型、組數、樣本關係和分佈情況，推薦合適的統計方法。"
      />

      <div className="selector-layout">
        <div className="selector-box">
          <label>
            你的研究目的？
            <select value={form.goal} onChange={(event) => updateField("goal", event.target.value)}>
              {options.goals.map((item) => (
                <option value={item.value} key={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            數據組數 / 變量數？
            <select value={form.groupCount} onChange={(event) => updateField("groupCount", event.target.value)}>
              {options.groupCounts.map((item) => (
                <option value={item.value} key={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            數據類型？
            <select value={form.dataType} onChange={(event) => updateField("dataType", event.target.value)}>
              {options.dataTypes.map((item) => (
                <option value={item.value} key={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            樣本關係？
            <select value={form.sampleRelation} onChange={(event) => updateField("sampleRelation", event.target.value)}>
              {options.sampleRelations.map((item) => (
                <option value={item.value} key={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            分佈情況？
            <select value={form.normality} onChange={(event) => updateField("normality", event.target.value)}>
              {options.normalities.map((item) => (
                <option value={item.value} key={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>

          <div className="recommendation-panel">
            <h3>{recommendation.name}</h3>
            <span className="english-name">{recommendation.englishName}</span>
            <p>{recommendation.recommendation}</p>

            {recommendation.alternative && (
              <div className="detail-section">
                <h4>替代方法</h4>
                <p>{recommendation.alternative}</p>
              </div>
            )}

            {recommendation.caution && (
              <div className="recommendation-warning">
                {recommendation.caution}
              </div>
            )}
          </div>
        </div>

        <div>
          <SectionTitle
            eyebrow="Common Methods"
            title="常用統計方法"
            description="點擊方法卡片可查看用途、條件和結果解釋。"
          />

          <div className="method-list">
            {testMethods.map((method) => (
              <MethodCard key={method.id} method={method} onClick={setSelectedMethod} />
            ))}
          </div>
        </div>
      </div>

      {selectedMethod && (
        <div className="detail-panel" style={{ marginTop: 24 }}>
          <div className="detail-panel-header">
            <div>
              <div className="card-meta">
                <span>{selectedMethod.category}</span>
                <span>{selectedMethod.dataType}</span>
              </div>
              <h3>{selectedMethod.name}</h3>
              <p>{selectedMethod.englishName}</p>
            </div>

            <button className="close-btn" onClick={() => setSelectedMethod(null)}>
              ×
            </button>
          </div>

          <p>{selectedMethod.purpose}</p>

          <div className="detail-section">
            <h4>什麼時候用</h4>
            <ul>
              {selectedMethod.whenToUse.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="detail-section">
            <h4>前提條件</h4>
            <ul>
              {selectedMethod.assumptions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="detail-section">
            <h4>例子</h4>
            <p>{selectedMethod.example}</p>
          </div>

          <div className="detail-section">
            <h4>結果解釋</h4>
            <p>{selectedMethod.resultInterpretation}</p>
          </div>

          {selectedMethod.alternatives?.length > 0 && (
            <div className="recommendation-warning">
              替代方法：{selectedMethod.alternatives.join("、")}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default MethodSelectorPage;