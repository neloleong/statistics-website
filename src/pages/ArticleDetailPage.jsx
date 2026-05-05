import { ArrowLeft, ArrowRight, BookOpen, Clock, BarChart3 } from "lucide-react";
import { articles } from "../data/articles";

function ArticleDetailPage({ articleId, navigate }) {
  const article = articles.find((item) => item.id === articleId);

  function goBack() {
    if (typeof navigate === "function") {
      navigate("articles");
      return;
    }

    window.location.hash = "articles";
  }

  function openRelatedTool(tool) {
    if (typeof navigate === "function") {
      navigate(tool.page, tool.param || null);
      return;
    }

    window.location.hash = tool.param ? `${tool.page}/${tool.param}` : tool.page;
  }

  if (!article) {
    return (
      <div className="page-section">
        <div className="empty-state">
          <strong>找不到這篇文章</strong>
          <p>
            這篇文章可能不存在，或網址中的文章 ID 有誤。請返回文章庫重新選擇。
          </p>

          <button type="button" className="primary-btn" onClick={goBack}>
            返回統計文章
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="article-detail-page">
      <section className="article-detail-hero">
        <button type="button" className="text-button back-link" onClick={goBack}>
          <ArrowLeft size={16} />
          返回統計文章
        </button>

        <div className="article-detail-tags">
          <span className="article-category">
            <BookOpen size={14} />
            {article.category}
          </span>

          <span className="article-difficulty">
            {article.difficulty}
          </span>

          <span className="article-reading-time">
            <Clock size={14} />
            {article.readingTime}
          </span>

          <span className="article-reading-time">
            <BarChart3 size={14} />
            {article.sections.length} 個重點
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

      {article.relatedTools?.length ? (
        <section className="article-detail-tools">
          <div className="section-heading">
            <div className="page-eyebrow">Related Tools</div>
            <h2 className="section-title">相關工具</h2>
            <p className="section-description">
              你可以閱讀完文章後，直接使用相關計算器或方法選擇器進行實作。
            </p>
          </div>

          <div className="article-detail-tool-list">
            {article.relatedTools.map((tool) => (
              <button
                key={`${article.id}-${tool.label}`}
                type="button"
                className="article-detail-tool-button"
                onClick={() => openRelatedTool(tool)}
              >
                {tool.label}
                <ArrowRight size={16} />
              </button>
            ))}
          </div>
        </section>
      ) : null}

      <section className="article-detail-bottom">
        <button type="button" className="secondary-btn" onClick={goBack}>
          返回文章庫
        </button>

        <button
          type="button"
          className="primary-btn"
          onClick={() => navigate && navigate("methods")}
        >
          不知道用哪個方法？前往方法選擇器
          <ArrowRight size={16} />
        </button>
      </section>
    </div>
  );
}

export default ArticleDetailPage;