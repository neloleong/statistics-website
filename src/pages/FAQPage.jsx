import { useMemo, useState } from "react";
import {
  HelpCircle,
  BookOpen,
  Calculator,
  AlertTriangle,
  Filter,
  ArrowRight
} from "lucide-react";
import { faqs } from "../data/faqs";

function FAQPage({ navigate }) {
  const [activeCategory, setActiveCategory] = useState("全部");

  const categories = useMemo(() => {
    const categoryMap = new Map();

    faqs.forEach((faq) => {
      categoryMap.set(faq.category, (categoryMap.get(faq.category) || 0) + 1);
    });

    return [
      {
        name: "全部",
        count: faqs.length
      },
      ...Array.from(categoryMap.entries()).map(([name, count]) => ({
        name,
        count
      }))
    ];
  }, []);

  const filteredFaqs = useMemo(() => {
    if (activeCategory === "全部") {
      return faqs;
    }

    return faqs.filter((faq) => faq.category === activeCategory);
  }, [activeCategory]);

  function handleArticleClick(articleId) {
    if (!articleId) return;

    if (typeof navigate === "function") {
      navigate("article", articleId);
      return;
    }

    window.location.hash = `article/${articleId}`;
  }

  function handleToolClick(toolId) {
    if (!toolId) return;

    if (toolId === "method-selector") {
      if (typeof navigate === "function") {
        navigate("methods");
        return;
      }

      window.location.hash = "methods";
      return;
    }

    if (typeof navigate === "function") {
      navigate("calculators", toolId);
      return;
    }

    window.location.hash = `calculators/${toolId}`;
  }

  function handleNavigate(pageId) {
    if (typeof navigate === "function") {
      navigate(pageId);
      return;
    }

    window.location.hash = pageId;
  }

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
          <span className="page-eyebrow">
            <Filter size={15} />
            FAQ Categories
          </span>

          <h2>按分類查看問題</h2>

          <p>
            FAQ 內容會隨文章庫和工具功能持續擴充。你可以按分類快速查看相關問題。
          </p>
        </div>

        <div className="faq-category-filter">
          {categories.map((category) => (
            <button
              key={category.name}
              type="button"
              className={
                activeCategory === category.name
                  ? "faq-category-filter-btn active"
                  : "faq-category-filter-btn"
              }
              onClick={() => setActiveCategory(category.name)}
            >
              <span>{category.name}</span>
              <strong>{category.count}</strong>
            </button>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <span className="page-eyebrow">
            <HelpCircle size={15} />
            FAQ List
          </span>

          <h2>
            {activeCategory === "全部"
              ? "全部常見問題"
              : `${activeCategory} 常見問題`}
          </h2>

          <p>
            目前顯示 {filteredFaqs.length} 條問題。每條問題都包含解釋、
            常見誤解，以及相關文章和統計工具入口。
          </p>
        </div>

        <div className="faq-list">
          {filteredFaqs.map((faq, index) => (
            <article className="faq-card" key={faq.id}>
              <div className="faq-card-header">
                <div className="faq-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

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
                    使用相關工具
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="empty-state">
            <strong>暫時沒有 FAQ</strong>
            <p>這個分類目前沒有問題，之後可以繼續補充。</p>
          </div>
        )}
      </section>

      <section className="section faq-bottom-panel">
        <div>
          <div className="page-eyebrow">Learning Suggestion</div>

          <h2>建議學習方式</h2>

          <p>
            如果你是統計初學者，建議先閱讀描述統計、p-value、置信區間、
            t 檢定、ANOVA 和相關分析，再進一步學習回歸分析、問卷信度和樣本量估算。
          </p>
        </div>

        <div className="faq-bottom-actions">
          <button
            type="button"
            className="btn-secondary"
            onClick={() => handleNavigate("articles")}
          >
            閱讀統計文章
            <BookOpen size={16} />
          </button>

          <button
            type="button"
            className="btn-primary"
            onClick={() => handleNavigate("path")}
          >
            前往學習路線
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default FAQPage;