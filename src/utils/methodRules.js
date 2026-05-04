export const methodRules = [
  {
    id: "independent-t-test",
    name: "獨立樣本 t 檢定",
    englishName: "Independent Samples t-test",
    conditions: {
      goal: "compare-means",
      groupCount: "two",
      dataType: "continuous",
      sampleRelation: "independent",
      normality: "normal"
    },
    recommendation:
      "你的情況適合使用獨立樣本 t 檢定，用於比較兩組獨立樣本的平均數是否有顯著差異。",
    alternative:
      "如果兩組方差不相等，可考慮 Welch t-test；如果數據明顯不符合正態分佈，可考慮 Mann-Whitney U test。",
    caution: "使用前建議檢查兩組樣本是否真的互相獨立，以及是否存在極端離群值。"
  },
  {
    id: "welch-t-test",
    name: "Welch t 檢定",
    englishName: "Welch t-test",
    conditions: {
      goal: "compare-means",
      groupCount: "two",
      dataType: "continuous",
      sampleRelation: "independent",
      normality: "unequal-variance"
    },
    recommendation:
      "你的情況適合使用 Welch t-test，用於比較兩組獨立樣本平均數，且不要求兩組方差相等。",
    alternative:
      "如果方差大致相等，可使用獨立樣本 t 檢定；如果資料明顯非正態，可使用 Mann-Whitney U test。",
    caution: "Welch t-test 通常比傳統獨立樣本 t-test 更穩健，尤其兩組樣本量或方差不同時。"
  },
  {
    id: "paired-t-test",
    name: "配對樣本 t 檢定",
    englishName: "Paired t-test",
    conditions: {
      goal: "compare-means",
      groupCount: "two",
      dataType: "continuous",
      sampleRelation: "paired",
      normality: "normal"
    },
    recommendation:
      "你的情況適合使用配對樣本 t 檢定，用於比較同一批對象在兩個時間點或兩種條件下的平均差異。",
    alternative:
      "如果差值不符合正態分佈，可考慮 Wilcoxon signed-rank test。",
    caution: "重點不是兩組數據本身是否正態，而是兩組數據的差值是否近似正態。"
  },
  {
    id: "mann-whitney-u-test",
    name: "Mann-Whitney U 檢定",
    englishName: "Mann-Whitney U Test",
    conditions: {
      goal: "compare-means",
      groupCount: "two",
      dataType: "continuous",
      sampleRelation: "independent",
      normality: "non-normal"
    },
    recommendation:
      "你的情況可考慮 Mann-Whitney U 檢定，用於比較兩組獨立樣本在分佈位置上的差異。",
    alternative:
      "如果數據近似正態，可考慮獨立樣本 t 檢定；如果方差不齊，可考慮 Welch t-test。",
    caution: "這個方法通常被視為獨立樣本 t 檢定的非參數替代方法。"
  },
  {
    id: "wilcoxon-signed-rank-test",
    name: "Wilcoxon 符號等級檢定",
    englishName: "Wilcoxon Signed-rank Test",
    conditions: {
      goal: "compare-means",
      groupCount: "two",
      dataType: "continuous",
      sampleRelation: "paired",
      normality: "non-normal"
    },
    recommendation:
      "你的情況可考慮 Wilcoxon 符號等級檢定，用於配對樣本且差值不符合正態分佈的情況。",
    alternative:
      "如果差值近似正態，可使用配對樣本 t 檢定。",
    caution: "適合處理前後測、配對資料或同一對象兩次測量。"
  },
  {
    id: "anova",
    name: "單因子方差分析",
    englishName: "One-way ANOVA",
    conditions: {
      goal: "compare-means",
      groupCount: "three-or-more",
      dataType: "continuous",
      sampleRelation: "independent",
      normality: "normal"
    },
    recommendation:
      "你的情況適合使用單因子方差分析，用於比較三組或以上獨立樣本的平均數是否有差異。",
    alternative:
      "如果數據明顯不符合正態分佈，可考慮 Kruskal-Wallis test；如果方差不齊，可考慮 Welch ANOVA。",
    caution: "ANOVA 顯著只能表示至少有兩組存在差異，通常還需要事後比較。"
  },
  {
    id: "kruskal-wallis-test",
    name: "Kruskal-Wallis 檢定",
    englishName: "Kruskal-Wallis Test",
    conditions: {
      goal: "compare-means",
      groupCount: "three-or-more",
      dataType: "continuous",
      sampleRelation: "independent",
      normality: "non-normal"
    },
    recommendation:
      "你的情況可考慮 Kruskal-Wallis 檢定，用於三組或以上獨立樣本且不符合正態分佈的情況。",
    alternative:
      "如果數據近似正態且方差齊，可使用單因子 ANOVA。",
    caution: "如果檢定結果顯著，仍需要進一步做多重比較。"
  },
  {
    id: "chi-square-test",
    name: "卡方獨立性檢定",
    englishName: "Chi-square Test of Independence",
    conditions: {
      goal: "relationship",
      groupCount: "any",
      dataType: "categorical",
      sampleRelation: "independent",
      normality: "not-required"
    },
    recommendation:
      "你的情況適合使用卡方獨立性檢定，用於分析兩個分類變量之間是否存在關聯。",
    alternative:
      "如果樣本數很小或期望頻數過低，可考慮 Fisher's Exact Test。",
    caution: "卡方檢定只能判斷是否有關聯，不能直接證明因果關係。"
  },
  {
    id: "fisher-exact-test",
    name: "Fisher 精確檢定",
    englishName: "Fisher's Exact Test",
    conditions: {
      goal: "relationship",
      groupCount: "two-by-two",
      dataType: "categorical-small-sample",
      sampleRelation: "independent",
      normality: "not-required"
    },
    recommendation:
      "你的情況適合考慮 Fisher 精確檢定，特別是 2x2 交叉表且樣本數較小或期望頻數過低時。",
    alternative:
      "如果樣本量足夠且期望頻數不低，可使用卡方獨立性檢定。",
    caution: "Fisher 精確檢定常用於小樣本分類資料，不適合直接用來處理連續型數據。"
  },
  {
    id: "pearson-correlation",
    name: "皮爾森相關分析",
    englishName: "Pearson Correlation",
    conditions: {
      goal: "relationship",
      groupCount: "two-variables",
      dataType: "continuous",
      sampleRelation: "same-sample",
      normality: "normal"
    },
    recommendation:
      "你的情況適合使用皮爾森相關分析，用於衡量兩個連續變量之間的線性相關程度。",
    alternative:
      "如果資料是等級資料、非正態或存在明顯離群值，可考慮 Spearman 相關。",
    caution: "相關不等於因果，即使 r 很高，也不能直接說明一個變量導致另一個變量。"
  },
  {
    id: "spearman-correlation",
    name: "斯皮爾曼相關分析",
    englishName: "Spearman Correlation",
    conditions: {
      goal: "relationship",
      groupCount: "two-variables",
      dataType: "ordinal-or-non-normal",
      sampleRelation: "same-sample",
      normality: "non-normal"
    },
    recommendation:
      "你的情況可考慮 Spearman 相關分析，適合等級資料、非正態資料或非線性但單調的關係。",
    alternative:
      "如果兩個連續變量近似正態且呈線性關係，可使用 Pearson 相關。",
    caution: "Spearman 分析的是排名關係，不是原始數值之間的線性關係。"
  },
  {
    id: "linear-regression",
    name: "線性回歸",
    englishName: "Linear Regression",
    conditions: {
      goal: "prediction",
      groupCount: "variables",
      dataType: "continuous-outcome",
      sampleRelation: "same-sample",
      normality: "residual-normal"
    },
    recommendation:
      "你的情況適合考慮線性回歸，用於預測連續型結果變量，並分析自變量對因變量的影響。",
    alternative:
      "如果結果變量是二分類，可考慮 Logistic 回歸；如果變量很多或存在共線性，可考慮 Ridge / Lasso。",
    caution: "線性回歸需要檢查線性關係、殘差分佈、異方差和共線性。"
  },
  {
    id: "logistic-regression",
    name: "Logistic 回歸",
    englishName: "Logistic Regression",
    conditions: {
      goal: "prediction",
      groupCount: "variables",
      dataType: "binary-outcome",
      sampleRelation: "same-sample",
      normality: "not-required"
    },
    recommendation:
      "你的情況適合考慮 Logistic 回歸，用於預測二分類結果，例如是否購買、是否患病、是否合格。",
    alternative:
      "如果結果變量是連續型，可考慮線性回歸；如果重視非線性預測，可考慮決策樹或隨機森林。",
    caution: "Logistic 回歸輸出通常需要用 odds ratio 或概率方式解釋。"
  },
  {
    id: "cronbach-alpha",
    name: "Cronbach's Alpha",
    englishName: "Cronbach's Alpha",
    conditions: {
      goal: "reliability",
      groupCount: "items",
      dataType: "scale-items",
      sampleRelation: "same-sample",
      normality: "not-required"
    },
    recommendation:
      "你的情況適合使用 Cronbach's Alpha，用於檢查多個問卷題項是否具有內部一致性。",
    alternative:
      "如果想做更完整的信度分析，可考慮 McDonald's Omega 或分半信度。",
    caution: "Alpha 高不代表問卷一定有效，只代表題項之間內部一致性較高。"
  },
  {
    id: "exploratory-factor-analysis",
    name: "探索性因素分析",
    englishName: "Exploratory Factor Analysis",
    conditions: {
      goal: "dimension-reduction",
      groupCount: "variables",
      dataType: "scale-items",
      sampleRelation: "same-sample",
      normality: "approximate"
    },
    recommendation:
      "你的情況可考慮探索性因素分析，用於探索多個問卷題項背後的潛在構面。",
    alternative:
      "如果你已有明確理論模型，可考慮驗證性因素分析 CFA。",
    caution: "因素分析前通常要檢查 KMO 和 Bartlett 球形檢定。"
  }
];

