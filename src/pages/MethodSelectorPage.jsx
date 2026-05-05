import { useMemo, useState } from "react";
import {
  BarChart3,
  Calculator,
  CheckCircle2,
  FileText,
  HelpCircle,
  LineChart,
  MousePointerClick,
  RefreshCcw,
  Route,
  Search,
  Target,
} from "lucide-react";

const methodScenarios = [
  {
    id: "compare-two-groups",
    title: "比較兩組平均數",
    description: "例如比較男生和女生的成績、實驗組和對照組的差異。",
    tags: ["兩組", "平均數", "組間比較"],
    recommendedMethod: "t 檢定",
    englishMethod: "t-test",
    explanation:
      "當你想比較兩個獨立群組的平均數是否有顯著差異時，可以使用 t 檢定。如果是同一批人前後測，則應使用配對樣本 t 檢定。",
    calculator: {
      id: "t-test-calculator",
      name: "t 檢定計算器",
    },
    articles: [
      {
        id: "t-test-vs-anova",
        title: "t 檢定和 ANOVA 有什麼分別？",
      },
      {
        id: "what-is-p-value",
        title: "什麼是 p-value？",
      },
      {
        id: "effect-size-guide",
        title: "什麼是效果量？",
      },
    ],
  },
  {
    id: "compare-multiple-groups",
    title: "比較三組或以上平均數",
    description: "例如比較三種教學方法、三個地區、三個產品版本的差異。",
    tags: ["三組以上", "平均數", "ANOVA"],
    recommendedMethod: "單因子變異數分析",
    englishMethod: "One-way ANOVA",
    explanation:
      "當自變量有三個或以上組別，並且你想比較不同組別之間的平均數差異時，通常使用 ANOVA，而不是重複做多次 t 檢定。",
    calculator: {
      id: "anova-calculator",
      name: "ANOVA 計算器",
    },
    articles: [
      {
        id: "t-test-vs-anova",
        title: "t 檢定和 ANOVA 有什麼分別？",
      },
      {
        id: "degree-of-freedom-explained",
        title: "什麼是自由度？",
      },
      {
        id: "effect-size-guide",
        title: "什麼是效果量？",
      },
    ],
  },
  {
    id: "categorical-relationship",
    title: "分析兩個類別變量是否有關係",
    description: "例如性別和是否購買、地區和滿意度等類別資料。",
    tags: ["類別資料", "交叉表", "比例"],
    recommendedMethod: "卡方檢定",
    englishMethod: "Chi-square test",
    explanation:
      "當兩個變量都是類別型資料，並且你想知道它們之間是否有統計關聯時，可以使用卡方檢定。",
    calculator: {
      id: "chi-square-calculator",
      name: "卡方檢定計算器",
    },
    articles: [
      {
        id: "when-to-use-chi-square",
        title: "什麼時候用卡方檢定？",
      },
      {
        id: "what-is-p-value",
        title: "什麼是 p-value？",
      },
      {
        id: "survey-data-analysis-guide",
        title: "問卷資料怎樣做統計分析？",
      },
    ],
  },
  {
    id: "correlation",
    title: "分析兩個數值變量的關係",
    description: "例如學習時間和考試分數、廣告費和銷售額是否相關。",
    tags: ["相關分析", "數值變量", "關係強度"],
    recommendedMethod: "相關分析",
    englishMethod: "Correlation Analysis",
    explanation:
      "當你想了解兩個數值變量是否一起變動，可以使用相關分析。若資料近似常態並呈線性關係，可考慮 Pearson；若資料不符合常態或是等級資料，可考慮 Spearman。",
    calculator: {
      id: "correlation-calculator",
      name: "相關係數計算器",
    },
    articles: [
      {
        id: "pearson-vs-spearman",
        title: "Pearson 和 Spearman 有什麼不同？",
      },
      {
        id: "normal-distribution-intro",
        title: "什麼是常態分佈？",
      },
      {
        id: "nonparametric-test-intro",
        title: "什麼是非參數檢定？",
      },
    ],
  },
  {
    id: "linear-prediction",
    title: "用一個或多個變量預測數值結果",
    description: "例如用廣告費、客流量預測銷售額。",
    tags: ["預測", "數值結果", "回歸"],
    recommendedMethod: "線性回歸",
    englishMethod: "Linear Regression",
    explanation:
      "當你的結果變量是連續數值，例如分數、收入、銷售額、成本等，可以使用線性回歸來分析影響因素與預測結果。",
    calculator: {
      id: "regression-calculator",
      name: "線性回歸計算器",
    },
    articles: [
      {
        id: "linear-regression-intro",
        title: "什麼是線性回歸？",
      },
      {
        id: "logistic-regression-intro",
        title: "什麼是 Logistic 回歸？",
      },
      {
        id: "effect-size-guide",
        title: "什麼是效果量？",
      },
    ],
  },
  {
    id: "binary-outcome",
    title: "預測是否發生某件事",
    description: "例如是否購買、是否流失、是否通過、是否患病。",
    tags: ["二元結果", "是/否", "分類預測"],
    recommendedMethod: "Logistic 回歸",
    englishMethod: "Logistic Regression",
    explanation:
      "當結果只有兩種，例如會/不會、是/否、成功/失敗，就不適合用線性回歸，通常應使用 Logistic 回歸。",
    calculator: {
      id: "logistic-regression-helper",
      name: "Logistic 回歸輔助工具",
    },
    articles: [
      {
        id: "logistic-regression-intro",
        title: "什麼是 Logistic 回歸？",
      },
      {
        id: "linear-regression-intro",
        title: "什麼是線性回歸？",
      },
      {
        id: "survey-data-analysis-guide",
        title: "問卷資料怎樣做統計分析？",
      },
    ],
  },
  {
    id: "questionnaire-reliability",
    title: "檢查問卷題目是否穩定可靠",
    description: "例如量表題目是否測量同一個概念。",
    tags: ["問卷", "信度", "量表"],
    recommendedMethod: "Cronbach's Alpha",
    englishMethod: "Cronbach's Alpha",
    explanation:
      "當你有多條題目共同測量同一個構念，例如滿意度、信任感、學習動機，可以使用 Cronbach's Alpha 檢查內部一致性。",
    calculator: {
      id: "cronbach-alpha-calculator",
      name: "Cronbach's Alpha 計算器",
    },
    articles: [
      {
        id: "cronbach-alpha-guide",
        title: "Cronbach's Alpha 怎樣解讀？",
      },
      {
        id: "survey-data-analysis-guide",
        title: "問卷資料怎樣做統計分析？",
      },
      {
        id: "spss-output-guide",
        title: "SPSS 裡常見統計結果怎樣看？",
      },
    ],
  },
  {
    id: "ab-testing",
    title: "比較兩個版本哪個效果較好",
    description: "例如 A/B Testing、網頁版本、廣告素材、轉化率比較。",
    tags: ["A/B Testing", "轉化率", "商業分析"],
    recommendedMethod: "比例檢定 / A/B Testing 分析",
    englishMethod: "A/B Test Analysis",
    explanation:
      "當你比較兩個版本的轉化率、點擊率或成功率時，可以使用 A/B Testing 分析，重點是樣本量、轉化率差異和信心水平。",
    calculator: {
      id: "ab-test-calculator",
      name: "A/B Testing 計算器",
    },
    articles: [
      {
        id: "ab-testing-result",
        title: "A/B Testing 怎樣判斷結果？",
      },
      {
        id: "sample-size-estimation",
        title: "樣本量應該怎樣估算？",
      },
      {
        id: "confidence-interval-intro",
        title: "什麼是置信區間？",
      },
    ],
  },
  {
    id: "sample-size",
    title: "估算研究需要多少樣本",
    description: "例如問卷研究、民意調查、實驗設計前的樣本量估算。",
    tags: ["樣本量", "研究設計", "置信水平"],
    recommendedMethod: "樣本量估算",
    englishMethod: "Sample Size Estimation",
    explanation:
      "當你在研究開始前需要知道最少需要收集多少樣本，可以根據置信水平、誤差範圍、母體比例或效果量來估算。",
    calculator: {
      id: "sample-size-calculator",
      name: "樣本量計算器",
    },
    articles: [
      {
        id: "sample-size-estimation",
        title: "樣本量應該怎樣估算？",
      },
      {
        id: "confidence-interval-intro",
        title: "什麼是置信區間？",
      },
      {
        id: "survey-data-analysis-guide",
        title: "問卷資料怎樣做統計分析？",
      },
    ],
  },
  {
    id: "confidence-interval",
    title: "估計平均數或比例的可能範圍",
    description: "例如平均滿意度、支持率、轉化率的可信區間。",
    tags: ["置信區間", "估計", "誤差範圍"],
    recommendedMethod: "置信區間估算",
    englishMethod: "Confidence Interval",
    explanation:
      "當你不只想知道一個點估計，而是想知道真實數值可能落在哪個範圍，可以使用置信區間。",
    calculator: {
      id: "confidence-interval-calculator",
      name: "置信區間計算器",
    },
    articles: [
      {
        id: "confidence-interval-intro",
        title: "什麼是置信區間？",
      },
      {
        id: "sample-size-estimation",
        title: "樣本量應該怎樣估算？",
      },
      {
        id: "what-is-p-value",
        title: "什麼是 p-value？",
      },
    ],
  },
];

