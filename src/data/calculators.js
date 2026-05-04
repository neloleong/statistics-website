export const calculators = [
  {
    id: "mean-calculator",
    name: "平均數計算器",
    englishName: "Mean Calculator",
    category: "描述統計",
    status: "available",
    difficulty: "入門",
    description:
      "輸入一組數據後，自動計算平均數、中位數、眾數、樣本數、總和、最大值、最小值及範圍。",
    useCases: [
      "快速計算一組成績、銷售額或問卷分數的平均水平",
      "了解資料的中心位置",
      "作為描述統計分析的第一步"
    ],
    inputs: ["一組數值資料，例如：80, 75, 90, 88, 92"],
    outputs: [
      "樣本數",
      "總和",
      "平均數",
      "中位數",
      "眾數",
      "最小值",
      "最大值",
      "範圍"
    ],
    warning:
      "平均數容易受極端值影響。如果資料有明顯離群值，建議同時查看中位數。"
  },

  {
    id: "standard-deviation-calculator",
    name: "標準差計算器",
    englishName: "Standard Deviation Calculator",
    category: "描述統計",
    status: "available",
    difficulty: "入門",
    description:
      "計算樣本方差、樣本標準差、母體方差、母體標準差、變異係數、四分位數及四分位距。",
    useCases: [
      "了解數據是否集中或分散",
      "比較不同資料組的波動程度",
      "分析成績、銷售額、價格、回報率等資料的穩定性"
    ],
    inputs: ["一組數值資料，例如：12, 15, 18, 20, 22"],
    outputs: [
      "樣本數",
      "平均數",
      "樣本方差",
      "樣本標準差",
      "母體方差",
      "母體標準差",
      "變異係數",
      "Q1",
      "Q2",
      "Q3",
      "IQR",
      "範圍"
    ],
    warning:
      "樣本標準差通常用於抽樣資料，母體標準差則用於已掌握整個母體資料的情況。"
  },

  {
    id: "correlation-calculator",
    name: "相關係數計算器",
    englishName: "Correlation Calculator",
    category: "關係分析",
    status: "available",
    difficulty: "基礎",
    description:
      "輸入兩組數據後，計算 Pearson 相關係數，並判斷相關方向及相關強度。",
    useCases: [
      "分析兩個連續變量是否有線性關係",
      "例如廣告費與銷售額、學習時間與考試成績",
      "作為回歸分析前的初步探索"
    ],
    inputs: ["X 變量數值", "Y 變量數值"],
    outputs: ["Pearson 相關係數 r", "相關方向", "相關強度", "數據數量檢查"],
    warning:
      "相關不等於因果。即使兩個變量高度相關，也不代表其中一個一定導致另一個。"
  },

  {
    id: "regression-calculator",
    name: "線性回歸計算器",
    englishName: "Linear Regression Calculator",
    category: "回歸分析",
    status: "available",
    difficulty: "基礎",
    description:
      "根據兩組數據建立簡單線性回歸模型，計算斜率、截距、相關係數、R²，並支援輸入 X 預測 Y。",
    useCases: [
      "分析一個自變量如何影響一個連續型結果變量",
      "例如廣告費預測銷售額",
      "例如學習時間預測考試分數",
      "建立簡單預測模型"
    ],
    inputs: ["X 變量數值", "Y 變量數值", "可選：用於預測的 X 值"],
    outputs: ["斜率", "截距", "Pearson r", "R²", "回歸方程", "預測值"],
    warning:
      "簡單線性回歸只適合一個自變量和一個連續型因變量。正式分析時仍應檢查殘差、線性關係、離群值及共線性等問題。"
  },

  {
    id: "t-test-calculator",
    name: "t 檢定計算器",
    englishName: "T-Test Calculator",
    category: "假設檢定",
    status: "available",
    difficulty: "基礎",
    description:
      "支援獨立樣本 t 檢定與配對樣本 t 檢定，計算 t 值、自由度、兩組平均數及差異方向。",
    useCases: [
      "比較兩組平均數是否有明顯差異",
      "比較實驗組與對照組成績",
      "比較同一批對象前後測分數",
      "用於教育、醫學、心理、商業研究中的兩組比較"
    ],
    inputs: ["第一組數值資料", "第二組數值資料", "檢定類型：獨立樣本或配對樣本"],
    outputs: ["第一組平均數", "第二組平均數", "平均數差異", "t 值", "自由度", "差異方向"],
    warning:
      "目前工具主要提供 t 值與自由度，正式研究仍建議使用 SPSS、R、Python 或其他統計軟件計算精確 p-value。"
  },

  {
    id: "chi-square-calculator",
    name: "卡方檢定計算器",
    englishName: "Chi-Square Test Calculator",
    category: "假設檢定",
    status: "available",
    difficulty: "基礎",
    description:
      "輸入交叉表後，自動計算卡方統計量、自由度、總樣本數及期望頻數表。",
    useCases: [
      "檢查兩個分類變量是否有關聯",
      "例如性別與購買意願是否有關",
      "例如年齡組別與政策支持度是否有關",
      "問卷交叉分析"
    ],
    inputs: ["交叉表觀察頻數，例如 2x2、2x3、3x3 表格"],
    outputs: ["卡方值 χ²", "自由度", "總樣本數", "期望頻數表"],
    warning:
      "如果樣本量太小，或期望頻數低於 5 的格子太多，應考慮 Fisher 精確檢定。"
  },

  {
    id: "confidence-interval-calculator",
    name: "置信區間計算器",
    englishName: "Confidence Interval Calculator",
    category: "推論統計",
    status: "available",
    difficulty: "基礎",
    description:
      "根據樣本平均數、樣本標準差、樣本數及信心水平，估計平均數的置信區間。",
    useCases: [
      "估計母體平均數可能落在哪個範圍",
      "用於問卷平均分、成績、消費額、測量數據等分析",
      "協助理解抽樣誤差與估計不確定性"
    ],
    inputs: ["樣本平均數", "樣本標準差", "樣本數", "信心水平：90%、95%、99%"],
    outputs: ["z 臨界值", "標準誤", "誤差範圍", "置信區間下限", "置信區間上限"],
    warning:
      "目前使用 z 臨界值作近似估計。若樣本數較小，正式研究應考慮使用 t 分佈。"
  },

  {
    id: "ab-test-calculator",
    name: "A/B Testing 兩比例計算器",
    englishName: "A/B Testing Proportion Calculator",
    category: "商業分析",
    status: "available",
    difficulty: "進階",
    description:
      "用於比較 A 組與 B 組的轉化率是否有顯著差異，例如廣告版本、落地頁版本或優惠方案比較。",
    useCases: [
      "比較兩個網頁版本的轉化率",
      "比較兩個廣告素材的點擊率",
      "比較兩種活動方案的報名率",
      "商業增長與產品實驗分析"
    ],
    inputs: ["A 組樣本數", "A 組成功數", "B 組樣本數", "B 組成功數"],
    outputs: [
      "A 組轉化率",
      "B 組轉化率",
      "轉化率差異",
      "相對提升 Lift",
      "合併轉化率",
      "標準誤",
      "z 值",
      "顯著性解釋"
    ],
    warning:
      "A/B Testing 結果應同時考慮樣本量、測試時間、流量來源、實驗設計和實際商業價值。"
  },

  {
    id: "anova-calculator",
    name: "單因子 ANOVA 計算器",
    englishName: "One-Way ANOVA Calculator",
    category: "假設檢定",
    status: "planned",
    difficulty: "進階",
    description:
      "用於比較三組或以上平均數是否存在顯著差異，適合教學模式、治療方案、產品方案等多組比較。",
    useCases: [
      "比較三種教學方法的成績差異",
      "比較三種產品包裝對銷售額的影響",
      "比較多個組別的問卷平均分",
      "實驗設計與多組平均數分析"
    ],
    inputs: ["三組或以上數值資料"],
    outputs: ["組間平方和", "組內平方和", "自由度", "均方", "F 值", "結果解釋"],
    warning:
      "ANOVA 只能告訴你至少有一組不同，不能直接指出哪兩組不同。正式分析通常需要進一步做事後比較。"
  },

  {
    id: "sample-size-calculator",
    name: "樣本量計算器",
    englishName: "Sample Size Calculator",
    category: "研究設計",
    status: "planned",
    difficulty: "進階",
    description:
      "根據信心水平、誤差範圍、母體比例或標準差，估計研究或問卷所需樣本量。",
    useCases: [
      "問卷調查前估計需要多少受訪者",
      "市場研究樣本量規劃",
      "學術研究抽樣設計",
      "估計比例或平均數所需樣本數"
    ],
    inputs: ["信心水平", "允許誤差", "預估比例或標準差", "母體大小，可選"],
    outputs: ["建議樣本量", "有限母體修正後樣本量", "計算假設說明"],
    warning:
      "樣本量估算只是一個規劃工具，實際研究仍應考慮抽樣方法、回收率、分層比例及研究設計。"
  },

  {
    id: "cronbach-alpha-calculator",
    name: "Cronbach's Alpha 信度計算器",
    englishName: "Cronbach's Alpha Calculator",
    category: "問卷分析",
    status: "planned",
    difficulty: "進階",
    description:
      "用於評估問卷量表多個題項之間的一致性，常見於心理學、教育研究、市場調查和服務滿意度研究。",
    useCases: [
      "檢查滿意度量表是否可靠",
      "檢查多個題項是否能共同測量同一構面",
      "問卷研究中的信度分析",
      "社會科學與市場研究"
    ],
    inputs: ["多位受訪者對多個題項的評分資料"],
    outputs: ["Cronbach's Alpha", "題項數量", "受訪者數量", "信度解釋"],
    warning:
      "Alpha 值過低代表題項一致性不足；但 Alpha 值過高亦可能代表題項重複性太強。"
  },

  {
    id: "z-score-calculator",
    name: "z-score 標準分數計算器",
    englishName: "Z-Score Calculator",
    category: "描述統計",
    status: "planned",
    difficulty: "基礎",
    description:
      "根據原始分數、平均數和標準差，計算 z-score，判斷某個數值相對於整體資料的位置。",
    useCases: [
      "判斷某個學生分數在班級中的相對位置",
      "找出資料中的極端值",
      "標準化不同尺度的數據",
      "理解正態分佈中的位置"
    ],
    inputs: ["原始分數", "平均數", "標準差"],
    outputs: ["z-score", "相對位置解釋", "是否可能為離群值"],
    warning:
      "z-score 的解釋通常假設資料接近正態分佈。若資料高度偏態，應小心使用。"
  },

  {
    id: "probability-calculator",
    name: "機率分佈計算器",
    englishName: "Probability Distribution Calculator",
    category: "機率論",
    status: "planned",
    difficulty: "進階",
    description:
      "用於計算常見機率分佈，例如二項分佈、泊松分佈和正態分佈的基本機率。",
    useCases: [
      "計算成功次數的機率",
      "計算一定時間內事件發生次數的機率",
      "理解正態分佈下的區間機率",
      "輔助統計推論與假設檢定學習"
    ],
    inputs: ["分佈類型", "分佈參數", "目標數值或區間"],
    outputs: ["機率值", "累積機率", "分佈解釋"],
    warning:
      "不同分佈有不同前提，例如二項分佈需要固定試驗次數與成功機率，泊松分佈適合稀有事件次數。"
  },

  {
    id: "logistic-regression-helper",
    name: "Logistic 回歸解釋工具",
    englishName: "Logistic Regression Helper",
    category: "回歸分析",
    status: "planned",
    difficulty: "進階",
    description:
      "協助理解 Logistic 回歸輸出，包括勝算比 Odds Ratio、係數方向、預測機率和分類結果。",
    useCases: [
      "分析是否購買、是否通過、是否復發等二分類結果",
      "解釋 Odds Ratio",
      "輔助醫學、商業、社會科學中的二分類模型分析",
      "理解分類模型的輸出結果"
    ],
    inputs: ["回歸係數", "Odds Ratio", "自變量數值", "模型截距，可選"],
    outputs: ["係數方向解釋", "Odds Ratio 解釋", "預測機率", "分類結果輔助說明"],
    warning:
      "Logistic 回歸正式分析需要檢查樣本量、變量編碼、模型適配度、多重共線性及分類表現。"
  }
];

export default calculators;