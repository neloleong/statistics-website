import { useMemo, useState } from "react";
import {
  BookOpen,
  Clock,
  Layers,
  ArrowRight,
  Calculator,
  Filter
} from "lucide-react";
import { articles } from "../data/articles";

function ArticleLibraryPage({ navigate }) {
  const [activeCategory, setActiveCategory] = useState("全部");

  const categories = useMemo(() => {
    const categoryMap = new Map();

    articles.forEach((article) => {
      categoryMap.set(
        article.category,
        (categoryMap.get(article.category) || 0) + 1
      );
    });

    return [
      {
        name: "全部",
        count: articles.length
      },
      ...Array.from(categoryMap.entries()).map(([name, count]) => ({
        name,
        count
      }))
    ];
  }, []);

  const filteredArticles = useMemo(() => {
    if (activeCategory === "全部") {
      return articles;
    }

    return articles.filter((article) => article.category === activeCategory);
  }, [activeCategory]);

  function handleOpenArticle(articleId) {
    if (typeof navigate === "function") {
      navigate("article", articleId);
      return;
    }

    window.location.hash = `article/${articleId}`;
  }

  function handleOpenTool(toolId) {
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

  return (
    <div className="article-library-page">
      <section className="page-top">
        <span className="page-eyebrow">Statistics Articles</span>

        <h1 className="page-title">統計文章庫</h1>

        <p className="page-description">
          用文章方式理解常見統計概念、研究方法、問卷分析、假設檢定、
          回歸分析和商業數據判斷。你可以按分類快速篩選文章，
          也可以從文章直接前往相關計算器或方法工具。
        </p>
      </section>

      <section className="content-section">
        <div className="section-title">
          <span className="page-eyebrow">
            <Filter size={15} />
            文章分類
          </span>

          <h2>按主題快速篩選</h2>

          <p>
            目前文章庫會持續擴充。你可以先選擇分類，再閱讀對應文章。
          </p>
        </div>

        <div className="article-category-filter">
          {categories.map((category) => (
            <button
              key={category.name}
              type="button"
              className={
                activeCategory === category.name
                  ? "article-category-filter-btn active"
                  : "article-category-filter-btn"
              }
              onClick={() => setActiveCategory(category.name)}
            >
              <span>{category.name}</span>
              <strong>{category.count}</strong>
            </button>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-title">
          <span className="page-eyebrow">
            <BookOpen size={15} />
            Article List
          </span>

          <h2>
            {activeCategory === "全部"
              ? "全部統計文章"
              : `${activeCategory} 文章`}
          </h2>

          <p>
            目前顯示 {filteredArticles.length} 篇文章。每篇文章都包含摘要、
            重點段落、閱讀時間、難度及相關工具。
          </p>
        </div>

        <div className="article-grid">
          {filteredArticles.map((article) => (
            <article className="article-card" key={article.id}>
              <div className="article-card-top">
                <div className="article-detail-tags">
                  <span className="article-category">
                    <Layers size={14} />
                    {article.category}
                  </span>

                  <span className="article-difficulty">
                    {article.difficulty}
                  </span>

                  <span className="article-reading-time">
                    <Clock size={14} />
                    {article.readingTime}
                  </span>
                </div>
              </div>

              <h2>{article.title}</h2>

              <p className="article-english-title">{article.englishTitle}</p>

              <p className="article-summary">{article.summary}</p>

              {article.sections && article.sections.length > 0 && (
                <div className="article-section-preview">
                  {article.sections.slice(0, 2).map((section) => (
                    <div className="article-mini-section" key={section.heading}>
                      <h3>{section.heading}</h3>
                      <p>{section.content}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="article-card-actions">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => handleOpenArticle(article.id)}
                >
                  查看全文
                  <ArrowRight size={16} />
                </button>
              </div>

              {article.relatedTools && article.relatedTools.length > 0 && (
                <div className="article-related-tools">
                  <strong>相關工具</strong>

                  <div className="article-tool-buttons">
                    {article.relatedTools.map((toolId) => (
                      <button
                        key={toolId}
                        type="button"
                        className="text-button"
                        onClick={() => handleOpenTool(toolId)}
                      >
                        <Calculator size={15} />
                        {getToolLabel(toolId)}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="empty-state">
            <strong>暫時沒有文章</strong>
            <p>這個分類目前未有文章，之後可以繼續補充。</p>
          </div>
        )}
      </section>
    </div>
  );
}

function getToolLabel(toolId) {
  const labels = {
    "method-selector": "方法選擇器",
    "mean-calculator": "平均數計算器",
    "standard-deviation-calculator": "標準差計算器",
    "correlation-calculator": "相關係數計算器",
    "regression-calculator": "線性回歸計算器",
    "t-test-calculator": "t 檢定計算器",
    "chi-square-calculator": "卡方檢定計算器",
    "confidence-interval-calculator": "置信區間計算器",
    "ab-test-calculator": "A/B Testing 計算器",
    "sample-size-calculator": "樣本量計算器",
    "z-score-calculator": "Z 分數計算器",
    "cronbach-alpha-calculator": "Cronbach's Alpha 計算器",
    "anova-calculator": "ANOVA 計算器",
    "probability-calculator": "機率計算器",
    "logistic-regression-helper": "Logistic 回歸助手"
  };

  return labels[toolId] || toolId;
}

export default ArticleLibraryPage;