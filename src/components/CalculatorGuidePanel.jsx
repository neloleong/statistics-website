import {
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  FileText,
  HelpCircle,
  Keyboard,
  Lightbulb,
  Target,
  XCircle
} from "lucide-react";
import { calculatorGuides } from "../data/calculatorGuides";

const articleLinks = {
  "mean-calculator": [
    { id: "standard-deviation-explained", title: "標準差是什麼？" },
    { id: "normal-distribution-intro", title: "什麼是常態分佈？" },
    { id: "survey-data-analysis-guide", title: "問卷資料怎樣做統計分析？" }
  ],

  "standard-deviation-calculator": [
    { id: "standard-deviation-explained", title: "標準差是什麼？" },
    { id: "normal-distribution-intro", title: "什麼是常態分佈？" },
    { id: "effect-size-guide", title: "什麼是效果量？" }
  ],

  "correlation-calculator": [
    { id: "pearson-vs-spearman", title: "Pearson 和 Spearman 有什麼不同？" },
    { id: "normal-distribution-intro", title: "什麼是常態分佈？" },
    { id: "nonparametric-test-intro", title: "什麼是非參數檢定？" }
  ],

  "regression-calculator": [
    { id: "linear-regression-intro", title: "什麼是線性回歸？" },
    { id: "logistic-regression-intro", title: "什麼是 Logistic 回歸？" },
    { id: "effect-size-guide", title: "什麼是效果量？" }
  ],

  "t-test-calculator": [
    { id: "t-test-vs-anova", title: "t 檢定和 ANOVA 有什麼分別？" },
    { id: "what-is-p-value", title: "什麼是 p-value？" },
    { id: "effect-size-guide", title: "什麼是效果量？" }
  ],

  "chi-square-calculator": [
    { id: "when-to-use-chi-square", title: "什麼時候用卡方檢定？" },
    { id: "what-is-p-value", title: "什麼是 p-value？" },
    { id: "survey-data-analysis-guide", title: "問卷資料怎樣做統計分析？" }
  ],

  "confidence-interval-calculator": [
    { id: "confidence-interval-intro", title: "什麼是置信區間？" },
    { id: "sample-size-estimation", title: "樣本量應該怎樣估算？" },
    { id: "what-is-p-value", title: "什麼是 p-value？" }
  ],

  "ab-test-calculator": [
    { id: "ab-testing-result", title: "A/B Testing 怎樣判斷結果？" },
    { id: "sample-size-estimation", title: "樣本量應該怎樣估算？" },
    { id: "confidence-interval-intro", title: "什麼是置信區間？" }
  ],

  "sample-size-calculator": [
    { id: "sample-size-estimation", title: "樣本量應該怎樣估算？" },
    { id: "confidence-interval-intro", title: "什麼是置信區間？" },
    { id: "survey-data-analysis-guide", title: "問卷資料怎樣做統計分析？" }
  ],

  "z-score-calculator": [
    { id: "normal-distribution-intro", title: "什麼是常態分佈？" },
    { id: "standard-deviation-explained", title: "標準差是什麼？" },
    { id: "confidence-interval-intro", title: "什麼是置信區間？" }
  ],

  "cronbach-alpha-calculator": [
    { id: "cronbach-alpha-guide", title: "Cronbach's Alpha 怎樣解讀？" },
    { id: "survey-data-analysis-guide", title: "問卷資料怎樣做統計分析？" },
    { id: "spss-output-guide", title: "SPSS 裡常見統計結果怎樣看？" }
  ],

  "anova-calculator": [
    { id: "t-test-vs-anova", title: "t 檢定和 ANOVA 有什麼分別？" },
    { id: "degree-of-freedom-explained", title: "什麼是自由度？" },
    { id: "effect-size-guide", title: "什麼是效果量？" }
  ],

  "probability-calculator": [
    { id: "what-is-p-value", title: "什麼是 p-value？" },
    { id: "confidence-interval-intro", title: "什麼是置信區間？" },
    { id: "normal-distribution-intro", title: "什麼是常態分佈？" }
  ],

  "logistic-regression-helper": [
    { id: "logistic-regression-intro", title: "什麼是 Logistic 回歸？" },
    { id: "linear-regression-intro", title: "什麼是線性回歸？" },
    { id: "survey-data-analysis-guide", title: "問卷資料怎樣做統計分析？" }
  ]
};

function CalculatorGuidePanel({ calculatorId, navigate }) {
  const guide = calculatorGuides?.[calculatorId];

  if (!guide) {
    return null;
  }

  const relatedArticles = articleLinks[calculatorId] || [];

  const renderList = (items) => {
    if (!Array.isArray(items) || items.length === 0) {
      return null;
    }

    return (
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  };

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
          <p>使用前先了解適用情境、輸入格式、解讀方式和常見錯誤。</p>
        </div>

        <div className="calculator-guide-icon">
          <BookOpen size={30} />
        </div>
      </div>

      <div className="calculator-guide-grid">
        <div className="calculator-guide-card">
          <div className="calculator-guide-card-title">
            <CheckCircle2 size={20} />
            <h3>適合用於</h3>
          </div>
          {renderList(guide.suitableFor)}
        </div>

        <div className="calculator-guide-card danger">
          <div className="calculator-guide-card-title">
            <XCircle size={20} />
            <h3>不適合用於</h3>
          </div>
          {renderList(guide.notSuitableFor)}
        </div>

        <div className="calculator-guide-card">
          <div className="calculator-guide-card-title">
            <Keyboard size={20} />
            <h3>輸入格式</h3>
          </div>
          {renderList(guide.inputFormat)}
        </div>

        <div className="calculator-guide-card warning">
          <div className="calculator-guide-card-title">
            <AlertTriangle size={20} />
            <h3>常見錯誤</h3>
          </div>
          {renderList(guide.commonMistakes)}
        </div>
      </div>

      <div className="calculator-guide-card full">
        <div className="calculator-guide-card-title">
          <Target size={20} />
          <h3>結果解讀</h3>
        </div>
        {renderList(guide.interpretation)}
      </div>

      <div className="calculator-guide-card full note">
        <div className="calculator-guide-card-title">
          <Lightbulb size={20} />
          <h3>研究報告建議</h3>
        </div>
        {renderList(guide.researchNotes)}
      </div>

      {relatedArticles.length > 0 && (
        <div className="calculator-related-section">
          <div className="calculator-related-title">
            <FileText size={20} />
            <h3>推薦閱讀文章</h3>
          </div>

          <div className="calculator-related-articles">
            {relatedArticles.map((article) => (
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
      )}

      <div className="calculator-guide-actions">
        <button type="button" className="btn-secondary" onClick={goToFaq}>
          <HelpCircle size={17} />
          查看 FAQ
        </button>

        <button type="button" className="btn-secondary" onClick={goToMethods}>
          不確定方法？返回方法選擇器
        </button>
      </div>
    </section>
  );
}

export default CalculatorGuidePanel;