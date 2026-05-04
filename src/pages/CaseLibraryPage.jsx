import { useMemo, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import SearchBar from "../components/SearchBar";
import ExampleCard from "../components/ExampleCard";
import { examples } from "../data/examples";
import { includesKeyword } from "../utils/formatters";

function CaseLibraryPage() {
  const [keyword, setKeyword] = useState("");
  const [selectedExample, setSelectedExample] = useState(null);

  const filteredExamples = useMemo(() => {
    return examples.filter((example) => {
      const text = [
        example.industry,
        example.title,
        example.problem,
        example.dataSituation,
        example.recommendedMethod,
        example.reason,
        example.interpretation,
        example.caution
      ].join(" ");

      return includesKeyword(text, keyword);
    });
  }, [keyword]);

  return (
    <section className="page-section">
      <SectionTitle
        eyebrow="Case Library"
        title="統計案例庫"
        description="用教育、商業、醫學、金融、問卷等情境，理解不同統計方法如何應用。"
      />

      <SearchBar
        value={keyword}
        onChange={setKeyword}
        placeholder="搜尋：教育、商業、醫學、t-test、卡方、回歸..."
      />

      <div className="case-grid">
        {filteredExamples.map((example) => (
          <ExampleCard key={example.id} example={example} onClick={setSelectedExample} />
        ))}
      </div>

      {filteredExamples.length === 0 && (
        <div className="empty-state">
          <strong>沒有找到相關案例</strong>
          <p>可以嘗試搜尋「問卷」、「銷售」、「醫學」、「回歸」。</p>
        </div>
      )}

      {selectedExample && (
        <div className="detail-panel" style={{ marginTop: 24 }}>
          <div className="detail-panel-header">
            <div>
              <div className="card-meta">
                <span>{selectedExample.industry}</span>
                <span>{selectedExample.recommendedMethod}</span>
              </div>
              <h3>{selectedExample.title}</h3>
            </div>

            <button className="close-btn" onClick={() => setSelectedExample(null)}>
              ×
            </button>
          </div>

          <div className="detail-section">
            <h4>問題背景</h4>
            <p>{selectedExample.problem}</p>
          </div>

          <div className="detail-section">
            <h4>數據情況</h4>
            <p>{selectedExample.dataSituation}</p>
          </div>

          <div className="detail-section">
            <h4>推薦方法</h4>
            <p>{selectedExample.recommendedMethod}</p>
          </div>

          <div className="detail-section">
            <h4>推薦原因</h4>
            <p>{selectedExample.reason}</p>
          </div>

          <div className="detail-section">
            <h4>結果解釋</h4>
            <p>{selectedExample.interpretation}</p>
          </div>

          {selectedExample.caution && (
            <div className="recommendation-warning">
              注意：{selectedExample.caution}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default CaseLibraryPage;