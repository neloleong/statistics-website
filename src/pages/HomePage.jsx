function HomePage({ navigate }) {
  const features = [
    {
      id: "map",
      title: "統計知識地圖",
      description: "由基礎概念到進階方法，系統化理解統計學全貌。",
      buttonText: "進入知識地圖"
    },
    {
      id: "formulas",
      title: "統計公式庫",
      description: "快速查找平均數、標準差、t 檢定、卡方、回歸等常用公式。",
      buttonText: "查看公式"
    },
    {
      id: "methods",
      title: "方法選擇器",
      description: "根據研究目的、數據類型、組別關係，推薦合適的統計方法。",
      buttonText: "選擇方法"
    },
    {
      id: "calculators",
      title: "統計計算器",
      description: "提供平均數、標準差、相關、回歸、t-test、卡方及置信區間計算。",
      buttonText: "開始計算"
    },
    {
      id: "chart",
      title: "圖表工具",
      description: "輸入或上傳數據，快速生成柱狀圖、折線圖和散點圖。",
      buttonText: "生成圖表"
    },
    {
      id: "cases",
      title: "統計案例庫",
      description: "用教育、商業、醫學、問卷和機器學習案例理解統計方法。",
      buttonText: "查看案例"
    },
    {
      id: "glossary",
      title: "統計詞彙表",
      description: "整理常見統計術語、中英文名稱、意思和例子。",
      buttonText: "查找詞彙"
    },
    {
      id: "path",
      title: "學習路線",
      description: "為零基礎、考試、論文和商業分析提供不同學習路線。",
      buttonText: "查看路線"
    }
  ];

  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <div className="page-eyebrow">Statistics Learning & Analysis Platform</div>
            <h1 className="hero-title">
              StatMap
              <br />
              統計學全景平台
            </h1>
            <p className="hero-description">
              一個整合統計知識地圖、公式庫、方法選擇器、計算器、圖表工具、案例庫、詞彙表與學習路線的統計學學習網站。
              幫助你更快理解統計方法，並把統計概念應用到學習、研究和商業分析之中。
            </p>

            <div className="hero-actions">
              <button
                type="button"
                className="btn-primary"
                onClick={() => navigate("map")}
              >
                開始學習
              </button>

              <button
                type="button"
                className="btn-secondary"
                onClick={() => navigate("calculators")}
              >
                使用計算器
              </button>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-title">平台核心能力</div>
            <div className="hero-stat-grid">
              <div className="hero-stat">
                <strong>10+</strong>
                <span>統計主題</span>
              </div>
              <div className="hero-stat">
                <strong>20+</strong>
                <span>常用公式</span>
              </div>
              <div className="hero-stat">
                <strong>7</strong>
                <span>計算工具</span>
              </div>
              <div className="hero-stat">
                <strong>多場景</strong>
                <span>案例分析</span>
              </div>
            </div>

            <div className="hero-note">
              適合學生、研究者、問卷分析、商業數據分析及統計入門學習者使用。
            </div>
          </div>
        </div>
      </section>

      <section className="container section-block">
        <div className="section-heading">
          <div className="page-eyebrow">Core Functions</div>
          <h2 className="section-title">你可以在這裡做什麼？</h2>
          <p className="section-description">
            StatMap 把統計學常見學習需求拆成不同模組，方便你按目的直接進入相應工具。
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.id}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <button
                type="button"
                className="text-button"
                onClick={() => navigate(feature.id)}
              >
                {feature.buttonText}
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="container section-block">
        <div className="learning-banner">
          <div>
            <div className="page-eyebrow">Learning Path</div>
            <h2>不知道從哪裡開始？</h2>
            <p>
              如果你是零基礎，可以先由「學習路線」開始；如果你正在做論文或問卷分析，
              可以先使用「方法選擇器」判斷應該使用哪一種統計方法。
            </p>
          </div>

          <div className="hero-actions">
            <button
              type="button"
              className="btn-primary"
              onClick={() => navigate("path")}
            >
              查看學習路線
            </button>

            <button
              type="button"
              className="btn-secondary"
              onClick={() => navigate("methods")}
            >
              使用方法選擇器
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;