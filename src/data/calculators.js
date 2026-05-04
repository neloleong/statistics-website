export const calculators = [
  {
    id: "mean-calculator",
    title: "平均數計算器",
    englishTitle: "Mean Calculator",
    category: "描述統計",
    description: "輸入一組數據，自動計算平均數、中位數、眾數。",
    inputs: ["一組數值資料"],
    outputs: ["平均數", "中位數", "眾數", "樣本數"],
    difficulty: "入門",
    status: "available"
  },
  {
    id: "standard-deviation-calculator",
    title: "標準差計算器",
    englishTitle: "Standard Deviation Calculator",
    category: "描述統計",
    description: "計算方差、標準差及變異係數。",
    inputs: ["一組數值資料"],
    outputs: ["平均數", "方差", "標準差", "變異係數"],
    difficulty: "入門",
    status: "available"
  },
  {
    id: "correlation-calculator",
    title: "相關係數計算器",
    englishTitle: "Correlation Calculator",
    category: "相關分析",
    description: "輸入兩組數據，計算 Pearson 相關係數。",
    inputs: ["X 數據", "Y 數據"],
    outputs: ["相關係數 r", "方向", "強度解釋"],
    difficulty: "中階",
    status: "planned"
  },
  {
    id: "t-test-calculator",
    title: "t-test 計算器",
    englishTitle: "t-test Calculator",
    category: "假設檢定",
    description: "比較兩組樣本平均數是否存在統計顯著差異。",
    inputs: ["第一組數據", "第二組數據", "樣本關係"],
    outputs: ["t 值", "自由度", "p-value", "結果解釋"],
    difficulty: "中階",
    status: "planned"
  },
  {
    id: "chi-square-calculator",
    title: "卡方檢定計算器",
    englishTitle: "Chi-square Test Calculator",
    category: "分類數據",
    description: "根據交叉表計算卡方檢定結果。",
    inputs: ["交叉表頻數"],
    outputs: ["χ² 值", "自由度", "p-value", "結果解釋"],
    difficulty: "中階",
    status: "planned"
  },
  {
    id: "confidence-interval-calculator",
    title: "置信區間計算器",
    englishTitle: "Confidence Interval Calculator",
    category: "推論統計",
    description: "根據樣本平均數、標準差和樣本量計算置信區間。",
    inputs: ["樣本平均數", "樣本標準差", "樣本量", "置信水平"],
    outputs: ["下限", "上限", "誤差範圍"],
    difficulty: "中階",
    status: "planned"
  },
  {
    id: "regression-calculator",
    title: "線性回歸計算器",
    englishTitle: "Linear Regression Calculator",
    category: "回歸分析",
    description: "根據 X 和 Y 數據計算簡單線性回歸方程。",
    inputs: ["X 數據", "Y 數據"],
    outputs: ["截距", "斜率", "R²", "預測方程"],
    difficulty: "中階",
    status: "planned"
  }
];