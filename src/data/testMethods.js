export const testMethods = [
  {
    id: "one-sample-t-test",
    category: "平均數檢定",
    name: "單樣本 t 檢定",
    englishName: "One-sample t-test",
    purpose: "比較一組樣本平均數與一個已知標準值是否存在顯著差異。",
    dataType: "連續型數據",
    groups: "一組",
    sampleRelation: "單一樣本",
    assumptions: [
      "因變量為連續型數據",
      "樣本來自近似正態分佈母體",
      "樣本觀察值彼此獨立"
    ],
    whenToUse: [
      "只有一組樣本",
      "想比較樣本平均數與指定標準值",
      "數據是連續型"
    ],
    example: "比較某班平均成績是否高於 60 分。",
    resultInterpretation: "如果 p-value 小於顯著性水平，表示樣本平均數與標準值存在統計顯著差異。",
    alternatives: ["Wilcoxon signed-rank test"]
  },
  {
    id: "independent-t-test",
    category: "平均數檢定",
    name: "獨立樣本 t 檢定",
    englishName: "Independent Samples t-test",
    purpose: "比較兩組獨立樣本的平均數是否存在顯著差異。",
    dataType: "連續型數據",
    groups: "兩組",
    sampleRelation: "獨立樣本",
    assumptions: [
      "兩組樣本彼此獨立",
      "因變量為連續型數據",
      "每組數據近似正態分佈",
      "方差大致相等；若不相等可使用 Welch t-test"
    ],
    whenToUse: [
      "有兩組獨立樣本",
      "想比較兩組平均數",
      "數據是連續型"
    ],
    example: "比較男生和女生的平均考試分數是否不同。",
    resultInterpretation: "p-value 小於 0.05 通常表示兩組平均數存在顯著差異。",
    alternatives: ["Welch t-test", "Mann-Whitney U test"]
  },
  {
    id: "welch-t-test",
    category: "平均數檢定",
    name: "Welch t 檢定",
    englishName: "Welch t-test",
    purpose: "比較兩組獨立樣本平均數，適合兩組方差不相等的情況。",
    dataType: "連續型數據",
    groups: "兩組",
    sampleRelation: "獨立樣本",
    assumptions: [
      "兩組樣本彼此獨立",
      "因變量為連續型數據",
      "不要求兩組方差相等",
      "數據近似正態，或樣本量足夠大"
    ],
    whenToUse: [
      "兩組獨立樣本",
      "想比較平均數",
      "懷疑兩組方差不相等"
    ],
    example: "比較兩間分店的平均消費，但兩間分店消費波動明顯不同。",
    resultInterpretation: "如果 p-value 小於顯著性水平，表示兩組平均數存在統計顯著差異。",
    alternatives: ["Independent Samples t-test", "Mann-Whitney U test"]
  },
  {
    id: "paired-t-test",
    category: "平均數檢定",
    name: "配對樣本 t 檢定",
    englishName: "Paired t-test",
    purpose: "比較同一組對象在兩個時間點或兩種條件下的平均差異。",
    dataType: "連續型數據",
    groups: "兩組",
    sampleRelation: "配對樣本",
    assumptions: [
      "兩組資料存在配對關係",
      "差值近似正態分佈",
      "觀察值配對之間互相獨立"
    ],
    whenToUse: [
      "同一批對象前後比較",
      "兩組數據是一一配對",
      "想比較平均差值"
    ],
    example: "比較同一批學生補習前後的成績差異。",
    resultInterpretation: "p-value 小於 0.05 通常表示前後測存在顯著差異。",
    alternatives: ["Wilcoxon signed-rank test"]
  },
  {
    id: "anova",
    category: "平均數檢定",
    name: "單因子方差分析",
    englishName: "One-way ANOVA",
    purpose: "比較三組或以上樣本平均數是否存在顯著差異。",
    dataType: "連續型數據",
    groups: "三組或以上",
    sampleRelation: "獨立樣本",
    assumptions: [
      "因變量為連續型數據",
      "各組樣本彼此獨立",
      "每組數據近似正態分佈",
      "各組方差大致相等"
    ],
    whenToUse: [
      "有三組或以上樣本",
      "想比較不同組別平均數",
      "數據是連續型"
    ],
    example: "比較三種教學方法下學生平均成績是否不同。",
    resultInterpretation: "如果 ANOVA 顯著，通常需要進一步做事後比較，找出哪幾組有差異。",
    alternatives: ["Welch ANOVA", "Kruskal-Wallis test"]
  },
  {
    id: "two-way-anova",
    category: "平均數檢定",
    name: "雙因子方差分析",
    englishName: "Two-way ANOVA",
    purpose: "同時分析兩個分類自變量對一個連續因變量的影響，並檢查交互作用。",
    dataType: "連續型數據",
    groups: "多組",
    sampleRelation: "獨立樣本",
    assumptions: [
      "因變量為連續型數據",
      "兩個自變量為分類變量",
      "各組樣本彼此獨立",
      "殘差近似正態",
      "各組方差大致相等"
    ],
    whenToUse: [
      "想同時研究兩個因素的影響",
      "想檢查兩個因素是否存在交互作用",
      "因變量是連續型"
    ],
    example: "分析教學方法與性別對考試成績的影響，以及兩者是否有交互作用。",
    resultInterpretation: "結果通常分為因素 A 主效應、因素 B 主效應和 A×B 交互作用。",
    alternatives: ["Multiple Regression", "Aligned Rank Transform"]
  },
  {
    id: "mann-whitney-u-test",
    category: "非參數檢定",
    name: "Mann-Whitney U 檢定",
    englishName: "Mann-Whitney U Test",
    purpose: "比較兩組獨立樣本的分佈位置是否存在差異，常作為獨立樣本 t 檢定的非參數替代方法。",
    dataType: "連續或等級資料",
    groups: "兩組",
    sampleRelation: "獨立樣本",
    assumptions: [
      "兩組樣本彼此獨立",
      "資料至少可排序",
      "不要求資料正態分佈"
    ],
    whenToUse: [
      "兩組獨立樣本",
      "資料不符合正態分佈",
      "資料是等級資料或偏態明顯"
    ],
    example: "比較兩間分店的顧客滿意度排名是否不同。",
    resultInterpretation: "如果 p-value 小於顯著性水平，表示兩組分佈位置可能存在差異。",
    alternatives: ["Independent Samples t-test", "Welch t-test"]
  },
  {
    id: "wilcoxon-signed-rank-test",
    category: "非參數檢定",
    name: "Wilcoxon 符號等級檢定",
    englishName: "Wilcoxon Signed-rank Test",
    purpose: "比較配對資料的中位差異，常作為配對樣本 t 檢定的非參數替代方法。",
    dataType: "連續或等級資料",
    groups: "兩組",
    sampleRelation: "配對樣本",
    assumptions: [
      "資料存在配對關係",
      "差值至少可排序",
      "不要求差值正態分佈"
    ],
    whenToUse: [
      "同一批對象前後比較",
      "配對差值不符合正態",
      "資料是等級資料"
    ],
    example: "比較同一批病人治療前後疼痛評分是否改善。",
    resultInterpretation: "如果 p-value 小於顯著性水平，表示配對資料之間存在顯著差異。",
    alternatives: ["Paired t-test"]
  },
  {
    id: "kruskal-wallis-test",
    category: "非參數檢定",
    name: "Kruskal-Wallis 檢定",
    englishName: "Kruskal-Wallis Test",
    purpose: "比較三組或以上獨立樣本的分佈位置是否存在差異，常作為 ANOVA 的非參數替代方法。",
    dataType: "連續或等級資料",
    groups: "三組或以上",
    sampleRelation: "獨立樣本",
    assumptions: [
      "各組樣本彼此獨立",
      "資料至少可排序",
      "不要求資料正態分佈"
    ],
    whenToUse: [
      "三組或以上獨立樣本",
      "資料不符合正態分佈",
      "想比較組別分佈位置"
    ],
    example: "比較三種服務方案的顧客評分排名是否不同。",
    resultInterpretation: "如果結果顯著，通常還需要進一步做兩兩比較。",
    alternatives: ["One-way ANOVA", "Welch ANOVA"]
  },
  {
    id: "chi-square-test",
    category: "分類數據檢定",
    name: "卡方獨立性檢定",
    englishName: "Chi-square Test of Independence",
    purpose: "檢查兩個分類變量之間是否存在統計關聯。",
    dataType: "分類型數據",
    groups: "不限",
    sampleRelation: "獨立樣本",
    assumptions: [
      "資料為頻數資料",
      "觀察值彼此獨立",
      "期望頻數不應過低"
    ],
    whenToUse: [
      "兩個變量都是分類變量",
      "想知道兩個分類變量是否有關",
      "資料可整理為交叉表"
    ],
    example: "分析性別與是否購買產品之間是否有關。",
    resultInterpretation: "p-value 小於 0.05 通常表示兩個分類變量之間存在顯著關聯。",
    alternatives: ["Fisher's Exact Test"]
  },
  {
    id: "fisher-exact-test",
    category: "分類數據檢定",
    name: "Fisher 精確檢定",
    englishName: "Fisher's Exact Test",
    purpose: "用於小樣本分類資料，特別是 2x2 交叉表，判斷兩個分類變量是否相關。",
    dataType: "分類型數據",
    groups: "2x2 交叉表",
    sampleRelation: "獨立樣本",
    assumptions: [
      "資料為頻數資料",
      "通常用於 2x2 表",
      "適合樣本量小或期望頻數過低的情況"
    ],
    whenToUse: [
      "分類資料樣本量小",
      "卡方檢定期望頻數太低",
      "資料是 2x2 交叉表"
    ],
    example: "小樣本臨床研究中比較治療組與對照組是否康復。",
    resultInterpretation: "p-value 小於顯著性水平，表示兩個分類變量之間可能存在關聯。",
    alternatives: ["Chi-square Test of Independence"]
  },
  {
    id: "pearson-correlation",
    category: "相關分析",
    name: "皮爾森相關分析",
    englishName: "Pearson Correlation",
    purpose: "衡量兩個連續變量之間的線性相關程度。",
    dataType: "連續型數據",
    groups: "兩個變量",
    sampleRelation: "同一批樣本",
    assumptions: [
      "兩個變量均為連續型",
      "關係近似線性",
      "無嚴重離群值",
      "數據近似正態分佈"
    ],
    whenToUse: [
      "想分析兩個連續變量的關係",
      "關係大致呈線性",
      "不直接判斷因果"
    ],
    example: "分析學習時間與考試分數之間的關係。",
    resultInterpretation: "r 接近 1 表示正相關，接近 -1 表示負相關，接近 0 表示線性關係弱。",
    alternatives: ["Spearman Correlation"]
  },
  {
    id: "spearman-correlation",
    category: "相關分析",
    name: "斯皮爾曼相關分析",
    englishName: "Spearman Correlation",
    purpose: "衡量兩個變量排名之間的單調關係，適合等級資料或非正態資料。",
    dataType: "等級資料或非正態連續資料",
    groups: "兩個變量",
    sampleRelation: "同一批樣本",
    assumptions: [
      "資料至少可排序",
      "不要求正態分佈",
      "適合單調關係，不一定要求線性"
    ],
    whenToUse: [
      "資料是排名或 Likert 量表",
      "連續資料明顯非正態",
      "存在離群值影響 Pearson 相關"
    ],
    example: "分析服務滿意度排名與再次購買意願排名之間的關係。",
    resultInterpretation: "ρ 接近 1 表示正向單調關係，接近 -1 表示反向單調關係。",
    alternatives: ["Pearson Correlation"]
  },
  {
    id: "linear-regression",
    category: "回歸分析",
    name: "線性回歸",
    englishName: "Linear Regression",
    purpose: "用一個或多個自變量預測一個連續因變量。",
    dataType: "連續型因變量",
    groups: "變量模型",
    sampleRelation: "同一批樣本",
    assumptions: [
      "因變量為連續型",
      "自變量與因變量近似線性關係",
      "殘差近似正態",
      "殘差變異大致一致",
      "無嚴重共線性"
    ],
    whenToUse: [
      "想建立預測模型",
      "想量化自變量對因變量的影響",
      "因變量是連續型"
    ],
    example: "用廣告費、價格和節日因素預測銷售額。",
    resultInterpretation: "回歸係數表示自變量每增加一個單位，因變量平均變化多少。",
    alternatives: ["Logistic Regression", "Ridge Regression", "Lasso Regression"]
  },
  {
    id: "logistic-regression",
    category: "回歸分析",
    name: "Logistic 回歸",
    englishName: "Logistic Regression",
    purpose: "用一個或多個自變量預測二分類結果。",
    dataType: "二分類因變量",
    groups: "變量模型",
    sampleRelation: "同一批樣本",
    assumptions: [
      "因變量為二分類",
      "觀察值彼此獨立",
      "自變量與 logit 之間近似線性",
      "樣本量足夠",
      "無嚴重共線性"
    ],
    whenToUse: [
      "因變量是是否類型",
      "想預測事件發生概率",
      "想分析風險因素"
    ],
    example: "預測客戶是否購買、病人是否康復、學生是否合格。",
    resultInterpretation: "結果通常可用 odds ratio 解釋，即自變量變化對事件勝算的影響。",
    alternatives: ["Linear Probability Model", "Decision Tree", "Random Forest"]
  },
  {
    id: "cronbach-alpha",
    category: "問卷統計",
    name: "Cronbach's Alpha",
    englishName: "Cronbach's Alpha",
    purpose: "衡量問卷量表多個題項之間的內部一致性。",
    dataType: "量表題項",
    groups: "多個題項",
    sampleRelation: "同一批樣本",
    assumptions: [
      "多個題項應測量同一潛在構念",
      "題項分數通常為 Likert 量表或連續近似資料",
      "需要足夠樣本量"
    ],
    whenToUse: [
      "問卷包含多個題項",
      "想檢查量表信度",
      "題項應屬於同一構念"
    ],
    example: "檢查 5 條顧客滿意度題項是否可組成一個滿意度量表。",
    resultInterpretation: "Alpha 較高通常表示內部一致性較好，但過高也可能代表題項重複。",
    alternatives: ["McDonald's Omega", "Split-half Reliability"]
  },
  {
    id: "exploratory-factor-analysis",
    category: "問卷統計",
    name: "探索性因素分析",
    englishName: "Exploratory Factor Analysis",
    purpose: "探索多個觀察題項背後的潛在因素結構。",
    dataType: "多題項量表",
    groups: "多個變量",
    sampleRelation: "同一批樣本",
    assumptions: [
      "變量之間應有一定相關",
      "樣本量應足夠",
      "適合用於探索潛在構面",
      "KMO 和 Bartlett 檢定通常需達到可接受水平"
    ],
    whenToUse: [
      "不知道問卷背後有多少構面",
      "想把多個題項歸納為幾個因素",
      "做量表開發或初步驗證"
    ],
    example: "將 20 條服務品質題項歸納為服務態度、環境、價格等因素。",
    resultInterpretation: "根據因素負荷量判斷題項屬於哪個因素。",
    alternatives: ["Confirmatory Factor Analysis", "Principal Component Analysis"]
  },
  {
    id: "survival-analysis",
    category: "生存分析",
    name: "生存分析",
    englishName: "Survival Analysis",
    purpose: "分析事件發生時間，例如死亡、復發、流失、故障等。",
    dataType: "時間到事件資料",
    groups: "一組或多組",
    sampleRelation: "獨立樣本",
    assumptions: [
      "結果是事件發生時間",
      "可能存在截尾資料",
      "觀察值通常彼此獨立"
    ],
    whenToUse: [
      "想分析事件何時發生",
      "資料有截尾",
      "關注存活率或留存率"
    ],
    example: "分析病人治療後多久復發，或用戶註冊後多久流失。",
    resultInterpretation: "可用 Kaplan-Meier 曲線、Log-rank test 或 Cox 回歸解釋事件風險。",
    alternatives: ["Logistic Regression", "Cox Proportional Hazards Model"]
  }
];