export function findRecommendedMethod({
  goal,
  groupCount,
  dataType,
  sampleRelation,
  normality
}) {
  const exactMatch = methodRules.find((rule) => {
    return (
      rule.conditions.goal === goal &&
      rule.conditions.groupCount === groupCount &&
      rule.conditions.dataType === dataType &&
      rule.conditions.sampleRelation === sampleRelation &&
      rule.conditions.normality === normality
    );
  });

  if (exactMatch) {
    return exactMatch;
  }

  const closeMatch = methodRules.find((rule) => {
    return (
      rule.conditions.goal === goal &&
      rule.conditions.groupCount === groupCount &&
      rule.conditions.dataType === dataType &&
      rule.conditions.sampleRelation === sampleRelation
    );
  });

  if (closeMatch) {
    return {
      ...closeMatch,
      recommendation:
        "目前條件未完全精準匹配，但以下方法與你的情況最接近，建議再根據分佈、樣本量和研究目的確認。",
      caution: closeMatch.caution
    };
  }

  const partialMatch = methodRules.find((rule) => {
    const goalMatches = rule.conditions.goal === goal;
    const dataTypeMatches =
      rule.conditions.dataType === dataType ||
      rule.conditions.dataType === "any" ||
      dataType === "any";

    return goalMatches && dataTypeMatches;
  });

  if (partialMatch) {
    return {
      ...partialMatch,
      recommendation:
        "目前條件只能做部分匹配，以下方法可能接近你的分析需求，但仍建議檢查資料結構。",
      caution: partialMatch.caution
    };
  }

  return {
    id: "manual-check",
    name: "需要進一步判斷",
    englishName: "Manual Review Required",
    recommendation:
      "目前輸入條件不足以直接推薦單一方法，建議先確認數據類型、樣本關係、研究目的及分佈情況。",
    alternative:
      "可以先從描述統計、圖表檢查及研究問題出發，再選擇檢定、相關或回歸方法。",
    caution: "統計方法不能只根據樣本數決定，必須同時考慮研究問題與數據結構。"
  };
}

