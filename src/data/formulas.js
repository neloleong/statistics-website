export const formulas = [
  {
    id: "mean",
    category: "描述統計",
    name: "平均數",
    englishName: "Mean",
    formula: "x̄ = Σx / n",
    explanation: "平均數是所有數值加總後除以數據個數。",
    symbols: [
      { symbol: "x̄", meaning: "平均數" },
      { symbol: "Σx", meaning: "所有數值總和" },
      { symbol: "n", meaning: "數據個數" }
    ],
    whenToUse: "用於表示一組數據的集中趨勢。",
    example: "數據 2, 4, 6 的平均數是 4。",
    warning: "平均數容易受極端值影響。"
  },
  {
    id: "median",
    category: "描述統計",
    name: "中位數",
    englishName: "Median",
    formula: "Median = middle value after sorting",
    explanation: "中位數是數據由小至大排列後位於中間的值。",
    symbols: [
      { symbol: "Median", meaning: "中位數" }
    ],
    whenToUse: "當數據存在極端值時，中位數比平均數更能反映中心位置。",
    example: "數據 1, 2, 100 的平均數是 34.33，但中位數是 2。",
    warning: "中位數不反映所有數值大小，只反映排序位置。"
  },
  {
    id: "sample-variance",
    category: "描述統計",
    name: "樣本方差",
    englishName: "Sample Variance",
    formula: "s² = Σ(xᵢ - x̄)² / (n - 1)",
    explanation: "樣本方差用於衡量樣本數據相對於平均數的分散程度。",
    symbols: [
      { symbol: "s²", meaning: "樣本方差" },
      { symbol: "xᵢ", meaning: "第 i 個數值" },
      { symbol: "x̄", meaning: "樣本平均數" },
      { symbol: "n - 1", meaning: "自由度" }
    ],
    whenToUse: "用於描述樣本數據的變異程度。",
    example: "如果每個數值都接近平均數，方差會較小。",
    warning: "樣本方差通常除以 n - 1，而不是 n。"
  },
  {
    id: "population-variance",
    category: "描述統計",
    name: "母體方差",
    englishName: "Population Variance",
    formula: "σ² = Σ(xᵢ - μ)² / N",
    explanation: "母體方差用於衡量整個母體數據的離散程度。",
    symbols: [
      { symbol: "σ²", meaning: "母體方差" },
      { symbol: "xᵢ", meaning: "第 i 個數值" },
      { symbol: "μ", meaning: "母體平均數" },
      { symbol: "N", meaning: "母體數量" }
    ],
    whenToUse: "當你掌握整個母體資料時使用。",
    example: "全校所有學生的成績方差。",
    warning: "如果只是抽樣資料，應使用樣本方差。"
  },
  {
    id: "standard-deviation",
    category: "描述統計",
    name: "標準差",
    englishName: "Standard Deviation",
    formula: "s = √s²",
    explanation: "標準差是方差的平方根，單位與原數據相同。",
    symbols: [
      { symbol: "s", meaning: "樣本標準差" },
      { symbol: "s²", meaning: "樣本方差" }
    ],
    whenToUse: "用於理解數據通常偏離平均數多少。",
    example: "平均分 70，標準差 5，表示多數分數集中在 70 附近。",
    warning: "標準差越大，代表數據越分散。"
  },
  {
    id: "coefficient-of-variation",
    category: "描述統計",
    name: "變異係數",
    englishName: "Coefficient of Variation",
    formula: "CV = s / x̄",
    explanation: "變異係數用於比較不同平均水平或不同單位資料的相對波動。",
    symbols: [
      { symbol: "CV", meaning: "變異係數" },
      { symbol: "s", meaning: "標準差" },
      { symbol: "x̄", meaning: "平均數" }
    ],
    whenToUse: "用於比較兩組不同尺度或不同平均值的數據波動。",
    example: "比較兩種商品銷售波動率，而不是只比較標準差。",
    warning: "當平均數接近 0 時，變異係數可能不穩定。"
  },
  {
    id: "iqr",
    category: "描述統計",
    name: "四分位距",
    englishName: "Interquartile Range",
    formula: "IQR = Q3 - Q1",
    explanation: "四分位距表示中間 50% 數據的分散程度。",
    symbols: [
      { symbol: "IQR", meaning: "四分位距" },
      { symbol: "Q1", meaning: "第一四分位數" },
      { symbol: "Q3", meaning: "第三四分位數" }
    ],
    whenToUse: "常用於箱形圖和離群值分析。",
    example: "IQR 越大，中間一半數據越分散。",
    warning: "IQR 不受極端值影響，但也忽略了尾部資訊。"
  },
  {
    id: "z-score",
    category: "標準化",
    name: "標準分數",
    englishName: "Z-score",
    formula: "z = (x - μ) / σ",
    explanation: "z-score 表示某數值距離平均數多少個標準差。",
    symbols: [
      { symbol: "z", meaning: "標準分數" },
      { symbol: "x", meaning: "某一觀察值" },
      { symbol: "μ", meaning: "母體平均數" },
      { symbol: "σ", meaning: "母體標準差" }
    ],
    whenToUse: "用於標準化不同尺度的數據，或判斷數值是否異常。",
    example: "z = 2 表示該值比平均數高 2 個標準差。",
    warning: "使用 z-score 時通常假設數據分佈接近正態。"
  },
  {
    id: "standard-error",
    category: "推論統計",
    name: "標準誤",
    englishName: "Standard Error",
    formula: "SE = s / √n",
    explanation: "標準誤衡量樣本平均數作為母體平均數估計值的不確定性。",
    symbols: [
      { symbol: "SE", meaning: "標準誤" },
      { symbol: "s", meaning: "樣本標準差" },
      { symbol: "n", meaning: "樣本數" }
    ],
    whenToUse: "用於置信區間和假設檢定。",
    example: "樣本量越大，SE 通常越小。",
    warning: "標準誤不是標準差；標準差描述數據分散，標準誤描述估計不確定性。"
  },
  {
    id: "confidence-interval",
    category: "推論統計",
    name: "平均數置信區間",
    englishName: "Confidence Interval for Mean",
    formula: "x̄ ± z × SE",
    explanation: "置信區間用於估計母體平均數可能所在範圍。",
    symbols: [
      { symbol: "x̄", meaning: "樣本平均數" },
      { symbol: "z", meaning: "臨界值" },
      { symbol: "SE", meaning: "標準誤" }
    ],
    whenToUse: "用於用樣本平均數估計母體平均數。",
    example: "95% 置信區間為 68 至 74，表示母體平均數可能落在此範圍。",
    warning: "95% 置信區間不是指單一個體有 95% 機會落在區間內。"
  },
  {
    id: "one-sample-t",
    category: "假設檢定",
    name: "單樣本 t 檢定",
    englishName: "One-sample t-test",
    formula: "t = (x̄ - μ₀) / (s / √n)",
    explanation: "比較一組樣本平均數是否與指定標準值不同。",
    symbols: [
      { symbol: "x̄", meaning: "樣本平均數" },
      { symbol: "μ₀", meaning: "假設的母體平均數" },
      { symbol: "s", meaning: "樣本標準差" },
      { symbol: "n", meaning: "樣本數" }
    ],
    whenToUse: "當只有一組樣本，要與一個標準值比較時使用。",
    example: "比較某班平均分是否顯著高於 60 分。",
    warning: "需注意樣本是否近似正態，尤其樣本量較小時。"
  },
  {
    id: "independent-t-test",
    category: "假設檢定",
    name: "獨立樣本 t 檢定",
    englishName: "Independent Samples t-test",
    formula: "t = (x̄₁ - x̄₂) / √(s₁²/n₁ + s₂²/n₂)",
    explanation: "比較兩組獨立樣本的平均數是否存在差異。",
    symbols: [
      { symbol: "x̄₁, x̄₂", meaning: "兩組樣本平均數" },
      { symbol: "s₁², s₂²", meaning: "兩組樣本方差" },
      { symbol: "n₁, n₂", meaning: "兩組樣本數" }
    ],
    whenToUse: "兩組獨立樣本、連續型數據、比較平均數。",
    example: "比較 A 班與 B 班平均成績。",
    warning: "若方差不齊，可使用 Welch t-test。"
  },
  {
    id: "paired-t-test",
    category: "假設檢定",
    name: "配對樣本 t 檢定",
    englishName: "Paired t-test",
    formula: "t = d̄ / (s_d / √n)",
    explanation: "比較同一批對象兩次測量之間的平均差值是否顯著。",
    symbols: [
      { symbol: "d̄", meaning: "配對差值的平均數" },
      { symbol: "s_d", meaning: "配對差值的標準差" },
      { symbol: "n", meaning: "配對數量" }
    ],
    whenToUse: "同一批對象前後測，或天然配對資料。",
    example: "比較治療前後血壓是否下降。",
    warning: "重點檢查的是差值是否近似正態。"
  },
  {
    id: "chi-square",
    category: "分類數據",
    name: "卡方檢定",
    englishName: "Chi-square Test",
    formula: "χ² = Σ(O - E)² / E",
    explanation: "比較觀察頻數與期望頻數是否存在明顯差異。",
    symbols: [
      { symbol: "χ²", meaning: "卡方統計量" },
      { symbol: "O", meaning: "觀察頻數" },
      { symbol: "E", meaning: "期望頻數" }
    ],
    whenToUse: "用於分類變量之間的關聯分析。",
    example: "分析性別與是否購買產品是否有關。",
    warning: "如果期望頻數過低，應考慮 Fisher's Exact Test。"
  },
  {
    id: "anova-f",
    category: "ANOVA",
    name: "方差分析 F 值",
    englishName: "ANOVA F-statistic",
    formula: "F = MS_between / MS_within",
    explanation: "ANOVA 用組間變異與組內變異的比例判斷多組平均數是否存在差異。",
    symbols: [
      { symbol: "F", meaning: "F 統計量" },
      { symbol: "MS_between", meaning: "組間均方" },
      { symbol: "MS_within", meaning: "組內均方" }
    ],
    whenToUse: "比較三組或以上平均數是否不同。",
    example: "比較三種廣告方案帶來的平均銷售額是否不同。",
    warning: "ANOVA 顯著後，通常還需要做事後比較。"
  },
  {
    id: "correlation",
    category: "相關分析",
    name: "皮爾森相關係數",
    englishName: "Pearson Correlation Coefficient",
    formula: "r = Σ[(xᵢ - x̄)(yᵢ - ȳ)] / √[Σ(xᵢ - x̄)²Σ(yᵢ - ȳ)²]",
    explanation: "衡量兩個連續變量之間的線性相關程度。",
    symbols: [
      { symbol: "r", meaning: "相關係數" },
      { symbol: "xᵢ, yᵢ", meaning: "兩組變量的觀察值" },
      { symbol: "x̄, ȳ", meaning: "兩組變量的平均數" }
    ],
    whenToUse: "用於分析兩個連續變量是否存在線性關係。",
    example: "廣告費與銷售額之間的相關程度。",
    warning: "相關不等於因果。"
  },
  {
    id: "linear-regression",
    category: "回歸分析",
    name: "簡單線性回歸",
    englishName: "Simple Linear Regression",
    formula: "y = β₀ + β₁x + ε",
    explanation: "用一個自變量預測一個連續因變量。",
    symbols: [
      { symbol: "y", meaning: "因變量" },
      { symbol: "β₀", meaning: "截距" },
      { symbol: "β₁", meaning: "斜率" },
      { symbol: "x", meaning: "自變量" },
      { symbol: "ε", meaning: "誤差項" }
    ],
    whenToUse: "用於分析一個變量如何影響或預測另一個變量。",
    example: "用廣告費預測銷售額。",
    warning: "回歸模型需要檢查殘差、線性及異方差問題。"
  },
  {
    id: "r-squared",
    category: "回歸分析",
    name: "決定係數",
    englishName: "R-squared",
    formula: "R² = 1 - SS_res / SS_tot",
    explanation: "R² 表示模型可以解釋因變量變異的比例。",
    symbols: [
      { symbol: "R²", meaning: "決定係數" },
      { symbol: "SS_res", meaning: "殘差平方和" },
      { symbol: "SS_tot", meaning: "總平方和" }
    ],
    whenToUse: "用於評估回歸模型解釋力。",
    example: "R² = 0.70 表示模型可解釋 70% 的 Y 變化。",
    warning: "R² 高不一定代表模型正確，也不代表因果成立。"
  },
  {
    id: "logistic-regression",
    category: "回歸分析",
    name: "Logistic 回歸",
    englishName: "Logistic Regression",
    formula: "log(p / (1 - p)) = β₀ + β₁x₁ + ... + βₖxₖ",
    explanation: "Logistic 回歸用於預測二分類結果。",
    symbols: [
      { symbol: "p", meaning: "事件發生概率" },
      { symbol: "p / (1 - p)", meaning: "勝算 odds" },
      { symbol: "β", meaning: "回歸係數" }
    ],
    whenToUse: "因變量是二分類，例如是否購買、是否患病、是否合格。",
    example: "預測客戶是否會購買產品。",
    warning: "結果通常需要用 odds ratio 或概率方式解釋。"
  },
  {
    id: "ab-test-proportion",
    category: "A/B Testing",
    name: "兩比例差異",
    englishName: "Two-proportion Difference",
    formula: "z = (p̂₁ - p̂₂) / √[p̂(1-p̂)(1/n₁ + 1/n₂)]",
    explanation: "用於比較兩組轉化率或比例是否存在差異。",
    symbols: [
      { symbol: "p̂₁, p̂₂", meaning: "兩組樣本比例" },
      { symbol: "p̂", meaning: "合併比例" },
      { symbol: "n₁, n₂", meaning: "兩組樣本數" }
    ],
    whenToUse: "A/B 測試中比較兩個版本的轉化率。",
    example: "比較 A 版和 B 版頁面的購買轉化率是否不同。",
    warning: "樣本量不足時容易得出不穩定結論。"
  },
  {
    id: "sample-size-mean",
    category: "樣本量",
    name: "估計平均數樣本量",
    englishName: "Sample Size for Mean",
    formula: "n = (z × σ / E)²",
    explanation: "用於估計平均數時所需樣本量。",
    symbols: [
      { symbol: "n", meaning: "所需樣本量" },
      { symbol: "z", meaning: "置信水平對應臨界值" },
      { symbol: "σ", meaning: "母體標準差估計" },
      { symbol: "E", meaning: "允許誤差" }
    ],
    whenToUse: "設計調查或實驗前估算樣本量。",
    example: "希望平均誤差不超過 2 分，需要估算問卷樣本數。",
    warning: "需要先有標準差估計，否則只能粗略估算。"
  },
  {
    id: "cronbach-alpha",
    category: "問卷統計",
    name: "Cronbach's Alpha",
    englishName: "Cronbach's Alpha",
    formula: "α = [k / (k - 1)] × [1 - Σσᵢ² / σ_total²]",
    explanation: "衡量量表內部一致性的信度指標。",
    symbols: [
      { symbol: "α", meaning: "Cronbach's Alpha" },
      { symbol: "k", meaning: "題項數量" },
      { symbol: "σᵢ²", meaning: "每個題項的方差" },
      { symbol: "σ_total²", meaning: "總分方差" }
    ],
    whenToUse: "用於問卷量表信度分析。",
    example: "檢查 5 條滿意度題項是否能穩定測量同一構念。",
    warning: "Alpha 高不一定代表量表有效，只代表內部一致性較高。"
  },
  {
    id: "bayes-theorem",
    category: "貝葉斯統計",
    name: "貝葉斯定理",
    englishName: "Bayes' Theorem",
    formula: "P(A|B) = P(B|A)P(A) / P(B)",
    explanation: "根據新證據 B 更新事件 A 發生概率的方法。",
    symbols: [
      { symbol: "P(A|B)", meaning: "看到 B 後 A 發生的概率" },
      { symbol: "P(B|A)", meaning: "A 發生時看到 B 的概率" },
      { symbol: "P(A)", meaning: "先驗概率" },
      { symbol: "P(B)", meaning: "證據概率" }
    ],
    whenToUse: "用於診斷、風險評估、更新信念和不確定性決策。",
    example: "根據檢測陽性結果更新患病概率。",
    warning: "貝葉斯推論非常依賴先驗設定和證據品質。"
  },
  {
    id: "precision",
    category: "機器學習統計",
    name: "精確率",
    englishName: "Precision",
    formula: "Precision = TP / (TP + FP)",
    explanation: "在模型預測為正的樣本中，真正為正的比例。",
    symbols: [
      { symbol: "TP", meaning: "真正例" },
      { symbol: "FP", meaning: "假正例" }
    ],
    whenToUse: "當誤報成本較高時重視 Precision。",
    example: "垃圾郵件分類中，避免把正常郵件誤判為垃圾郵件。",
    warning: "Precision 高不代表模型能找到所有正例。"
  },
  {
    id: "recall",
    category: "機器學習統計",
    name: "召回率",
    englishName: "Recall",
    formula: "Recall = TP / (TP + FN)",
    explanation: "在所有真正為正的樣本中，被模型成功找出的比例。",
    symbols: [
      { symbol: "TP", meaning: "真正例" },
      { symbol: "FN", meaning: "假負例" }
    ],
    whenToUse: "當漏報成本較高時重視 Recall。",
    example: "疾病篩查中，漏掉真正病人會造成嚴重後果。",
    warning: "Recall 高可能伴隨較多誤報。"
  },
  {
    id: "f1-score",
    category: "機器學習統計",
    name: "F1 分數",
    englishName: "F1 Score",
    formula: "F1 = 2 × Precision × Recall / (Precision + Recall)",
    explanation: "Precision 和 Recall 的調和平均，用於平衡兩者。",
    symbols: [
      { symbol: "F1", meaning: "F1 分數" },
      { symbol: "Precision", meaning: "精確率" },
      { symbol: "Recall", meaning: "召回率" }
    ],
    whenToUse: "常用於不平衡分類問題。",
    example: "詐騙偵測、疾病篩查、違規內容識別。",
    warning: "F1 不能反映所有業務成本，需要結合具體場景。"
  }
];