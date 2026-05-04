import { useMemo, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import SearchBar from "../components/SearchBar";
import FormulaCard from "../components/FormulaCard";
import { formulas } from "../data/formulas";
import { includesKeyword } from "../utils/formatters";

function FormulaLibraryPage() {
  const [keyword, setKeyword] = useState("");
  const [selectedFormula, setSelectedFormula] = useState(null);

  const filteredFormulas = useMemo(() => {
    return formulas.filter((formula) => {
      const text = [
        formula.name,
        formula.englishName,
        formula.category,
        formula.formula,
        formula.explanation,
        formula.whenToUse,
        formula.example,
        formula.warning,
        ...(formula.symbols || []).map((item) => `${item.symbol} ${item.meaning}`)
      ].join(" ");

      return includesKeyword(text, keyword);
    });
  }, [keyword]);

  return (
    <section className="page-section">
      <SectionTitle
        eyebrow="Formula Library"
        title="統計公式庫"
        description="集中整理常用統計公式、符號說明、使用場景、例子和注意事項。"
      />

      <SearchBar
        value={keyword}
        onChange={setKeyword}
        placeholder="搜尋：平均數、方差、標準差、z-score、相關係數..."
      />

      <div className="formula-grid">
        {filteredFormulas.map((formula) => (
          <FormulaCard key={formula.id} formula={formula} onClick={setSelectedFormula} />
        ))}
      </div>

      {filteredFormulas.length === 0 && (
        <div className="empty-state">
          <strong>沒有找到相關公式</strong>
          <p>可以嘗試搜尋「mean」、「variance」、「regression」等關鍵詞。</p>
        </div>
      )}

      {selectedFormula && (
        <div className="detail-panel" style={{ marginTop: 24 }}>
          <div className="detail-panel-header">
            <div>
              <div className="card-meta">
                <span>{selectedFormula.category}</span>
                <span>{selectedFormula.englishName}</span>
              </div>
              <h3>{selectedFormula.name}</h3>
            </div>

            <button className="close-btn" onClick={() => setSelectedFormula(null)}>
              ×
            </button>
          </div>

          <div className="formula-box">{selectedFormula.formula}</div>

          <div className="detail-section">
            <h4>公式解釋</h4>
            <p>{selectedFormula.explanation}</p>
          </div>

          {selectedFormula.symbols?.length > 0 && (
            <div className="detail-section">
              <h4>符號說明</h4>

              <div className="formula-symbol-list">
                {selectedFormula.symbols.map((item) => (
                  <div className="formula-symbol-item" key={item.symbol}>
                    <strong>{item.symbol}</strong>
                    <span>{item.meaning}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="detail-section">
            <h4>什麼時候用</h4>
            <p>{selectedFormula.whenToUse}</p>
          </div>

          <div className="detail-section">
            <h4>例子</h4>
            <p>{selectedFormula.example}</p>
          </div>

          {selectedFormula.warning && (
            <div className="recommendation-warning">
              注意：{selectedFormula.warning}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default FormulaLibraryPage;