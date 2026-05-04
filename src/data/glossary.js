export const glossary = [
  {
    id: "population",
    term: "母體",
    englishTerm: "Population",
    category: "基礎概念",
    meaning: "研究對象的整體集合。",
    example: "如果研究澳門所有中學生的身高，所有澳門中學生就是母體。"
  },
  {
    id: "sample",
    term: "樣本",
    englishTerm: "Sample",
    category: "基礎概念",
    meaning: "從母體中抽取的一部分研究對象。",
    example: "從全澳中學生中抽取 500 人測量身高，這 500 人就是樣本。"
  },
  {
    id: "variable",
    term: "變量",
    englishTerm: "Variable",
    category: "基礎概念",
    meaning: "研究中會改變或被測量的特徵。",
    example: "身高、收入、成績、性別、是否購買都是變量。"
  },
  {
    id: "independent-variable",
    term: "自變量",
    englishTerm: "Independent Variable",
    category: "基礎概念",
    meaning: "研究中用來解釋、影響或預測其他變量的變量。",
    example: "研究廣告費如何影響銷售額時，廣告費是自變量。"
  },
  {
    id: "dependent-variable",
    term: "因變量",
    englishTerm: "Dependent Variable",
    category: "基礎概念",
    meaning: "研究中被解釋、被影響或被預測的變量。",
    example: "研究廣告費如何影響銷售額時，銷售額是因變量。"
  },
  {
    id: "categorical-variable",
    term: "分類變量",
    englishTerm: "Categorical Variable",
    category: "數據類型",
    meaning: "用類別表示的變量，不能直接做普通加減乘除。",
    example: "性別、地區、是否購買、血型都是分類變量。"
  },
  {
    id: "continuous-variable",
    term: "連續變量",
    englishTerm: "Continuous Variable",
    category: "數據類型",
    meaning: "可以在一定範圍內取任意數值的變量。",
    example: "身高、體重、收入、溫度、銷售額都是連續變量。"
  },
  {
    id: "ordinal-variable",
    term: "等級變量",
    englishTerm: "Ordinal Variable",
    category: "數據類型",
    meaning: "有順序但相鄰等級差距未必相等的變量。",
    example: "滿意度 1 至 5 分、教育程度、服務評級都是等級變量。"
  },
  {
    id: "mean",
    term: "平均數",
    englishTerm: "Mean",
    category: "描述統計",
    meaning: "所有數值加總後除以數據個數。",
    example: "2, 4, 6 的平均數是 4。"
  },
  {
    id: "median",
    term: "中位數",
    englishTerm: "Median",
    category: "描述統計",
    meaning: "將數據由小至大排列後，位於中間位置的數值。",
    example: "1, 3, 9 的中位數是 3。"
  },
  {
    id: "mode",
    term: "眾數",
    englishTerm: "Mode",
    category: "描述統計",
    meaning: "一組數據中出現次數最多的數值。",
    example: "2, 2, 3, 5 的眾數是 2。"
  },
  {
    id: "variance",
    term: "方差",
    englishTerm: "Variance",
    category: "描述統計",
    meaning: "衡量數據與平均數之間平均平方差的指標。",
    example: "方差越大，代表數據越分散。"
  },
  {
    id: "standard-deviation",
    term: "標準差",
    englishTerm: "Standard Deviation",
    category: "描述統計",
    meaning: "方差的平方根，用於衡量數據分散程度。",
    example: "兩班平均分相同，但標準差大的班級成績差異較大。"
  },
  {
    id: "standard-error",
    term: "標準誤",
    englishTerm: "Standard Error",
    category: "推論統計",
    meaning: "樣本統計量抽樣分佈的標準差，用於反映估計的不確定性。",
    example: "樣本量越大，標準誤通常越小。"
  },
  {
    id: "quartile",
    term: "四分位數",
    englishTerm: "Quartile",
    category: "描述統計",
    meaning: "將排序後的數據分成四等份的分割點。",
    example: "Q1、Q2、Q3 分別代表第一、第二、第三四分位數。"
  },
  {
    id: "iqr",
    term: "四分位距",
    englishTerm: "Interquartile Range",
    category: "描述統計",
    meaning: "第三四分位數減去第一四分位數，表示中間 50% 數據的分散程度。",
    example: "IQR = Q3 - Q1，常用於箱形圖和離群值判斷。"
  },
  {
    id: "outlier",
    term: "離群值",
    englishTerm: "Outlier",
    category: "數據清理",
    meaning: "與其他數據明顯不同的極端值。",
    example: "大多數消費額在 100 元左右，但有一筆是 10,000 元，可能是離群值。"
  },
  {
    id: "skewness",
    term: "偏態",
    englishTerm: "Skewness",
    category: "描述統計",
    meaning: "描述數據分佈是否向左或向右偏斜。",
    example: "收入資料常呈右偏，因為少數高收入者把尾部拉長。"
  },
  {
    id: "kurtosis",
    term: "峰態",
    englishTerm: "Kurtosis",
    category: "描述統計",
    meaning: "描述數據分佈尾部厚度或尖峰程度的指標。",
    example: "金融收益率常有較厚尾部，代表極端波動較常出現。"
  },
  {
    id: "normal-distribution",
    term: "正態分佈",
    englishTerm: "Normal Distribution",
    category: "機率分佈",
    meaning: "呈鐘形曲線的連續概率分佈，平均數附近數值最多。",
    example: "身高、測量誤差、考試成績常近似正態分佈。"
  },
  {
    id: "binomial-distribution",
    term: "二項分佈",
    englishTerm: "Binomial Distribution",
    category: "機率分佈",
    meaning: "描述固定次數獨立試驗中成功次數的分佈。",
    example: "投擲硬幣 10 次出現正面的次數。"
  },
  {
    id: "poisson-distribution",
    term: "泊松分佈",
    englishTerm: "Poisson Distribution",
    category: "機率分佈",
    meaning: "描述固定時間或空間內事件發生次數的分佈。",
    example: "一小時內客服中心收到的電話數。"
  },
  {
    id: "confidence-interval",
    term: "置信區間",
    englishTerm: "Confidence Interval",
    category: "推論統計",
    meaning: "用樣本估計母體參數時給出的合理範圍。",
    example: "95% 置信區間為 68 至 74 分。"
  },
  {
    id: "hypothesis-testing",
    term: "假設檢定",
    englishTerm: "Hypothesis Testing",
    category: "假設檢定",
    meaning: "用樣本數據判斷研究假設是否有足夠統計證據支持。",
    example: "判斷新教學方法是否顯著提高成績。"
  },
  {
    id: "null-hypothesis",
    term: "虛無假設",
    englishTerm: "Null Hypothesis",
    category: "假設檢定",
    meaning: "通常表示沒有差異、沒有關係或沒有效果的假設。",
    example: "兩組平均數沒有差異，就是常見的虛無假設。"
  },
  {
    id: "alternative-hypothesis",
    term: "對立假設",
    englishTerm: "Alternative Hypothesis",
    category: "假設檢定",
    meaning: "與虛無假設相對，通常表示存在差異、關係或效果。",
    example: "新教學方法會提高成績，就是一個對立假設。"
  },
  {
    id: "p-value",
    term: "p-value",
    englishTerm: "p-value",
    category: "假設檢定",
    meaning: "在虛無假設成立下，觀察到目前或更極端結果的概率。",
    example: "p = 0.03 表示在虛無假設成立下，出現目前結果的概率約為 3%。"
  },
  {
    id: "significance-level",
    term: "顯著性水平",
    englishTerm: "Significance Level",
    category: "假設檢定",
    meaning: "研究者事先設定用來判斷是否拒絕虛無假設的門檻。",
    example: "常用顯著性水平為 0.05。"
  },
  {
    id: "type-i-error",
    term: "第一類錯誤",
    englishTerm: "Type I Error",
    category: "假設檢定",
    meaning: "虛無假設其實為真，但研究者錯誤拒絕它。",
    example: "其實新藥無效，但檢定結果誤判為有效。"
  },
  {
    id: "type-ii-error",
    term: "第二類錯誤",
    englishTerm: "Type II Error",
    category: "假設檢定",
    meaning: "虛無假設其實為假，但研究者沒有拒絕它。",
    example: "其實新藥有效，但檢定結果未能發現效果。"
  },
  {
    id: "statistical-power",
    term: "檢定力",
    englishTerm: "Statistical Power",
    category: "假設檢定",
    meaning: "當真實效果存在時，統計檢定能正確發現效果的能力。",
    example: "樣本量太小會降低檢定力。"
  },
  {
    id: "effect-size",
    term: "效應量",
    englishTerm: "Effect Size",
    category: "假設檢定",
    meaning: "衡量差異或關係大小的指標。",
    example: "即使 p-value 顯著，也要看效應量是否有實際意義。"
  },
  {
    id: "t-test",
    term: "t 檢定",
    englishTerm: "t-test",
    category: "假設檢定",
    meaning: "用於比較平均數是否存在統計顯著差異的方法。",
    example: "比較兩班學生平均分是否不同。"
  },
  {
    id: "anova",
    term: "方差分析",
    englishTerm: "ANOVA",
    category: "假設檢定",
    meaning: "用於比較三組或以上平均數是否存在差異。",
    example: "比較三種廣告方案的平均銷售額。"
  },
  {
    id: "post-hoc-test",
    term: "事後比較",
    englishTerm: "Post-hoc Test",
    category: "假設檢定",
    meaning: "ANOVA 顯著後，用來找出哪些組別之間存在差異的方法。",
    example: "Tukey HSD 是常見事後比較方法。"
  },
  {
    id: "chi-square-test",
    term: "卡方檢定",
    englishTerm: "Chi-square Test",
    category: "分類數據",
    meaning: "用於分析分類變量之間是否存在關聯。",
    example: "分析性別與是否購買產品是否有關。"
  },
  {
    id: "fisher-exact-test",
    term: "Fisher 精確檢定",
    englishTerm: "Fisher's Exact Test",
    category: "分類數據",
    meaning: "用於小樣本分類資料，尤其是 2x2 交叉表。",
    example: "小樣本醫學研究中比較治療組與對照組康復率。"
  },
  {
    id: "correlation",
    term: "相關",
    englishTerm: "Correlation",
    category: "相關分析",
    meaning: "兩個變量一起變化的程度。",
    example: "學習時間與考試分數可能存在正相關。"
  },
  {
    id: "pearson-correlation",
    term: "皮爾森相關",
    englishTerm: "Pearson Correlation",
    category: "相關分析",
    meaning: "衡量兩個連續變量之間線性關係的相關係數。",
    example: "分析廣告費與銷售額之間的線性關係。"
  },
  {
    id: "spearman-correlation",
    term: "斯皮爾曼相關",
    englishTerm: "Spearman Correlation",
    category: "相關分析",
    meaning: "衡量兩個變量排名之間的單調關係，適合等級或非正態資料。",
    example: "分析服務滿意度排名與再次購買意願排名。"
  },
  {
    id: "regression",
    term: "回歸",
    englishTerm: "Regression",
    category: "回歸分析",
    meaning: "用一個或多個變量解釋或預測另一個變量的方法。",
    example: "用廣告費預測銷售額。"
  },
  {
    id: "linear-regression",
    term: "線性回歸",
    englishTerm: "Linear Regression",
    category: "回歸分析",
    meaning: "用線性方程描述自變量與連續型因變量之間的關係。",
    example: "y = a + bx 是簡單線性回歸模型。"
  },
  {
    id: "logistic-regression",
    term: "Logistic 回歸",
    englishTerm: "Logistic Regression",
    category: "回歸分析",
    meaning: "用於預測二分類結果的回歸模型。",
    example: "預測客戶是否會購買、病人是否會康復。"
  },
  {
    id: "r-squared",
    term: "R²",
    englishTerm: "R-squared",
    category: "回歸分析",
    meaning: "表示回歸模型能解釋因變量變異的比例。",
    example: "R² = 0.7 表示模型可解釋 70% 的 Y 變化。"
  },
  {
    id: "residual",
    term: "殘差",
    englishTerm: "Residual",
    category: "回歸分析",
    meaning: "實際值與模型預測值之間的差距。",
    example: "實際銷售額 120，預測銷售額 110，殘差為 10。"
  },
  {
    id: "multicollinearity",
    term: "共線性",
    englishTerm: "Multicollinearity",
    category: "回歸分析",
    meaning: "自變量之間高度相關，可能導致回歸係數不穩定。",
    example: "廣告費與曝光量高度相關時，可能出現共線性。"
  },
  {
    id: "cronbach-alpha",
    term: "Cronbach's Alpha",
    englishTerm: "Cronbach's Alpha",
    category: "問卷統計",
    meaning: "衡量量表多個題項內部一致性的信度指標。",
    example: "用來檢查 5 條滿意度題項是否能組成一個可靠量表。"
  },
  {
    id: "validity",
    term: "效度",
    englishTerm: "Validity",
    category: "問卷統計",
    meaning: "衡量工具是否真正測量到想測量的概念。",
    example: "滿意度問卷是否真的能反映顧客滿意程度。"
  },
  {
    id: "factor-analysis",
    term: "因素分析",
    englishTerm: "Factor Analysis",
    category: "問卷統計",
    meaning: "用於探索或驗證多個題項背後的潛在構面。",
    example: "把 20 條服務品質題項歸納為環境、服務、價格等因素。"
  },
  {
    id: "kmo",
    term: "KMO",
    englishTerm: "Kaiser-Meyer-Olkin Measure",
    category: "問卷統計",
    meaning: "評估資料是否適合做因素分析的指標。",
    example: "KMO 較高代表變量之間具有較適合因素分析的共同性。"
  },
  {
    id: "bartlett-test",
    term: "Bartlett 球形檢定",
    englishTerm: "Bartlett's Test of Sphericity",
    category: "問卷統計",
    meaning: "檢查相關矩陣是否適合做因素分析的檢定。",
    example: "若 Bartlett 檢定顯著，通常表示變量之間有足夠相關性。"
  },
  {
    id: "time-series",
    term: "時間序列",
    englishTerm: "Time Series",
    category: "時間序列",
    meaning: "按照時間順序記錄的一組數據。",
    example: "每月銷售額、每日股票價格、每小時溫度都是時間序列。"
  },
  {
    id: "trend",
    term: "趨勢",
    englishTerm: "Trend",
    category: "時間序列",
    meaning: "數據長期上升、下降或持平的方向。",
    example: "月度收入連續多年上升，表示存在上升趨勢。"
  },
  {
    id: "seasonality",
    term: "季節性",
    englishTerm: "Seasonality",
    category: "時間序列",
    meaning: "數據在固定週期內重複出現的模式。",
    example: "旅遊業收入在節假日較高，可能有季節性。"
  },
  {
    id: "arima",
    term: "ARIMA",
    englishTerm: "ARIMA",
    category: "時間序列",
    meaning: "常用時間序列預測模型，結合自回歸、差分與移動平均。",
    example: "用 ARIMA 預測未來 12 個月銷售額。"
  },
  {
    id: "bayes-theorem",
    term: "貝葉斯定理",
    englishTerm: "Bayes' Theorem",
    category: "貝葉斯統計",
    meaning: "根據新證據更新事件概率的方法。",
    example: "根據檢測陽性結果更新患病概率。"
  },
  {
    id: "prior",
    term: "先驗",
    englishTerm: "Prior",
    category: "貝葉斯統計",
    meaning: "看到新數據前對參數或事件的原有信念。",
    example: "根據過往經驗估計產品轉化率約為 3%。"
  },
  {
    id: "posterior",
    term: "後驗",
    englishTerm: "Posterior",
    category: "貝葉斯統計",
    meaning: "結合先驗與新數據後更新得到的信念或分佈。",
    example: "加入新實驗數據後更新藥物有效率估計。"
  },
  {
    id: "cross-validation",
    term: "交叉驗證",
    englishTerm: "Cross Validation",
    category: "機器學習統計",
    meaning: "多次切分資料以評估模型泛化能力的方法。",
    example: "5-fold cross validation 把資料分成 5 份輪流測試。"
  },
  {
    id: "overfitting",
    term: "過擬合",
    englishTerm: "Overfitting",
    category: "機器學習統計",
    meaning: "模型過度記住訓練資料，導致在新資料上表現差。",
    example: "訓練準確率很高但測試準確率很低，可能是過擬合。"
  },
  {
    id: "confusion-matrix",
    term: "混淆矩陣",
    englishTerm: "Confusion Matrix",
    category: "機器學習統計",
    meaning: "展示分類模型預測結果與真實結果之間關係的表格。",
    example: "真正例、假正例、真負例、假負例都可由混淆矩陣得出。"
  },
  {
    id: "precision",
    term: "精確率",
    englishTerm: "Precision",
    category: "機器學習統計",
    meaning: "模型預測為正的樣本中，真正為正的比例。",
    example: "預測為流失客戶的人中，有多少真的流失。"
  },
  {
    id: "recall",
    term: "召回率",
    englishTerm: "Recall",
    category: "機器學習統計",
    meaning: "所有真正為正的樣本中，被模型成功找出的比例。",
    example: "所有真正流失客戶中，有多少被模型找出來。"
  },
  {
    id: "f1-score",
    term: "F1 分數",
    englishTerm: "F1 Score",
    category: "機器學習統計",
    meaning: "Precision 和 Recall 的調和平均，用於平衡兩者。",
    example: "當資料不平衡時，F1 分數比準確率更有參考價值。"
  },
  {
    id: "roc-auc",
    term: "ROC / AUC",
    englishTerm: "ROC / AUC",
    category: "機器學習統計",
    meaning: "衡量二分類模型在不同閾值下區分能力的指標。",
    example: "AUC 越接近 1，通常代表模型判別能力越強。"
  }
];