import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { learningPaths } from "../data/learningPaths";
import { getDifficultyClass } from "../utils/formatters";

function LearningPathPage() {
  const [selectedPathId, setSelectedPathId] = useState(learningPaths[0]?.id || "");
  const selectedPath =
    learningPaths.find((path) => path.id === selectedPathId) || learningPaths[0];

  return (
    <section className="page-section">
      <SectionTitle
        eyebrow="Learning Paths"
        title="統計學習路線"
        description="根據不同用戶場景，設計由淺入深的學習路線。"
      />

      <div className="path-grid">
        {learningPaths.map((path) => (
          <article
            className="path-card"
            key={path.id}
            onClick={() => setSelectedPathId(path.id)}
            style={{
              borderColor: selectedPathId === path.id ? "var(--primary)" : "var(--line)"
            }}
          >
            <div className="card-meta">
              <span className={getDifficultyClass(path.level)}>{path.level}</span>
              <span>{path.estimatedTime}</span>
            </div>

            <h3>{path.title}</h3>
            <p>{path.targetUser}</p>
          </article>
        ))}
      </div>

      {selectedPath && (
        <div className="detail-panel" style={{ marginTop: 24 }}>
          <div className="detail-panel-header">
            <div>
              <div className="card-meta">
                <span className={getDifficultyClass(selectedPath.level)}>
                  {selectedPath.level}
                </span>
                <span>{selectedPath.estimatedTime}</span>
              </div>
              <h3>{selectedPath.title}</h3>
              <p>{selectedPath.goal}</p>
            </div>
          </div>

          <div className="detail-section">
            <h4>適合對象</h4>
            <p>{selectedPath.targetUser}</p>
          </div>

          <div className="detail-section">
            <h4>學習步驟</h4>

            <div className="step-list">
              {selectedPath.steps.map((step) => (
                <div className="step-item" key={step.order}>
                  <div className="step-number">{step.order}</div>

                  <div>
                    <h3>{step.title}</h3>

                    <div className="tag-list compact">
                      {step.topics.map((topic) => (
                        <span key={topic}>{topic}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default LearningPathPage;