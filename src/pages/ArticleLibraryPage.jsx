import { BookOpen, ArrowRight, Clock, BarChart3 } from "lucide-react";
import { articles } from "../data/articles";

function ArticleLibraryPage({ navigate }) {
  function openRelatedTool(tool) {
    if (typeof navigate === "function") {
      navigate(tool.page, tool.param || null);
      return;
    }

    window.location.hash = tool.param ? `${tool.page}/${tool.param}` : tool.page;
  }

  return (
    <div className="page-section">
      <div className="page-top">
        <div className="page-eyebrow">Statistics Articles</div>
        <h1 className="page-title">統計教學文章</h1>
        <p className="page-description">
          這裡整理常見統計問題的入門解釋，幫助你理解 p-value、標準差、
          t 檢定、ANOVA、卡方檢定、Cronbach&apos;s Alpha、A/B Testing、
          Logistic 回歸與樣本量估算等核心概念。
        </p>
      </div>

      <section className="content-section inner-section">
        <div className="section-heading">
          <div className="page-eyebrow">Featured Guides</div>
          <h2 className="section-title">常用統計概念快速理解</h2>
          <p className="section-description">
            每篇文章都會連接到相關工具，方便你一邊學習，一邊使用計算器實作。
          </p>
        </div>

        <div className="article-grid">
          {articles.map((article) => (
            <article className="article-card" key={article.id}>
              <div className="article-card-top">
                <span className="article-category">
                  <BookOpen size={14} />
                  {article.category}
                </span>

                <span className="article-difficulty">
                  {article.difficulty}
                </span>
              </div>

              <h2>{article.title}</h2>
              <p className="article-english-title">{article.englishTitle}</p>
              <p className="article-summary">{article.summary}</p>

              <div className="article-meta-row">
                <span>
                  <Clock size={14} />
                  {article.readingTime}
                </span>
                <span>
                  <BarChart3 size={14} />
                  {article.sections.length} 個重點
                </span>
              </div>

              <div className="article-section-preview">
                {article.sections.map((section) => (
                  <div key={section.heading} className="article-mini-section">
                    <h3>{section.heading}</h3>
                    <p>{section.content}</p>
                  </div>
                ))}
              </div>

              {article.relatedTools?.length ? (
                <div className="article-related-tools">
                  <strong>相關工具：</strong>

                  <div className="article-tool-buttons">
                    {article.relatedTools.map((tool) => (
                      <button
                        key={`${article.id}-${tool.label}`}
                        type="button"
                        className="text-button"
                        onClick={() => openRelatedTool(tool)}
                      >
                        {tool.label}
                        <ArrowRight size={14} />
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="content-section inner-section">
        <div className="section-heading">
          <div className="page-eyebrow">Next Step</div>
          <h2 className="section-title">建議學習方式</h2>
          <p className="section-description">
            如果你是初學者，可以先從「標準差是什麼」和「什麼是 p-value」開始；
            如果你正在做問卷或論文，可以優先閱讀 t 檢定、ANOVA、卡方檢定和
            Cronbach&apos;s Alpha 的文章。
          </p>
        </div>

        <div className="three-column-grid">
          <div className="small-card">
            <h3>初學者</h3>
            <p>先理解平均數、標準差、p-value 和置信區間，建立統計基本語感。</p>
          </div>

          <div className="small-card">
            <h3>論文研究</h3>
            <p>重點理解 t 檢定、ANOVA、卡方檢定、信度分析和樣本量估算。</p>
          </div>

          <div className="small-card">
            <h3>商業分析</h3>
            <p>可優先學習 A/B Testing、相關分析、線性回歸和 Logistic 回歸。</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArticleLibraryPage;