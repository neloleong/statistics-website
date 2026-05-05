import { HelpCircle, BookOpen, Calculator, AlertTriangle } from "lucide-react";
import { faqs } from "../data/faqs";

function FAQPage({ navigate }) {
  const categories = ["全部", ...new Set(faqs.map((faq) => faq.category))];

  const handleArticleClick = (articleId) => {
    if (navigate && articleId) {
      navigate("article", articleId);
    }
  };

  const handleToolClick = (toolId) => {
    if (navigate && toolId) {
      navigate("calculators", toolId);
    }
  };

  return (
    <div className="page faq-page">
      <section className="page-hero">
        <div className="page-eyebrow">Statistics FAQ</div>
        <h1>常見統計問題 FAQ</h1>
        <p>
          以簡單、直接、可應用的方式解釋統計學中最常見的問題，
          適合初學者、問卷研究者、論文寫作者及商業分析使用者快速查閱。
        </p>
      </section>

      <section className="section">
        <div className="section-title">
          <span>問題分類</span>
          <p>你可以按主題快速理解不同統計概念。</p>
        </div>

        <div className="faq-category-list">
          {categories.map((category) => (
            <span className="faq-category-pill" key={category}>
              {category}
            </span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <span>常見問題</span>
          <p>每條問題都包含解釋、常見誤解，以及相關文章和工具。</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <article className="faq-card" key={faq.id}>
              <div className="faq-card-header">
                <div className="faq-number">{String(index + 1).padStart(2, "0")}</div>

                <div>
                  <div className="faq-meta">
                    <span>{faq.category}</span>
                    <span>{faq.difficulty}</span>
                  </div>

                  <h2>
                    <HelpCircle size={22} />
                    {faq.question}
                  </h2>
                </div>
              </div>

              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>

              <div className="faq-warning">
                <AlertTriangle size={18} />
                <p>
                  <strong>常見誤解：</strong>
                  {faq.commonMistake}
                </p>
              </div>

              <div className="faq-actions">
                {faq.relatedArticle && (
                  <button
                    type="button"
                    className="text-button"
                    onClick={() => handleArticleClick(faq.relatedArticle)}
                  >
                    <BookOpen size={16} />
                    查看相關文章
                  </button>
                )}

                {faq.relatedTool && (
                  <button
                    type="button"
                    className="text-button"
                    onClick={() => handleToolClick(faq.relatedTool)}
                  >
                    <Calculator size={16} />
                    使用相關計算器
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section faq-bottom-panel">
        <div>
          <div className="page-eyebrow">Learning Suggestion</div>
          <h2>建議學習方式</h2>
          <p>
            如果你是統計初學者，建議先閱讀描述統計、p-value、t 檢定、
            ANOVA 和相關分析，再進一步學習回歸分析、問卷信度和樣本量估算。
          </p>
        </div>

        <button type="button" className="btn-primary" onClick={() => navigate("path")}>
          前往學習路線
        </button>
      </section>
    </div>
  );
}

export default FAQPage;