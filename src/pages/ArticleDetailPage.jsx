import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  Layers,
  Calculator,
  ListChecks
} from "lucide-react";
import { articles } from "../data/articles";

function ArticleDetailPage({ articleId, navigate }) {
  const currentIndex = articles.findIndex((article) => article.id === articleId);
  const article = articles[currentIndex];

  const previousArticle =
    currentIndex > 0 ? articles[currentIndex - 1] : null;

  const nextArticle =
    currentIndex >= 0 && currentIndex < articles.length - 1
      ? articles[currentIndex + 1]
      : null;

  function handleBackToArticles() {
    if (typeof navigate === "function") {
      navigate("articles");
      return;
    }

    window.location.hash = "articles";
  }

  function handleOpenArticle(nextArticleId) {
    if (!nextArticleId) return;

    if (typeof navigate === "function") {
      navigate("article", nextArticleId);
      return;
    }

    window.location.hash = `article/${nextArticleId}`;
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

  if (!article) {
    return (
      <div className="article-detail-page">
        <section className="article-detail-hero">
          <button
            type="button"
            className="text-button back-link"
            onClick={handleBackToArticles}
          >
            <ArrowLeft size={16} />
            返回文章庫
          </button>

          <span className="page-eyebrow">Article Not Found</span>

          <h1>找不到文章</h1>

          <p className="article-detail-summary">
            這篇文章可能不存在，或網址中的文章 ID 有誤。你可以返回文章庫重新選擇文章。
          </p>

          <div className="article-detail-bottom">
            <button
              type="button"
              className="btn-primary"
              onClick={handleBackToArticles}
            >
              返回文章庫
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="article-detail-page">
      <section className="article-detail-hero">
        <button
          type="button"
          className="text-button back-link"
          onClick={handleBackToArticles}
        >
          <ArrowLeft size={16} />
          返回文章庫
        </button>

        <div className="article-detail-tags">
          <span className="article-category">
            <Layers size={14} />
            {article.category}
          </span>

          <span className="article-difficulty">{article.difficulty}</span>

          <span className="article-reading-time">
            <Clock size={14} />
            {article.readingTime}
          </span>
        </div>

        <h1>{article.title}</h1>

        <p className="article-detail-english">{article.englishTitle}</p>

        <p className="article-detail-summary">{article.summary}</p>
      </section>

      <section className="article-detail-content">
        {article.sections.map((section, index) => (
          <article className="article-detail-section" key={section.heading}>
            <div className="article-section-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div>
              <h2>{section.heading}</h2>
              <p>{section.content}</p>
            </div>
          </article>
        ))}
      </section>

      {article.relatedTools && article.relatedTools.length > 0 && (
        <section className="article-detail-tools">
          <div className="section-title">
            <span className="page-eyebrow">
              <Calculator size={15} />
              Related Tools
            </span>

            <h2>相關工具</h2>

            <p>
              你可以在閱讀文章後，直接使用相關統計工具進行計算或方法判斷。
            </p>
          </div>

          <div className="article-detail-tool-list">
            {article.relatedTools.map((toolId) => (
              <button
                key={toolId}
                type="button"
                className="article-detail-tool-button"
                onClick={() => handleOpenTool(toolId)}
              >
                <Calculator size={16} />
                {getToolLabel(toolId)}
              </button>
            ))}
          </div>
        </section>
      )}

      <section className="article-navigation-panel">
        <div className="section-title">
          <span className="page-eyebrow">
            <ListChecks size={15} />
            Continue Reading
          </span>

          <h2>繼續閱讀</h2>

          <p>讀完這篇文章後，可以繼續閱讀上一篇或下一篇統計文章。</p>
        </div>

        <div className="article-nav-grid">
          {previousArticle ? (
            <button
              type="button"
              className="article-nav-card"
              onClick={() => handleOpenArticle(previousArticle.id)}
            >
              <span>
                <ArrowLeft size={16} />
                上一篇
              </span>

              <h3>{previousArticle.title}</h3>

              <p>{previousArticle.summary}</p>
            </button>
          ) : (
            <div className="article-nav-card disabled">
              <span>
                <ArrowLeft size={16} />
                上一篇
              </span>

              <h3>已經是第一篇文章</h3>

              <p>你可以返回文章庫，查看其他分類的文章。</p>
            </div>
          )}

          {nextArticle ? (
            <button
              type="button"
              className="article-nav-card"
              onClick={() => handleOpenArticle(nextArticle.id)}
            >
              <span>
                下一篇
                <ArrowRight size={16} />
              </span>

              <h3>{nextArticle.title}</h3>

              <p>{nextArticle.summary}</p>
            </button>
          ) : (
            <div className="article-nav-card disabled">
              <span>
                下一篇
                <ArrowRight size={16} />
              </span>

              <h3>已經是最後一篇文章</h3>

              <p>你可以返回文章庫，重新選擇想閱讀的主題。</p>
            </div>
          )}
        </div>

        <div className="article-detail-bottom">
          <button
            type="button"
            className="btn-secondary"
            onClick={handleBackToArticles}
          >
            <BookOpen size={16} />
            返回文章庫
          </button>

          <button
            type="button"
            className="btn-primary"
            onClick={() => {
              if (typeof navigate === "function") {
                navigate("faq");
                return;
              }

              window.location.hash = "faq";
            }}
          >
            查看 FAQ
            <ArrowRight size={16} />
          </button>
        </div>
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

export default ArticleDetailPage;