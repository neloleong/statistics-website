export const articles = [
  {
    id: "what-is-p-value",
    title: "什麼是 p-value？",
    englishTitle: "What is a p-value?",
    category: "假設檢定",
    difficulty: "入門",
    readingTime: "約 5 分鐘",
    summary:
      "p-value 是統計檢定中最常見、也最容易被誤解的概念。它不是假設正確的機率，而是在虛無假設成立時，觀察到目前或更極端結果的機率。",
    relatedTools: [
      { label: "方法選擇器", page: "methods" },
      { label: "t 檢定計算器", page: "calculators", param: "t-test-calculator" },
      { label: "ANOVA 計算器", page: "calculators", param: "anova-calculator" }
    ],
    sections: [
      {
        heading: "一、p-value 的基本意思",
        content:
          "p-value 可以理解為：如果虛無假設本來是成立的，那麼現在看到這種結果，或者比現在更極端的結果，有多罕見。p-value 越小，代表目前資料與虛無假設越不一致。"
      },
      {
        heading: "二、p-value 不是什麼",
        content:
          "p-value 不是研究假設為真的機率，也不是結果有多重要的指標。它只能幫助我們判斷資料是否與虛無假設有明顯衝突。"
      },
      {
        heading: "三、常見判斷方式",
        content:
          "在很多研究中，會用 0.05 作為顯著性水平。如果 p-value 小於 0.05，通常會說結果具有統計顯著性；如果大於 0.05，則未能拒絕虛無假設。"
      },
      {
        heading: "四、使用時要注意",
        content:
          "p-value 會受到樣本量影響。樣本量很大時，即使很小的差異也可能顯著；樣本量很小時，即使差異看起來不小，也可能不顯著。因此正式分析時應同時看效果量、置信區間和研究背景。"
      }
    ]
  },
  {
    id: "standard-deviation-explained",
    title: "標準差是什麼？",
    englishTitle: "What is Standard Deviation?",
    category: "描述統計",
    difficulty: "入門",
    readingTime: "約 4 分鐘",
    summary:
      "標準差用來描述資料的分散程度。標準差越大，代表資料越分散；標準差越小，代表資料越集中。",
    relatedTools: [
      {
        label: "標準差計算器",
        page: "calculators",
        param: "standard-deviation-calculator"
      },
      { label: "平均數計算器", page: "calculators", param: "mean-calculator" }
    ],
    sections: [
      {
        heading: "一、標準差的直觀理解",
        content:
          "平均數告訴我們資料大概集中在哪裡，而標準差則告訴我們資料分散得有多開。兩組資料可以有相同平均數，但標準差完全不同。"
      },
      {
        heading: "二、標準差大代表什麼",
        content:
          "標準差大，代表資料之間差距較大。例如一班學生分數差距很大，標準差就會較高。"
      },
      {
        heading: "三、標準差小代表什麼",
        content:
          "標準差小，代表資料比較集中。例如所有學生分數都接近平均分，標準差就會較低。"
      },
      {
        heading: "四、常見錯誤",
        content:
          "很多人只看平均數，不看標準差，這會忽略資料的穩定性和分散程度。正式報告通常應同時呈現平均數、標準差和樣本量。"
      }
    ]
  },
  {
    id: "t-test-vs-anova",
    title: "t 檢定和 ANOVA 有什麼分別？",
    englishTitle: "t-test vs ANOVA",
    category: "假設檢定",
    difficulty: "基礎",
    readingTime: "約 6 分鐘",
    summary:
      "t 檢定通常用於比較兩組平均數，而 ANOVA 用於比較三組或以上平均數。兩者都是平均數差異分析，但適用場景不同。",
    relatedTools: [
      { label: "t 檢定計算器", page: "calculators", param: "t-test-calculator" },
      { label: "ANOVA 計算器", page: "calculators", param: "anova-calculator" },
      { label: "方法選擇器", page: "methods" }
    ],
    sections: [
      {
        heading: "一、t 檢定適合什麼情況",
        content:
          "t 檢定常用於比較兩組平均數，例如男生與女生的平均成績是否不同，或同一批人訓練前後分數是否有變化。"
      },
      {
        heading: "二、ANOVA 適合什麼情況",
        content:
          "ANOVA 用於比較三組或以上平均數，例如三種教學方法、四個產品版本或多個班級之間的平均分是否存在差異。"
      },
      {
        heading: "三、為什麼三組以上不要反覆做 t 檢定",
        content:
          "如果三組以上資料反覆做多次 t 檢定，會增加第一類錯誤的風險，也就是更容易誤判差異存在。ANOVA 可以先做整體差異檢查。"
      },
      {
        heading: "四、ANOVA 顯著後還要做什麼",
        content:
          "ANOVA 只能告訴我們至少有一組可能不同，但不能直接指出哪兩組不同。因此結果顯著後，通常需要進一步做事後比較。"
      }
    ]
  },
  {
    id: "when-to-use-chi-square",
    title: "什麼時候用卡方檢定？",
    englishTitle: "When to Use Chi-square Test?",
    category: "類別資料",
    difficulty: "基礎",
    readingTime: "約 5 分鐘",
    summary:
      "卡方檢定適合分析兩個類別變量是否有關聯，例如性別與購買意願、地區與品牌選擇等交叉表資料。",
    relatedTools: [
      {
        label: "卡方檢定計算器",
        page: "calculators",
        param: "chi-square-calculator"
      },
      { label: "方法選擇器", page: "methods" }
    ],
    sections: [
      {
        heading: "一、卡方檢定分析什麼",
        content:
          "卡方檢定主要用來分析類別資料之間是否存在關聯。例如想知道性別與是否購買某產品是否有關，就可以使用卡方檢定。"
      },
      {
        heading: "二、資料應該長什麼樣",
        content:
          "卡方檢定通常使用交叉表，表格中的數值應該是人數或次數，而不是平均數或百分比。"
      },
      {
        heading: "三、什麼時候不適合",
        content:
          "如果資料是連續型數值，例如成績、收入、時間，就不應直接使用卡方檢定。若樣本量太小，也要小心期望頻數不足的問題。"
      },
      {
        heading: "四、解讀時要注意",
        content:
          "卡方檢定可以告訴我們兩個類別變量是否可能有關聯，但不能證明因果，也不能直接說明關聯強度。"
      }
    ]
  },
  {
    id: "cronbach-alpha-guide",
    title: "Cronbach's Alpha 怎樣解讀？",
    englishTitle: "How to Interpret Cronbach's Alpha?",
    category: "問卷分析",
    difficulty: "基礎",
    readingTime: "約 6 分鐘",
    summary:
      "Cronbach's Alpha 常用於問卷信度分析，用來檢查多個題項是否穩定測量同一個構面。",
    relatedTools: [
      {
        label: "Cronbach's Alpha 計算器",
        page: "calculators",
        param: "cronbach-alpha-calculator"
      }
    ],
    sections: [
      {
        heading: "一、Cronbach's Alpha 是什麼",
        content:
          "Cronbach's Alpha 是內部一致性指標，常用於問卷量表分析。它可以幫助判斷多個題項是否可能在測量同一個概念。"
      },
      {
        heading: "二、常見解讀範圍",
        content:
          "一般來說，Alpha 低於 0.60 代表信度偏低；0.70 以上通常可接受；0.80 以上較好；但如果高於 0.95，可能代表題項過度重複。"
      },
      {
        heading: "三、Alpha 高不代表一定有效",
        content:
          "Alpha 只反映內部一致性，不代表問卷一定有效。問卷是否真正測量到想測的概念，還需要配合效度分析和題項內容判斷。"
      },
      {
        heading: "四、常見錯誤",
        content:
          "常見錯誤包括把缺失值當成 0、反向題沒有反向計分、把不同構面的題項混在一起計算。這些都會影響 Alpha 的結果。"
      }
    ]
  },
  {
    id: "ab-testing-result",
    title: "A/B Testing 怎樣判斷結果？",
    englishTitle: "How to Interpret A/B Testing Results?",
    category: "商業分析",
    difficulty: "基礎",
    readingTime: "約 6 分鐘",
    summary:
      "A/B Testing 不只是比較哪一組轉化率高，還需要考慮樣本量、測試時間、流量來源和實際商業價值。",
    relatedTools: [
      { label: "A/B Testing 計算器", page: "calculators", param: "ab-test-calculator" }
    ],
    sections: [
      {
        heading: "一、A/B Testing 比較什麼",
        content:
          "A/B Testing 通常比較兩個版本的轉化率，例如 A 版和 B 版頁面，哪一個註冊率、購買率或點擊率更高。"
      },
      {
        heading: "二、不能只看轉化率高低",
        content:
          "如果 B 組轉化率比 A 組高，不代表 B 一定比較好。還需要看樣本量是否足夠，以及差異是否可能只是隨機波動。"
      },
      {
        heading: "三、顯著性與商業價值",
        content:
          "統計顯著不等於商業上值得採用。如果提升很小，即使統計上顯著，也要考慮實際收入、成本和用戶體驗。"
      },
      {
        heading: "四、常見錯誤",
        content:
          "常見錯誤包括測試時間太短、樣本量不足、流量來源不一致、測試過程中頻繁修改頁面或提前停止實驗。"
      }
    ]
  },
  {
    id: "logistic-regression-intro",
    title: "什麼是 Logistic 回歸？",
    englishTitle: "What is Logistic Regression?",
    category: "回歸分析",
    difficulty: "進階",
    readingTime: "約 7 分鐘",
    summary:
      "Logistic 回歸常用於二分類結果分析，例如是否購買、是否流失、是否通過、是否患病等情況。",
    relatedTools: [
      {
        label: "Logistic 回歸解釋工具",
        page: "calculators",
        param: "logistic-regression-helper"
      }
    ],
    sections: [
      {
        heading: "一、Logistic 回歸用來做什麼",
        content:
          "當結果只有兩類，例如是或否、成功或失敗、購買或不購買時，就可以考慮 Logistic 回歸。它常用於分類預測和風險因素分析。"
      },
      {
        heading: "二、它和線性回歸有什麼不同",
        content:
          "線性回歸預測連續數值，而 Logistic 回歸預測某件事情發生的機率。它的輸出通常會轉換為 0 到 1 之間的機率。"
      },
      {
        heading: "三、Odds Ratio 是什麼",
        content:
          "Odds Ratio 可以理解為勝算比。大於 1 表示變量增加時事件發生的勝算上升，小於 1 則表示勝算下降。"
      },
      {
        heading: "四、正式分析要注意",
        content:
          "正式使用 Logistic 回歸時，需要檢查樣本量、變量編碼、模型適配度、ROC、AUC、混淆矩陣和分類門檻。"
      }
    ]
  },
  {
    id: "sample-size-estimation",
    title: "樣本量應該怎樣估算？",
    englishTitle: "How to Estimate Sample Size?",
    category: "研究設計",
    difficulty: "基礎",
    readingTime: "約 6 分鐘",
    summary:
      "樣本量估算是研究設計的重要步驟。樣本太少，結果不穩定；樣本太多，可能浪費時間和成本。",
    relatedTools: [
      {
        label: "樣本量計算器",
        page: "calculators",
        param: "sample-size-calculator"
      }
    ],
    sections: [
      {
        heading: "一、為什麼要估算樣本量",
        content:
          "樣本量會影響研究結果的穩定性和可信度。樣本太少可能無法發現真實差異，樣本太多則可能浪費資源。"
      },
      {
        heading: "二、影響樣本量的因素",
        content:
          "常見因素包括置信水平、誤差範圍、母體大小、預期比例、標準差和研究設計方式。"
      },
      {
        heading: "三、問卷研究常見做法",
        content:
          "問卷研究通常會先設定可接受誤差和置信水平，再估算所需樣本量。如果預計有無效問卷或低回收率，應提前增加派發數量。"
      },
      {
        heading: "四、樣本量不是唯一重點",
        content:
          "樣本量大不代表研究一定可靠。抽樣方法、樣本代表性、問卷設計和資料清理同樣重要。"
      }
    ]
  },
  {
  id: "confidence-interval-intro",
  title: "什麼是置信區間？",
  englishTitle: "What Is a Confidence Interval?",
  category: "推論統計",
  difficulty: "初學",
  readingTime: "6 分鐘",
  summary:
    "置信區間是統計推論中非常重要的概念，用來表示我們對母體參數估計的不確定範圍。相比只給出一個平均數或比例，置信區間能更完整地反映估計結果的可靠程度。",
  relatedTools: ["confidence-interval-calculator", "sample-size-calculator"],
  sections: [
    {
      heading: "1. 置信區間是什麼？",
      content:
        "置信區間是一個由樣本資料推算出來的範圍，用來估計真正的母體參數可能落在哪裡。例如我們用樣本平均數估計全體學生的平均分，置信區間可以告訴我們這個估計大約有多穩定。"
    },
    {
      heading: "2. 95% 置信區間代表什麼？",
      content:
        "95% 置信區間並不是指某一次計算出的區間有 95% 機率包含真值，而是指如果用同樣方法重複抽樣很多次，約有 95% 的區間會包含真正的母體參數。"
    },
    {
      heading: "3. 置信區間和 p-value 有什麼關係？",
      content:
        "p-value 主要用來判斷結果是否具有統計顯著性，而置信區間則可以展示估計值的範圍和不確定性。實務分析中，兩者通常應該一起解讀。"
    },
    {
      heading: "4. 置信區間越窄越好嗎？",
      content:
        "置信區間越窄，通常代表估計越精確。但過窄的區間也可能來自過大的樣本量或不合理的模型假設，因此仍要配合研究設計和資料品質判斷。"
    }
  ]
},
{
  id: "degree-of-freedom-explained",
  title: "什麼是自由度？",
  englishTitle: "What Are Degrees of Freedom?",
  category: "統計基礎",
  difficulty: "中級",
  readingTime: "6 分鐘",
  summary:
    "自由度是很多統計檢定中都會出現的概念，例如 t 檢定、卡方檢定和 ANOVA。它反映在特定限制條件下，資料中仍然可以自由變動的資訊量。",
  relatedTools: ["t-test-calculator", "anova-calculator", "chi-square-calculator"],
  sections: [
    {
      heading: "1. 自由度的基本意思",
      content:
        "自由度可以理解為資料中可以自由變動的數量。例如有 5 個數字，而它們的平均數已經固定，實際上只有 4 個數字可以自由變動，最後一個數字會受到平均數限制。"
    },
    {
      heading: "2. 為什麼統計檢定需要自由度？",
      content:
        "不同樣本量會影響統計量的分布，因此在查 t 分布、F 分布或卡方分布時，自由度是重要參數。自由度越大，樣本資訊通常越多，估計也越穩定。"
    },
    {
      heading: "3. 常見自由度例子",
      content:
        "單一樣本變異數的自由度通常是 n - 1；兩組獨立樣本 t 檢定常見自由度是 n1 + n2 - 2；卡方檢定中的自由度通常與分類表的行數和列數有關。"
    },
    {
      heading: "4. 初學者要怎樣理解？",
      content:
        "初學者不需要一開始就背所有自由度公式，更重要是理解自由度代表可用資訊量，以及它會影響統計檢定的臨界值和 p-value。"
    }
  ]
},
{
  id: "effect-size-guide",
  title: "什麼是效果量？",
  englishTitle: "What Is Effect Size?",
  category: "假設檢定",
  difficulty: "中級",
  readingTime: "7 分鐘",
  summary:
    "效果量用來衡量差異或關係的實際大小。相比 p-value 只回答是否顯著，效果量可以幫助我們判斷結果是否具有實際意義。",
  relatedTools: ["t-test-calculator", "correlation-calculator", "anova-calculator"],
  sections: [
    {
      heading: "1. 為什麼需要效果量？",
      content:
        "p-value 會受到樣本量影響。樣本量很大時，即使差異很小也可能顯著；樣本量很小時，即使差異看似明顯也可能不顯著。因此需要效果量輔助判斷結果的重要程度。"
    },
    {
      heading: "2. 常見效果量有哪些？",
      content:
        "常見效果量包括 Cohen's d、Pearson r、Eta squared、Odds ratio 等。不同統計方法對應不同效果量，不能混用。"
    },
    {
      heading: "3. 效果量如何解讀？",
      content:
        "效果量通常會根據研究領域和分析方法解讀。例如 Cohen's d 常被粗略分為小效果、中效果和大效果，但正式研究仍應參考學科慣例。"
    },
    {
      heading: "4. 效果量和統計顯著性的關係",
      content:
        "理想情況下，研究結果應同時報告 p-value 和效果量。p-value 告訴我們結果是否顯著，效果量則告訴我們差異或關係有多大。"
    }
  ]
},
{
  id: "normal-distribution-intro",
  title: "什麼是常態分佈？",
  englishTitle: "What Is a Normal Distribution?",
  category: "機率分佈",
  difficulty: "初學",
  readingTime: "6 分鐘",
  summary:
    "常態分佈是統計學中最常見的分佈之一，呈現鐘形曲線。很多統計方法都假設資料或誤差接近常態分佈，因此理解它非常重要。",
  relatedTools: ["z-score-calculator", "standard-deviation-calculator"],
  sections: [
    {
      heading: "1. 常態分佈的樣子",
      content:
        "常態分佈通常呈現左右對稱的鐘形曲線，中間最高，兩邊逐漸降低。平均數、中位數和眾數在理想常態分佈中會位於同一位置。"
    },
    {
      heading: "2. 為什麼常態分佈重要？",
      content:
        "很多統計方法，例如 t 檢定、ANOVA 和線性回歸，都與常態分佈假設有關。當樣本量足夠大時，根據中心極限定理，樣本平均數也常接近常態分佈。"
    },
    {
      heading: "3. 標準差和常態分佈的關係",
      content:
        "在常態分佈中，大約 68% 的數值會落在平均數正負一個標準差內，大約 95% 會落在正負兩個標準差內。這有助於理解資料的分散程度。"
    },
    {
      heading: "4. 資料一定要完全常態嗎？",
      content:
        "實際資料很少完全符合常態分佈。重點是偏離程度是否嚴重，以及所使用的統計方法對常態假設是否敏感。"
    }
  ]
},
{
  id: "nonparametric-test-intro",
  title: "什麼是非參數檢定？",
  englishTitle: "What Are Nonparametric Tests?",
  category: "統計方法",
  difficulty: "中級",
  readingTime: "7 分鐘",
  summary:
    "非參數檢定通常用於資料不符合常態分佈、樣本量較小，或資料屬於等級尺度時。它不依賴嚴格的分佈假設，是常見的替代分析方法。",
  relatedTools: ["method-selector", "chi-square-calculator"],
  sections: [
    {
      heading: "1. 非參數檢定是什麼？",
      content:
        "非參數檢定是不強烈依賴特定母體分佈假設的統計方法。當資料不適合使用 t 檢定或 ANOVA 時，研究者可能會考慮非參數檢定。"
    },
    {
      heading: "2. 什麼時候會用非參數檢定？",
      content:
        "常見情況包括樣本量很小、資料明顯偏態、資料是排名或等級資料，以及離群值嚴重影響平均數時。"
    },
    {
      heading: "3. 常見非參數方法",
      content:
        "兩組獨立樣本可考慮 Mann-Whitney U test；兩組配對資料可考慮 Wilcoxon signed-rank test；三組或以上可考慮 Kruskal-Wallis test。"
    },
    {
      heading: "4. 非參數檢定一定比較差嗎？",
      content:
        "不是。非參數檢定在某些資料條件下更合適，但如果資料符合參數檢定假設，參數方法通常具有更高檢定力。"
    }
  ]
},
{
  id: "pearson-vs-spearman",
  title: "Pearson 和 Spearman 有什麼不同？",
  englishTitle: "Pearson vs Spearman Correlation",
  category: "相關分析",
  difficulty: "中級",
  readingTime: "6 分鐘",
  summary:
    "Pearson 和 Spearman 都可以用來分析兩個變量之間的關係，但 Pearson 關注線性關係，Spearman 則基於排名，更適合非線性單調關係或等級資料。",
  relatedTools: ["correlation-calculator"],
  sections: [
    {
      heading: "1. Pearson 相關是什麼？",
      content:
        "Pearson 相關係數用來衡量兩個連續變量之間的線性關係。如果兩個變量大致沿直線方向一起增加或減少，Pearson 相關會比較合適。"
    },
    {
      heading: "2. Spearman 相關是什麼？",
      content:
        "Spearman 相關是基於排名的相關係數，不要求資料一定呈線性關係。只要兩個變量呈現單調關係，即一個增加時另一個大致增加或減少，就可以考慮 Spearman。"
    },
    {
      heading: "3. 什麼時候用 Pearson？",
      content:
        "當資料是連續型、關係接近線性、沒有嚴重離群值時，可以優先考慮 Pearson 相關。"
    },
    {
      heading: "4. 什麼時候用 Spearman？",
      content:
        "當資料是等級資料、分佈偏態、存在離群值，或關係不是線性但仍呈單調趨勢時，可以考慮 Spearman 相關。"
    }
  ]
},
{
  id: "linear-regression-intro",
  title: "什麼是線性回歸？",
  englishTitle: "What Is Linear Regression?",
  category: "回歸分析",
  difficulty: "初學",
  readingTime: "7 分鐘",
  summary:
    "線性回歸是一種用來分析自變量與連續型結果變量之間關係的方法。它可以用於解釋、預測和評估變量之間的線性趨勢。",
  relatedTools: ["regression-calculator", "correlation-calculator"],
  sections: [
    {
      heading: "1. 線性回歸的基本概念",
      content:
        "線性回歸嘗試用一條直線描述自變量和結果變量之間的關係。例如用學習時間預測考試分數，或用廣告支出預測銷售額。"
    },
    {
      heading: "2. 迴歸係數代表什麼？",
      content:
        "迴歸係數表示自變量每增加一個單位，結果變量平均會改變多少。例如學習時間每增加一小時，預測分數平均增加 3 分。"
    },
    {
      heading: "3. R² 是什麼？",
      content:
        "R² 表示模型可以解釋結果變量變異的比例。R² 越高，代表模型解釋力通常越強，但不代表模型一定正確，也不代表存在因果關係。"
    },
    {
      heading: "4. 線性回歸要注意什麼？",
      content:
        "使用線性回歸時，需要注意線性關係、離群值、殘差分佈、多重共線性和因果解讀等問題。"
    }
  ]
},
{
  id: "survey-data-analysis-guide",
  title: "問卷資料怎樣做統計分析？",
  englishTitle: "How to Analyze Survey Data?",
  category: "問卷研究",
  difficulty: "中級",
  readingTime: "8 分鐘",
  summary:
    "問卷資料分析不應一開始就直接跑統計檢定，而應先確認研究目的、題目類型、量表設計、信度、描述統計和適合的推論方法。",
  relatedTools: [
    "cronbach-alpha-calculator",
    "t-test-calculator",
    "anova-calculator",
    "chi-square-calculator"
  ],
  sections: [
    {
      heading: "1. 先分清楚題目類型",
      content:
        "問卷題目可能是類別題、單選題、多選題、Likert 量表題或開放式題目。不同題型適合的統計方法不同，因此分析前要先整理變量類型。"
    },
    {
      heading: "2. 先做描述統計",
      content:
        "描述統計包括人數、百分比、平均數、標準差、最小值和最大值。這一步可以幫助研究者理解樣本特徵和資料分佈。"
    },
    {
      heading: "3. 量表題要檢查信度",
      content:
        "如果問卷中有多題共同測量同一個構念，例如滿意度或信任感，通常需要檢查 Cronbach's Alpha，以判斷內部一致性是否可以接受。"
    },
    {
      heading: "4. 根據研究問題選方法",
      content:
        "如果比較兩組平均數，可用 t 檢定；比較三組或以上平均數，可用 ANOVA；分析類別變量關係，可用卡方檢定；分析變量關係，可用相關或回歸。"
    }
  ]
},
{
  id: "spss-output-guide",
  title: "SPSS 裡常見統計結果怎樣看？",
  englishTitle: "How to Read Common SPSS Outputs?",
  category: "統計軟件",
  difficulty: "中級",
  readingTime: "8 分鐘",
  summary:
    "SPSS 輸出表格常讓初學者混亂。閱讀結果時，應先看分析目的，再依次檢查描述統計、檢定統計量、p-value、效果方向和結論寫法。",
  relatedTools: ["t-test-calculator", "anova-calculator", "cronbach-alpha-calculator"],
  sections: [
    {
      heading: "1. 不要只看 Sig.",
      content:
        "SPSS 中的 Sig. 通常代表 p-value。很多初學者只看它是否小於 0.05，但正式解讀還要看平均數、標準差、檢定統計量和實際差異。"
    },
    {
      heading: "2. t 檢定結果怎樣看？",
      content:
        "閱讀 t 檢定結果時，要看兩組平均數、標準差、t 值、自由度和 p-value。如果 p-value 小於顯著水準，通常代表兩組平均數有顯著差異。"
    },
    {
      heading: "3. ANOVA 結果怎樣看？",
      content:
        "ANOVA 主要看 F 值和 p-value。如果結果顯著，只代表至少有兩組之間存在差異，還需要進一步做事後比較，才能知道是哪幾組不同。"
    },
    {
      heading: "4. 信度分析怎樣看？",
      content:
        "Cronbach's Alpha 通常用來判斷量表信度。一般 0.70 以上可接受，但也要檢查每題刪除後 Alpha 的變化，以及題目內容是否合理。"
    }
  ]
},
{
  id: "hypothesis-h0-h1-guide",
  title: "研究假設 H0 和 H1 怎樣寫？",
  englishTitle: "How to Write H0 and H1?",
  category: "研究設計",
  difficulty: "初學",
  readingTime: "7 分鐘",
  summary:
    "H0 是零假設，通常代表沒有差異、沒有關係或沒有效果；H1 是研究假設，通常代表存在差異、關係或效果。正確寫法會影響後續統計方法選擇。",
  relatedTools: ["method-selector", "t-test-calculator", "anova-calculator"],
  sections: [
    {
      heading: "1. H0 是什麼？",
      content:
        "H0 稱為零假設，通常表示沒有差異、沒有關係或沒有效果。例如兩組學生的平均分沒有顯著差異。"
    },
    {
      heading: "2. H1 是什麼？",
      content:
        "H1 稱為研究假設或對立假設，通常表示存在差異、存在關係或存在效果。例如兩組學生的平均分存在顯著差異。"
    },
    {
      heading: "3. 雙尾和單尾假設",
      content:
        "如果只說兩組有差異，不指定方向，通常是雙尾假設；如果明確預期 A 組高於 B 組，則是單尾假設。但單尾檢定需要有充分理論支持。"
    },
    {
      heading: "4. 假設要對應統計方法",
      content:
        "如果假設是比較兩組平均數，可用 t 檢定；如果比較三組或以上平均數，可用 ANOVA；如果分析兩個類別變量的關係，可用卡方檢定。"
    }
  ]
}
  
];