export function getMethodOptions() {
  return {
    goals: [
      { value: "compare-means", label: "比較平均數 / 組別差異" },
      { value: "relationship", label: "分析關係 / 關聯" },
      { value: "prediction", label: "建立預測模型" },
      { value: "reliability", label: "問卷信度分析" },
      { value: "dimension-reduction", label: "因素 / 維度分析" }
    ],
    groupCounts: [
      { value: "two", label: "兩組" },
      { value: "three-or-more", label: "三組或以上" },
      { value: "two-variables", label: "兩個變量" },
      { value: "variables", label: "多個變量" },
      { value: "items", label: "多個問卷題項" },
      { value: "two-by-two", label: "2x2 交叉表" },
      { value: "any", label: "不限" }
    ],
    dataTypes: [
      { value: "continuous", label: "連續型數據" },
      { value: "categorical", label: "分類型數據" },
      { value: "categorical-small-sample", label: "小樣本分類資料" },
      { value: "ordinal-or-non-normal", label: "等級資料 / 非正態資料" },
      { value: "continuous-outcome", label: "連續型結果變量" },
      { value: "binary-outcome", label: "二分類結果變量" },
      { value: "scale-items", label: "問卷量表題項" }
    ],
    sampleRelations: [
      { value: "independent", label: "獨立樣本" },
      { value: "paired", label: "配對樣本" },
      { value: "same-sample", label: "同一批樣本" }
    ],
    normalities: [
      { value: "normal", label: "近似正態 / 符合參數檢定條件" },
      { value: "non-normal", label: "不符合正態 / 不確定" },
      { value: "unequal-variance", label: "方差不齊" },
      { value: "not-required", label: "不需要正態假設" },
      { value: "residual-normal", label: "檢查殘差正態" },
      { value: "approximate", label: "近似即可 / 視情況檢查" }
    ]
  };
}

export function getMethodById(id) {
  return methodRules.find((method) => method.id === id) || null;
}