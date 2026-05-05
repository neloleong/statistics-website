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
  }
];