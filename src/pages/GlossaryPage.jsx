import { useMemo, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import SearchBar from "../components/SearchBar";
import { glossary } from "../data/glossary";
import { includesKeyword } from "../utils/formatters";

function GlossaryPage() {
  const [keyword, setKeyword] = useState("");

  const filteredGlossary = useMemo(() => {
    return glossary.filter((item) => {
      const text = [
        item.term,
        item.englishTerm,
        item.category,
        item.meaning,
        item.example
      ].join(" ");

      return includesKeyword(text, keyword);
    });
  }, [keyword]);

  return (
    <section className="page-section">
      <SectionTitle
        eyebrow="Glossary"
        title="統計詞彙表"
        description="整理統計學常見名詞，方便快速查詢與理解。"
      />

      <SearchBar
        value={keyword}
        onChange={setKeyword}
        placeholder="搜尋：母體、樣本、p-value、置信區間、回歸..."
      />

      <div className="glossary-list">
        {filteredGlossary.map((item) => (
          <article className="glossary-item" key={item.id}>
            <div>
              <div className="card-meta">
                <span>{item.category}</span>
              </div>
              <h3>{item.term}</h3>
              <span className="english-name">{item.englishTerm}</span>
            </div>

            <div>
              <p>{item.meaning}</p>

              <div className="recommendation-warning" style={{ marginTop: 12 }}>
                例子：{item.example}
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredGlossary.length === 0 && (
        <div className="empty-state">
          <strong>沒有找到相關詞彙</strong>
          <p>可以嘗試搜尋其他統計概念。</p>
        </div>
      )}
    </section>
  );
}

export default GlossaryPage;