function MethodSelectorPage({ navigate }) {
  const [keyword, setKeyword] = useState("");
  const [selectedScenarioId, setSelectedScenarioId] = useState(
    methodScenarios[0].id
  );

  const filteredScenarios = useMemo(() => {
    const cleanKeyword = keyword.trim().toLowerCase();

    if (!cleanKeyword) {
      return methodScenarios;
    }

    return methodScenarios.filter((scenario) => {
      const searchText = [
        scenario.title,
        scenario.description,
        scenario.recommendedMethod,
        scenario.englishMethod,
        ...scenario.tags,
        ...scenario.articles.map((article) => article.title),
      ]
        .join(" ")
        .toLowerCase();

      return searchText.includes(cleanKeyword);
    });
  }, [keyword]);

  const selectedScenario =
    methodScenarios.find((scenario) => scenario.id === selectedScenarioId) ||
    methodScenarios[0];

  const handleSelectScenario = (scenarioId) => {
    setSelectedScenarioId(scenarioId);
  };

  const goToCalculator = (calculatorId) => {
    if (!calculatorId) return;
    navigate(`calculators/${calculatorId}`);
  };

  const goToArticle = (articleId) => {
    if (!articleId) return;
    navigate(`article/${articleId}`);
  };

  const resetSearch = () => {
    setKeyword("");
    setSelectedScenarioId(methodScenarios[0].id);
  };

  return (
    <main className="page">
      <section className="page-hero method-hero">
        <div className="container">
          <div className="eyebrow">Method Selector</div>
          <h1>統計方法選擇器</h1>
          <p>
            不知道應該用 t 檢定、ANOVA、卡方檢定、相關分析還是回歸？
            你可以先選擇研究情境，系統會推薦適合的方法、計算器和延伸文章。
          </p>

          <div className="method-hero-actions">
            <button
              type="button"
              className="btn-primary"
              onClick={() => navigate("calculators")}
            >
              <Calculator size={18} />
              前往計算器
            </button>

            <button
              type="button"
              className="btn-secondary"
              onClick={() => navigate("articles")}
            >
              <FileText size={18} />
              閱讀統計文章
            </button>
          </div>
        </div>
      </section>

      <section className="section method-selector-section">
        <div className="container">
          <div className="method-selector-layout">
            <aside className="method-sidebar">
              <div className="method-search-box">
                <div className="method-search-input-wrap">
                  <Search size={18} />
                  <input
                    type="text"
                    value={keyword}
                    onChange={(event) => setKeyword(event.target.value)}
                    placeholder="搜尋：問卷、相關、A/B、樣本量..."
                  />
                </div>

                {keyword && (
                  <button
                    type="button"
                    className="method-reset-btn"
                    onClick={resetSearch}
                  >
                    <RefreshCcw size={15} />
                    重設
                  </button>
                )}
              </div>

              <div className="method-sidebar-title">
                <Route size={18} />
                <span>選擇你的研究情境</span>
              </div>

              <div className="method-scenario-list">
                {filteredScenarios.length === 0 ? (
                  <div className="method-empty">
                    <HelpCircle size={22} />
                    <p>暫時找不到相關情境。</p>
                    <button type="button" onClick={resetSearch}>
                      查看全部情境
                    </button>
                  </div>
                ) : (
                  filteredScenarios.map((scenario) => (
                    <button
                      key={scenario.id}
                      type="button"
                      className={
                        selectedScenario.id === scenario.id
                          ? "method-scenario-card active"
                          : "method-scenario-card"
                      }
                      onClick={() => handleSelectScenario(scenario.id)}
                    >
                      <div className="method-scenario-card-title">
                        {scenario.title}
                      </div>
                      <p>{scenario.description}</p>
                      <div className="method-scenario-tags">
                        {scenario.tags.slice(0, 3).map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </button>
                  ))
                )}
              </div>
            </aside>

            <section className="method-result-panel">
              <div className="method-result-header">
                <div>
                  <div className="eyebrow">Recommended Method</div>
                  <h2>{selectedScenario.recommendedMethod}</h2>
                  <p>{selectedScenario.englishMethod}</p>
                </div>

                <div className="method-result-icon">
                  <Target size={30} />
                </div>
              </div>

              <div className="method-result-summary">
                <CheckCircle2 size={20} />
                <p>{selectedScenario.explanation}</p>
              </div>

              <div className="method-info-grid">
                <div className="method-info-card">
                  <div className="method-info-icon">
                    <MousePointerClick size={22} />
                  </div>
                  <h3>適用情境</h3>
                  <p>{selectedScenario.description}</p>
                </div>

                <div className="method-info-card">
                  <div className="method-info-icon">
                    <BarChart3 size={22} />
                  </div>
                  <h3>方法標籤</h3>
                  <div className="method-tag-row">
                    {selectedScenario.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="method-recommend-block">
                <div className="method-recommend-title">
                  <Calculator size={20} />
                  <h3>推薦計算器</h3>
                </div>

                <div className="method-calculator-card">
                  <div>
                    <strong>{selectedScenario.calculator.name}</strong>
                    <p>
                      可直接用來進行 {selectedScenario.recommendedMethod} 的基本計算或輔助判斷。
                    </p>
                  </div>

                  <button
                    type="button"
                    className="btn-primary"
                    onClick={() =>
                      goToCalculator(selectedScenario.calculator.id)
                    }
                  >
                    打開計算器
                  </button>
                </div>
              </div>

              <div className="method-recommend-block">
                <div className="method-recommend-title">
                  <FileText size={20} />
                  <h3>推薦閱讀文章</h3>
                </div>

                <div className="method-article-list">
                  {selectedScenario.articles.map((article) => (
                    <button
                      key={article.id}
                      type="button"
                      className="method-article-card"
                      onClick={() => goToArticle(article.id)}
                    >
                      <div className="method-article-icon">
                        <LineChart size={18} />
                      </div>
                      <div>
                        <strong>{article.title}</strong>
                        <span>查看文章詳情</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="method-bottom-actions">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => navigate("faq")}
                >
                  查看 FAQ
                </button>

                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => navigate("path")}
                >
                  前往學習路線
                </button>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MethodSelectorPage;