import { useMemo, useState } from "react";
import { articles } from "../data/articles";

function ArticleLibraryPage({ navigate }) {
  const [activeCategory, setActiveCategory] = useState("全部");

  const safeArticles = Array.isArray(articles) ? articles : [];

  const categories = useMemo(() => {
    const categoryList = safeArticles
      .map((article) => article?.category)
      .filter(Boolean);

    return ["全部", ...Array.from(new Set(categoryList))];
  }, [safeArticles]);

  const filteredArticles = useMemo(() => {
    if (activeCategory === "全部") {
      return safeArticles;
    }

    return safeArticles.filter((article) => article?.category === activeCategory);
  }, [activeCategory, safeArticles]);

  const getCategoryCount = (category) => {
    if (category === "全部") {
      return safeArticles.length;
    }

    return safeArticles.filter((article) => article?.category === category).length;
  };

  const goToArticle = (articleId) => {
    if (!articleId) return;
    navigate(`article/${articleId}`);
  };

  const goToTool = (toolId) => {
    if (!toolId) return;

    if (toolId === "method-selector") {
      navigate("methods");
      return;
    }

    navigate(`calculators/${toolId}`);
  };

  const getPreviewSections = (article) => {
    if (!Array.isArray(article?.sections)) {
      return [];
    }

    return article.sections.slice(0, 2);
  };

  const getSectionPreviewText = (section) => {
    if (!section) return "";

    if (typeof section === "string") {
      return section;
    }

    if (typeof section.content === "string") {
      return section.content;
    }

    if (Array.isArray(section.content)) {
      return section.content.join(" ");
    }

    if (Array.isArray(section.paragraphs)) {
      return section.paragraphs.join(" ");
    }

    return "";
  };

  return (
    <main className="page">
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Statistics Articles</div>
          <h1>統計文章庫</h1>
          <p>
            用簡單語言理解統計概念、研究方法、問卷分析、A/B Testing
            與常見統計結果解讀。
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Article Categories</div>
              <h2>文章分類</h2>
            </div>
            <p>
              目前共有 <strong>{safeArticles.length}</strong> 篇統計文章。
            </p>
          </div>

          <div className="filter-pills">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "filter-pill active"
                    : "filter-pill"
                }
                onClick={() => setActiveCategory(category)}
              >
                <span>{category}</span>
                <small>{getCategoryCount(category)}</small>
              </button>
            ))}
          </div>

          <div className="article-result-count">
            目前顯示 <strong>{filteredArticles.length}</strong> 篇文章
          </div>

          {filteredArticles.length === 0 ? (
            <div className="empty-box">
              <h3>暫時沒有相關文章</h3>
              <p>可以切換其他分類，或返回全部文章。</p>
              <button
                type="button"
                className="btn-primary"
                onClick={() => setActiveCategory("全部")}
              >
                查看全部文章
              </button>
            </div>
          ) : (
            <div className="article-grid">
              {filteredArticles.map((article) => {
                const previewSections = getPreviewSections(article);

                return (
                  <article className="article-card" key={article.id}>
                    <div className="article-card-top">
                      <span className="article-category">
                        {article.category || "未分類"}
                      </span>
                      <span className="article-difficulty">
                        {article.difficulty || "入門"}
                      </span>
                      <span className="article-time">
                        {article.readingTime || "3 分鐘"}
                      </span>
                    </div>

                    <h3>{article.title || "未命名文章"}</h3>

                    {article.englishTitle && (
                      <p className="article-english-title">
                        {article.englishTitle}
                      </p>
                    )}

                    <p className="article-summary">
                      {article.summary || "這篇文章暫未加入摘要。"}
                    </p>

                    {previewSections.length > 0 && (
                      <div className="article-preview">
                        {previewSections.map((section, index) => {
                          const previewText = getSectionPreviewText(section);

                          if (!previewText) return null;

                          return (
                            <div className="article-preview-item" key={index}>
                              {section?.heading && <h4>{section.heading}</h4>}
                              <p>{previewText}</p>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {Array.isArray(article.relatedTools) &&
                      article.relatedTools.length > 0 && (
                        <div className="article-tools">
                          <div className="mini-label">相關工具</div>
                          <div className="tool-chip-list">
                            {article.relatedTools.map((tool) => {
                              if (!tool) return null;

                              const toolId =
                                typeof tool === "string" ? tool : tool.id;
                              const toolName =
                                typeof tool === "string"
                                  ? tool
                                  : tool.name || tool.title || tool.id;

                              return (
                                <button
                                  key={toolId}
                                  type="button"
                                  className="tool-chip"
                                  onClick={() => goToTool(toolId)}
                                >
                                  {toolName}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                    <div className="article-card-actions">
                      <button
                        type="button"
                        className="btn-primary"
                        onClick={() => goToArticle(article.id)}
                      >
                        查看全文
                      </button>
                    </div>
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

export default ArticleLibraryPage;