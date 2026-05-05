import { useMemo, useState } from "react";
import {
  BookOpen,
  Calculator,
  ChevronDown,
  CircleHelp,
  FileText,
  Lightbulb,
  Route
} from "lucide-react";
import { faqs } from "../data/faqs";

function FAQPage({ navigate }) {
  const [activeCategory, setActiveCategory] = useState("全部");
  const [openFaqId, setOpenFaqId] = useState(null);
  const [keyword, setKeyword] = useState("");

  const safeFaqs = Array.isArray(faqs) ? faqs : [];

  const categories = useMemo(() => {
    const list = safeFaqs.map((faq) => faq?.category).filter(Boolean);
    return ["全部", ...Array.from(new Set(list))];
  }, [safeFaqs]);

  const filteredFaqs = useMemo(() => {
    const cleanKeyword = keyword.trim().toLowerCase();

    return safeFaqs.filter((faq) => {
      const matchCategory =
        activeCategory === "全部" || faq.category === activeCategory;

      const searchText = [
        faq.question,
        faq.answer,
        faq.category,
        faq.misconception,
        faq.commonMistake,
        ...(faq.relatedArticles || []).map((item) =>
          typeof item === "string" ? item : item.title || item.id
        ),
        ...(faq.relatedTools || []).map((item) =>
          typeof item === "string" ? item : item.name || item.title || item.id
        )
      ]
        .join(" ")
        .toLowerCase();

      const matchKeyword = !cleanKeyword || searchText.includes(cleanKeyword);

      return matchCategory && matchKeyword;
    });
  }, [activeCategory, keyword, safeFaqs]);

  const getCategoryCount = (category) => {
    if (category === "全部") {
      return safeFaqs.length;
    }

    return safeFaqs.filter((faq) => faq.category === category).length;
  };

  const toggleFaq = (faqId) => {
    setOpenFaqId((current) => (current === faqId ? null : faqId));
  };

  const goToArticle = (articleId) => {
    if (!articleId || typeof navigate !== "function") return;
    navigate(`article/${articleId}`);
  };

  const goToTool = (toolId) => {
    if (!toolId || typeof navigate !== "function") return;

    if (toolId === "method-selector" || toolId === "methods") {
      navigate("methods");
      return;
    }

    navigate(`calculators/${toolId}`);
  };

  const normalizeArticle = (article) => {
    if (!article) return null;

    if (typeof article === "string") {
      return {
        id: article,
        title: article
      };
    }

    return {
      id: article.id,
      title: article.title || article.name || article.id
    };
  };

  const normalizeTool = (tool) => {
    if (!tool) return null;

    if (typeof tool === "string") {
      return {
        id: tool,
        name: tool
      };
    }

    return {
      id: tool.id,
      name: tool.name || tool.title || tool.id
    };
  };

  return (
    <main className="page">
      <section className="page-hero faq-hero">
        <div className="container">
          <div className="eyebrow">Statistics FAQ</div>
          <h1>統計 FAQ 常見問題</h1>
          <p>
            整理初學者、問卷研究、論文分析和商業分析中最常見的統計問題，
            並連接到相關文章和計算器。
          </p>

          <div className="faq-hero-actions">
            <button
              type="button"
              className="btn-primary"
              onClick={() => navigate("articles")}
            >
              <FileText size={18} />
              閱讀統計文章
            </button>

            <button
              type="button"
              className="btn-secondary"
              onClick={() => navigate("methods")}
            >
              <Route size={18} />
              方法選擇器
            </button>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Find Your Question</div>
              <h2>查找統計問題</h2>
            </div>
            <p>
              目前共有 <strong>{safeFaqs.length}</strong> 條常見統計問題。
            </p>
          </div>

          <div className="faq-search-box">
            <CircleHelp size={18} />
            <input
              type="text"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              placeholder="搜尋：p-value、ANOVA、問卷、樣本量、相關..."
            />
          </div>

          <div className="filter-pills faq-category-pills">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "filter-pill active"
                    : "filter-pill"
                }
                onClick={() => {
                  setActiveCategory(category);
                  setOpenFaqId(null);
                }}
              >
                <span>{category}</span>
                <small>{getCategoryCount(category)}</small>
              </button>
            ))}
          </div>

          <div className="article-result-count">
            目前顯示 <strong>{filteredFaqs.length}</strong> 條 FAQ
          </div>

          {filteredFaqs.length === 0 ? (
            <div className="empty-box">
              <h3>暫時找不到相關問題</h3>
              <p>可以嘗試其他關鍵詞，或切換到全部分類。</p>
              <button
                type="button"
                className="btn-primary"
                onClick={() => {
                  setKeyword("");
                  setActiveCategory("全部");
                }}
              >
                查看全部 FAQ
              </button>
            </div>
          ) : (
            <div className="faq-list">
              {filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                const relatedArticles = Array.isArray(faq.relatedArticles)
                  ? faq.relatedArticles.map(normalizeArticle).filter(Boolean)
                  : [];

                const relatedTools = Array.isArray(faq.relatedTools)
                  ? faq.relatedTools.map(normalizeTool).filter(Boolean)
                  : [];

                return (
                  <article
                    key={faq.id}
                    className={isOpen ? "faq-item open" : "faq-item"}
                  >
                    <button
                      type="button"
                      className="faq-question-row"
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <div>
                        <span className="faq-category-badge">
                          {faq.category || "未分類"}
                        </span>
                        <h3>{faq.question}</h3>
                      </div>

                      <ChevronDown
                        size={22}
                        className={isOpen ? "faq-chevron rotate" : "faq-chevron"}
                      />
                    </button>

                    {isOpen && (
                      <div className="faq-answer-panel">
                        <div className="faq-answer-block">
                          <div className="faq-block-title">
                            <BookOpen size={18} />
                            <strong>簡明答案</strong>
                          </div>
                          <p>{faq.answer}</p>
                        </div>

                        {(faq.misconception || faq.commonMistake) && (
                          <div className="faq-answer-block warning">
                            <div className="faq-block-title">
                              <Lightbulb size={18} />
                              <strong>常見誤解</strong>
                            </div>
                            <p>{faq.misconception || faq.commonMistake}</p>
                          </div>
                        )}

                        {relatedArticles.length > 0 && (
                          <div className="faq-related-block">
                            <div className="faq-related-title">
                              <FileText size={18} />
                              <strong>相關文章</strong>
                            </div>

                            <div className="faq-related-list">
                              {relatedArticles.map((article) => (
                                <button
                                  key={article.id}
                                  type="button"
                                  className="faq-related-card"
                                  onClick={() => goToArticle(article.id)}
                                >
                                  <span>{article.title}</span>
                                  <small>閱讀文章</small>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {relatedTools.length > 0 && (
                          <div className="faq-related-block">
                            <div className="faq-related-title">
                              <Calculator size={18} />
                              <strong>相關工具</strong>
                            </div>

                            <div className="faq-tool-list">
                              {relatedTools.map((tool) => (
                                <button
                                  key={tool.id}
                                  type="button"
                                  className="tool-chip"
                                  onClick={() => goToTool(tool.id)}
                                >
                                  {tool.name}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default FAQPage;