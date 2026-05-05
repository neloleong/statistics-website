import {
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  FileText,
  HelpCircle,
  Lightbulb,
  Target
} from "lucide-react";
import { getCalculatorGuide } from "../data/calculatorGuides";

function CalculatorGuidePanel({ calculatorId, navigate }) {
  const guide = getCalculatorGuide(calculatorId);

  if (!guide) {
    return null;
  }

  const goToArticle = (articleId) => {
    if (!articleId || !navigate) return;
    navigate(`article/${articleId}`);
  };

  const goToFaq = () => {
    if (!navigate) return;
    navigate("faq");
  };

  const goToMethods = () => {
    if (!navigate) return;
    navigate("methods");
  };

  return (
    <section className="calculator-guide-panel">
      <div className="calculator-guide-header">
        <div>
          <div className="eyebrow">Calculator Guide</div>
          <h2>{guide.title}</h2>
          <p>{guide.englishTitle}</p>
        </div>

        <div className="calculator-guide-icon">
          <BookOpen size={30} />
        </div>
      </div>

      <div className="calculator-guide-purpose">
        <Target size={20} />
        <p>{guide.purpose}</p>
      </div>

      <div className="calculator-guide-grid">
        <div className="calculator-guide-card">
          <div className="calculator-guide-card-title">
            <CheckCircle2 size={20} />
            <h3>適合用於</h3>
          </div>

          <ul>
            {guide.suitableFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="calculator-guide-card warning">
          <div className="calculator-guide-card-title">
            <AlertTriangle size={20} />
            <h3>常見錯誤</h3>
          </div>

          <ul>
            {guide.commonMistakes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="calculator-guide-card full">
        <div className="calculator-guide-card-title">
          <Lightbulb size={20} />
          <h3>結果解讀提示</h3>
        </div>

        <ul className="calculator-tip-list">
          {guide.interpretationTips.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="calculator-related-section">
        <div className="calculator-related-title">
          <FileText size={20} />
          <h3>推薦閱讀文章</h3>
        </div>

        <div className="calculator-related-articles">
          {guide.relatedArticles.map((article) => (
            <button
              key={article.id}
              type="button"
              className="calculator-related-article"
              onClick={() => goToArticle(article.id)}
            >
              <strong>{article.title}</strong>
              <span>查看文章詳情</span>
            </button>
          ))}
        </div>
      </div>

      <div className="calculator-faq-section">
        <div className="calculator-faq-title">
          <HelpCircle size={20} />
          <h3>相關 FAQ 關鍵詞</h3>
        </div>

        <div className="calculator-faq-tags">
          {guide.relatedFaqKeywords.map((keyword) => (
            <span key={keyword}>{keyword}</span>
          ))}
        </div>

        <div className="calculator-guide-actions">
          <button type="button" className="btn-secondary" onClick={goToFaq}>
            查看 FAQ
          </button>

          <button type="button" className="btn-secondary" onClick={goToMethods}>
            不確定方法？返回方法選擇器
          </button>
        </div>
      </div>
    </section>
  );
}

export default CalculatorGuidePanel;