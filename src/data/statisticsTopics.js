export const statisticsTopics = [
  {
    id: "descriptive-statistics",
    category: "基礎統計",
    title: "描述統計",
    englishTitle: "Descriptive Statistics",
    level: "入門",
    description: "描述統計用於整理、概括及呈現數據，是學習統計學的第一步。",
    icon: "📊",
    keywords: ["平均數", "中位數", "眾數", "標準差", "方差", "四分位數", "離群值", "箱形圖"],
    topics: [
      {
        id: "mean",
        name: "平均數",
        englishName: "Mean",
        description: "所有數值加總後除以數據個數，用於表示數據的集中趨勢。",
        example: "5, 6, 7 的平均數是 6。"
      },
      {
        id: "median",
        name: "中位數",
        englishName: "Median",
        description: "將數據由小至大排列後位於中間的數值。",
        example: "1, 3, 9 的中位數是 3。"
      },
      {
        id: "mode",
        name: "眾數",
        englishName: "Mode",
        description: "一組數據中出現次數最多的數值。",
        example: "2, 2, 3, 5 的眾數是 2。"
      },
      {
        id: "variance",
        name: "方差",
        englishName: "Variance",
        description: "衡量數據與平均數之間的平均平方差。",
        example: "方差越大，代表數據越分散。"
      },
      {
        id: "standard-deviation",
        name: "標準差",
        englishName: "Standard Deviation",
        description: "方差的平方根，用於衡量數據的離散程度。",
        example: "標準差越小，代表數據越集中。"
      },
      {
        id: "quartile",
        name: "四分位數",
        englishName: "Quartile",
        description: "將數據分為四等份的分割點。",
        example: "常用於箱形圖及離群值分析。"
      },
      {
        id: "outlier",
        name: "離群值",
        englishName: "Outlier",
        description: "與大多數數據明顯不同的極端數值。",
        example: "大部分消費額約 100 元，但有一筆 10000 元，可能是離群值。"
      }
    ]
  },
  {
    id: "probability",
    category: "機率基礎",
    title: "機率論",
    englishTitle: "Probability",
    level: "入門至中階",
    description: "機率論用於研究不確定事件發生的可能性，是推論統計的基礎。",
    icon: "🎲",
    keywords: ["條件概率", "貝葉斯定理", "隨機變量", "期望值", "分佈"],
    topics: [
      {
        id: "basic-probability",
        name: "基本機率",
        englishName: "Basic Probability",
        description: "事件發生的可能性，通常介乎 0 至 1 之間。",
        example: "擲一粒公平骰子出現 6 的機率是 1/6。"
      },
      {
        id: "conditional-probability",
        name: "條件概率",
        englishName: "Conditional Probability",
        description: "在某事件已發生的情況下，另一事件發生的概率。",
        example: "已知學生有溫習，考試合格的概率。"
      },
      {
        id: "bayes-theorem",
        name: "貝葉斯定理",
        englishName: "Bayes' Theorem",
        description: "根據新證據更新事件發生概率的方法。",
        example: "根據檢測結果更新患病概率。"
      },
      {
        id: "expected-value",
        name: "期望值",
        englishName: "Expected Value",
        description: "隨機變量長期平均結果。",
        example: "抽獎遊戲的平均收益。"
      },
      {
        id: "normal-distribution",
        name: "正態分佈",
        englishName: "Normal Distribution",
        description: "最常見的連續概率分佈，呈鐘形曲線。",
        example: "身高、考試成績常近似正態分佈。"
      },
      {
        id: "binomial-distribution",
        name: "二項分佈",
        englishName: "Binomial Distribution",
        description: "描述固定次數獨立試驗中成功次數的分佈。",
        example: "投擲硬幣 10 次出現正面的次數。"
      },
      {
        id: "poisson-distribution",
        name: "泊松分佈",
        englishName: "Poisson Distribution",
        description: "描述固定時間或空間內事件發生次數的分佈。",
        example: "一天內客服收到的投訴數。"
      }
    ]
  },
  {
    id: "inferential-statistics",
    category: "推論統計",
    title: "推論統計",
    englishTitle: "Inferential Statistics",
    level: "中階",
    description: "推論統計用樣本資料推斷母體特徵，常用於研究和決策。",
    icon: "🔍",
    keywords: ["抽樣", "置信區間", "假設檢定", "p-value", "標準誤", "檢定力"],
    topics: [
      {
        id: "sampling",
        name: "抽樣",
        englishName: "Sampling",
        description: "從母體中抽取部分個體作為研究樣本。",
        example: "從全校學生中抽取 200 人做問卷。"
      },
      {
        id: "standard-error",
        name: "標準誤",
        englishName: "Standard Error",
        description: "衡量樣本統計量作為母體參數估計值時的不確定性。",
        example: "樣本量越大，標準誤通常越小。"
      },
      {
        id: "confidence-interval",
        name: "置信區間",
        englishName: "Confidence Interval",
        description: "用一個範圍估計母體參數可能所在的位置。",
        example: "95% 置信區間為 68 至 74 分。"
      },
      {
        id: "hypothesis-testing",
        name: "假設檢定",
        englishName: "Hypothesis Testing",
        description: "用統計方法判斷研究假設是否有足夠證據支持。",
        example: "判斷新教學方法是否提升成績。"
      },
      {
        id: "p-value",
        name: "p-value",
        englishName: "p-value",
        description: "在虛無假設成立下，觀察到目前或更極端結果的概率。",
        example: "p < 0.05 通常代表結果具有統計顯著性。"
      },
      {
        id: "power",
        name: "檢定力",
        englishName: "Statistical Power",
        description: "在真實存在差異時，檢定能正確發現差異的能力。",
        example: "樣本量太小會降低檢定力。"
      }
    ]
  },
  {
    id: "hypothesis-tests",
    category: "統計檢定",
    title: "假設檢定方法",
    englishTitle: "Statistical Tests",
    level: "中階",
    description: "根據數據類型、樣本數量及研究目的選擇合適檢定方法。",
    icon: "🧪",
    keywords: ["t-test", "卡方檢定", "ANOVA", "非參數檢定", "Mann-Whitney", "Wilcoxon"],
    topics: [
      {
        id: "one-sample-t-test",
        name: "單樣本 t 檢定",
        englishName: "One-sample t-test",
        description: "比較一組樣本平均數與已知標準值是否有差異。",
        example: "比較某班平均分是否高於 60 分。"
      },
      {
        id: "independent-t-test",
        name: "獨立樣本 t 檢定",
        englishName: "Independent Samples t-test",
        description: "比較兩組獨立樣本的平均數是否有差異。",
        example: "比較 A 班和 B 班的平均分。"
      },
      {
        id: "paired-t-test",
        name: "配對樣本 t 檢定",
        englishName: "Paired t-test",
        description: "比較同一組對象在兩個時間點或兩種條件下的差異。",
        example: "比較訓練前後的測驗分數。"
      },
      {
        id: "chi-square-test",
        name: "卡方檢定",
        englishName: "Chi-square Test",
        description: "分析兩個分類變量之間是否存在關聯。",
        example: "性別與購買意願是否有關。"
      },
      {
        id: "anova",
        name: "方差分析",
        englishName: "ANOVA",
        description: "比較三組或以上的平均數是否有差異。",
        example: "比較三種廣告方案的銷售效果。"
      },
      {
        id: "mann-whitney-u",
        name: "Mann-Whitney U 檢定",
        englishName: "Mann-Whitney U Test",
        description: "兩組獨立樣本不符合正態分佈時，可用作 t-test 的非參數替代方法。",
        example: "比較兩組顧客滿意度排名是否不同。"
      },
      {
        id: "wilcoxon",
        name: "Wilcoxon 符號等級檢定",
        englishName: "Wilcoxon Signed-rank Test",
        description: "配對樣本不符合正態分佈時，可用作 paired t-test 的非參數替代方法。",
        example: "比較同一批病人治療前後疼痛評分是否改變。"
      },
      {
        id: "kruskal-wallis",
        name: "Kruskal-Wallis 檢定",
        englishName: "Kruskal-Wallis Test",
        description: "三組或以上獨立樣本不符合正態分佈時，可用作 ANOVA 的替代方法。",
        example: "比較三間分店的顧客評分排名是否不同。"
      }
    ]
  },
  {
    id: "regression-analysis",
    category: "模型分析",
    title: "回歸分析",
    englishTitle: "Regression Analysis",
    level: "中階至高階",
    description: "回歸分析用於研究變量之間的關係，並建立預測模型。",
    icon: "📈",
    keywords: ["線性回歸", "多元回歸", "Logistic 回歸", "殘差", "R²", "共線性"],
    topics: [
      {
        id: "simple-linear-regression",
        name: "簡單線性回歸",
        englishName: "Simple Linear Regression",
        description: "用一個自變量預測一個連續因變量。",
        example: "用廣告費預測銷售額。"
      },
      {
        id: "multiple-regression",
        name: "多元線性回歸",
        englishName: "Multiple Linear Regression",
        description: "用多個自變量預測一個連續因變量。",
        example: "用價格、廣告費和節日因素預測銷售額。"
      },
      {
        id: "logistic-regression",
        name: "Logistic 回歸",
        englishName: "Logistic Regression",
        description: "用於預測二分類結果。",
        example: "預測客戶是否會購買。"
      },
      {
        id: "residual-analysis",
        name: "殘差分析",
        englishName: "Residual Analysis",
        description: "檢查模型預測誤差是否符合合理假設。",
        example: "檢查回歸模型是否存在系統性偏差。"
      },
      {
        id: "multicollinearity",
        name: "共線性",
        englishName: "Multicollinearity",
        description: "自變量之間高度相關，可能導致回歸係數不穩定。",
        example: "廣告費和曝光量高度相關時，模型可能出現共線性。"
      }
    ]
  },
  {
    id: "anova-and-experimental-design",
    category: "實驗設計",
    title: "ANOVA 與實驗設計",
    englishTitle: "ANOVA & Experimental Design",
    level: "中階至高階",
    description: "用於比較多組平均數、分析實驗條件影響，以及設計更可靠的研究。",
    icon: "🧬",
    keywords: ["ANOVA", "事後比較", "A/B Testing", "實驗組", "對照組", "樣本量"],
    topics: [
      {
        id: "one-way-anova",
        name: "單因子 ANOVA",
        englishName: "One-way ANOVA",
        description: "比較一個因素下三組或以上平均數是否不同。",
        example: "比較三種教學方法的平均成績。"
      },
      {
        id: "two-way-anova",
        name: "雙因子 ANOVA",
        englishName: "Two-way ANOVA",
        description: "同時分析兩個因素對結果的影響，以及兩者是否有交互作用。",
        example: "分析教學方法和性別對成績的影響。"
      },
      {
        id: "post-hoc-test",
        name: "事後比較",
        englishName: "Post-hoc Test",
        description: "ANOVA 顯著後，進一步找出哪些組別之間存在差異。",
        example: "Tukey HSD 比較 A、B、C 三組之間哪兩組不同。"
      },
      {
        id: "ab-testing",
        name: "A/B 測試",
        englishName: "A/B Testing",
        description: "比較兩個版本在轉化率、點擊率或其他指標上的差異。",
        example: "比較兩個落地頁哪個帶來更高轉化。"
      },
      {
        id: "sample-size",
        name: "樣本量估算",
        englishName: "Sample Size Calculation",
        description: "在研究開始前估算需要多少樣本，避免樣本量不足或浪費資源。",
        example: "設計問卷前估算至少需要回收多少有效樣本。"
      }
    ]
  },
  {
    id: "survey-statistics",
    category: "問卷統計",
    title: "問卷與信效度分析",
    englishTitle: "Survey Statistics & Reliability",
    level: "中階",
    description: "用於問卷設計、量表檢驗、信度分析、效度分析與因素分析。",
    icon: "📝",
    keywords: ["問卷", "信度", "效度", "Cronbach's Alpha", "因素分析", "Likert"],
    topics: [
      {
        id: "likert-scale",
        name: "Likert 量表",
        englishName: "Likert Scale",
        description: "常見的問卷評分方式，例如 1 至 5 分同意程度。",
        example: "1 表示非常不同意，5 表示非常同意。"
      },
      {
        id: "cronbach-alpha",
        name: "Cronbach's Alpha",
        englishName: "Cronbach's Alpha",
        description: "衡量量表內部一致性的信度指標。",
        example: "Alpha 大於 0.7 通常被視為可接受，但仍需視研究領域而定。"
      },
      {
        id: "validity",
        name: "效度",
        englishName: "Validity",
        description: "衡量工具是否真正測量到想測量的概念。",
        example: "滿意度問卷是否真的能反映顧客滿意程度。"
      },
      {
        id: "exploratory-factor-analysis",
        name: "探索性因素分析",
        englishName: "Exploratory Factor Analysis",
        description: "探索多個問卷題項背後可能存在的潛在構面。",
        example: "把 20 條服務質素題項歸納為環境、員工、價格等因素。"
      },
      {
        id: "confirmatory-factor-analysis",
        name: "驗證性因素分析",
        englishName: "Confirmatory Factor Analysis",
        description: "檢驗預設的因素結構是否符合數據。",
        example: "驗證服務質素是否可分為可靠性、反應性和保證性。"
      }
    ]
  },
  {
    id: "time-series",
    category: "時間數據",
    title: "時間序列",
    englishTitle: "Time Series",
    level: "高階",
    description: "時間序列分析用於研究數據隨時間變化的趨勢、季節性及預測。",
    icon: "⏳",
    keywords: ["趨勢", "季節性", "移動平均", "ARIMA", "預測", "GARCH"],
    topics: [
      {
        id: "moving-average",
        name: "移動平均",
        englishName: "Moving Average",
        description: "用一段時間內的平均值平滑數據波動。",
        example: "用 7 日移動平均觀察銷售趨勢。"
      },
      {
        id: "trend-analysis",
        name: "趨勢分析",
        englishName: "Trend Analysis",
        description: "分析數據長期上升或下降的方向。",
        example: "分析月度收入是否持續增長。"
      },
      {
        id: "seasonality",
        name: "季節性",
        englishName: "Seasonality",
        description: "數據在固定週期內重複出現的模式。",
        example: "旅遊收入在節假日上升。"
      },
      {
        id: "arima",
        name: "ARIMA 模型",
        englishName: "ARIMA",
        description: "常用時間序列預測模型。",
        example: "預測未來 12 個月銷售額。"
      },
      {
        id: "garch",
        name: "GARCH 模型",
        englishName: "GARCH",
        description: "常用於金融波動率建模。",
        example: "分析股票或匯率波動風險。"
      }
    ]
  },
  {
    id: "bayesian-statistics",
    category: "高階統計",
    title: "貝葉斯統計",
    englishTitle: "Bayesian Statistics",
    level: "高階",
    description: "貝葉斯統計強調根據新證據更新信念，適合不確定性建模與決策分析。",
    icon: "🧠",
    keywords: ["Prior", "Posterior", "Likelihood", "MCMC", "貝葉斯推論", "可信區間"],
    topics: [
      {
        id: "prior",
        name: "先驗分佈",
        englishName: "Prior Distribution",
        description: "在看到新數據之前，對參數的原有信念。",
        example: "根據過往經驗估計產品轉化率大約在 3% 至 5%。"
      },
      {
        id: "likelihood",
        name: "似然",
        englishName: "Likelihood",
        description: "在某個參數假設下觀察到當前數據的可能性。",
        example: "假設轉化率為 5%，觀察到 100 人中 6 人購買的可能性。"
      },
      {
        id: "posterior",
        name: "後驗分佈",
        englishName: "Posterior Distribution",
        description: "結合先驗與新數據後更新得到的參數分佈。",
        example: "加入新銷售數據後更新對轉化率的估計。"
      },
      {
        id: "credible-interval",
        name: "可信區間",
        englishName: "Credible Interval",
        description: "在貝葉斯框架下，參數有一定概率落入的區間。",
        example: "轉化率有 95% 概率落在 4% 至 7%。"
      },
      {
        id: "mcmc",
        name: "MCMC",
        englishName: "Markov Chain Monte Carlo",
        description: "用模擬方法近似複雜後驗分佈。",
        example: "用 MCMC 估計複雜層級模型參數。"
      }
    ]
  },
  {
    id: "machine-learning-statistics",
    category: "數據科學",
    title: "機器學習中的統計",
    englishTitle: "Statistics in Machine Learning",
    level: "中階至高階",
    description: "機器學習大量依賴統計思想，包括模型評估、偏差方差、交叉驗證和分類指標。",
    icon: "🤖",
    keywords: ["AUC", "ROC", "Precision", "Recall", "F1", "交叉驗證", "過擬合"],
    topics: [
      {
        id: "train-test-split",
        name: "訓練集與測試集",
        englishName: "Train-test Split",
        description: "把資料分為建模用和評估用兩部分。",
        example: "80% 資料訓練模型，20% 資料測試模型表現。"
      },
      {
        id: "cross-validation",
        name: "交叉驗證",
        englishName: "Cross Validation",
        description: "多次切分資料評估模型穩定性。",
        example: "5-fold cross validation 用 5 次訓練測試平均表現。"
      },
      {
        id: "bias-variance",
        name: "偏差-方差權衡",
        englishName: "Bias-Variance Tradeoff",
        description: "模型太簡單會欠擬合，太複雜會過擬合。",
        example: "深度太大的決策樹可能過擬合訓練資料。"
      },
      {
        id: "confusion-matrix",
        name: "混淆矩陣",
        englishName: "Confusion Matrix",
        description: "展示分類模型的正確與錯誤分類情況。",
        example: "區分真正例、假正例、真負例、假負例。"
      },
      {
        id: "roc-auc",
        name: "ROC / AUC",
        englishName: "ROC / AUC",
        description: "衡量二分類模型在不同閾值下的判別能力。",
        example: "AUC 越接近 1，模型區分能力通常越強。"
      },
      {
        id: "precision-recall-f1",
        name: "Precision / Recall / F1",
        englishName: "Precision, Recall and F1 Score",
        description: "常用於不平衡分類問題的模型評估。",
        example: "疾病篩查模型通常特別重視 Recall。"
      }
    ]
  }
];