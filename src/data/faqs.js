export const faqs = [
  {
    id: "p-value-meaning",
    question: "p-value 小於 0.05 代表什麼？",
    category: "假設檢定",
    difficulty: "初學",
    answer:
      "p-value 小於 0.05 通常代表在零假設成立的情況下，觀察到目前結果或更極端結果的機率低於 5%。因此研究者通常會拒絕零假設，認為結果具有統計顯著性。不過，p-value 並不代表研究假設一定正確，也不代表效果一定很大。",
    commonMistake:
      "很多人會誤以為 p-value 小於 0.05 就代表結果一定重要，但它只代表統計上顯著，仍然要配合效果量、樣本量和研究背景判斷。",
    relatedArticle: "what-is-p-value",
    relatedTool: "t-test-calculator"
  },
  {
    id: "standard-deviation-meaning",
    question: "標準差越大代表什麼？",
    category: "描述統計",
    difficulty: "初學",
    answer:
      "標準差越大，代表資料分散程度越高，也就是數值之間差異較大。標準差越小，代表資料較集中，數值較接近平均值。例如兩班學生平均分一樣，但其中一班標準差較大，表示該班學生分數差距較明顯。",
    commonMistake:
      "不要只看平均數而忽略標準差。平均數一樣的兩組資料，實際分布可能完全不同。",
    relatedArticle: "standard-deviation-explained",
    relatedTool: "standard-deviation-calculator"
  },
  {
    id: "t-test-vs-anova",
    question: "t 檢定和 ANOVA 有什麼分別？",
    category: "組間比較",
    difficulty: "初學",
    answer:
      "t 檢定主要用於比較兩組平均數是否有顯著差異，而 ANOVA 主要用於比較三組或以上平均數是否有顯著差異。例如比較男生和女生的平均分，可以用 t 檢定；比較三種教學方法的平均分，則較適合用 ANOVA。",
    commonMistake:
      "三組或以上資料不應重複做多次 t 檢定，因為會增加第一類錯誤的機率，應優先考慮 ANOVA。",
    relatedArticle: "t-test-vs-anova",
    relatedTool: "anova-calculator"
  },
  {
    id: "cronbach-alpha-level",
    question: "Cronbach's Alpha 要多少才可以接受？",
    category: "問卷信度",
    difficulty: "中級",
    answer:
      "Cronbach's Alpha 常用於檢查問卷量表的內部一致性。一般來說，0.70 以上通常被視為可以接受，0.80 以上較好，0.90 以上則代表非常高。不過，Alpha 太高也可能代表題目過於重複。",
    commonMistake:
      "Alpha 高不代表問卷一定有效。它只反映內部一致性，不能直接證明量表一定測量到正確概念。",
    relatedArticle: "cronbach-alpha-guide",
    relatedTool: "cronbach-alpha-calculator"
  },
  {
    id: "sample-size-bigger-better",
    question: "樣本量越大越好嗎？",
    category: "研究設計",
    difficulty: "初學",
    answer:
      "樣本量較大通常可以提高估計穩定性和檢定力，但不代表越大越好。過大的樣本可能讓很小、實際意義不大的差異也變成統計顯著。因此樣本量應根據研究目的、效果大小、顯著水準和檢定力進行估算。",
    commonMistake:
      "不要只追求大樣本，也要關心樣本是否具代表性。如果抽樣方式有偏差，樣本再大也可能得出錯誤結論。",
    relatedArticle: "sample-size-estimation",
    relatedTool: "sample-size-calculator"
  },
  {
    id: "chi-square-when-use",
    question: "什麼時候用卡方檢定？",
    category: "類別資料",
    difficulty: "初學",
    answer:
      "卡方檢定常用於分析類別變數之間是否存在關聯。例如研究性別與是否購買某產品之間是否有關係，或不同年齡組別對某政策的支持比例是否不同，都可以考慮使用卡方檢定。",
    commonMistake:
      "卡方檢定適合類別資料，不適合直接比較連續型平均數。如果要比較平均數，應考慮 t 檢定或 ANOVA。",
    relatedArticle: "when-to-use-chi-square",
    relatedTool: "chi-square-calculator"
  },
  {
    id: "ab-testing-duration",
    question: "A/B Testing 要測多久？",
    category: "商業分析",
    difficulty: "中級",
    answer:
      "A/B Testing 的時間不應只看天數，而要看樣本量、轉化率、預期效果大小和流量穩定性。測試時間太短可能受偶然波動影響，時間太長則可能受到市場環境變化干擾。通常應先估算所需樣本量，再決定測試週期。",
    commonMistake:
      "不要看到某一天 A 組比 B 組好就立即停止測試。過早停止測試容易導致錯誤判斷。",
    relatedArticle: "ab-testing-result",
    relatedTool: "ab-test-calculator"
  },
  {
    id: "logistic-vs-linear-regression",
    question: "Logistic 回歸和線性回歸有什麼不同？",
    category: "回歸分析",
    difficulty: "中級",
    answer:
      "線性回歸通常用於預測連續型結果，例如收入、分數或銷售額。Logistic 回歸則常用於預測二元結果，例如是否購買、是否流失、是否通過。當結果變數只有兩種狀態時，Logistic 回歸通常比線性回歸更合適。",
    commonMistake:
      "不要用線性回歸直接處理只有 0 和 1 的結果變數，因為預測值可能超出 0 到 1 的合理範圍。",
    relatedArticle: "logistic-regression-intro",
    relatedTool: "logistic-regression-helper"
  },
  {
    id: "confidence-level-95",
    question: "信心水平 95% 是什麼意思？",
    category: "置信區間",
    difficulty: "初學",
    answer:
      "95% 信心水平表示如果用同樣方法重複抽樣很多次，約有 95% 的置信區間會包含真正的母體參數。它不是指某一次計算出的區間有 95% 機率包含真值，而是指方法在長期重複使用下的可靠程度。",
    commonMistake:
      "不要把 95% 信心水平解讀成『真值有 95% 機率在這個區間內』，這是常見但不嚴謹的說法。",
    relatedArticle: "sample-size-estimation",
    relatedTool: "confidence-interval-calculator"
  },
  {
    id: "correlation-not-causation",
    question: "相關不等於因果是什麼意思？",
    category: "相關分析",
    difficulty: "初學",
    answer:
      "相關代表兩個變數之間存在某種共同變化趨勢，但不代表其中一個一定導致另一個。例如冰淇淋銷量和中暑人數可能同時上升，但真正原因可能是天氣炎熱，而不是冰淇淋導致中暑。",
    commonMistake:
      "看到兩個變數有高度相關時，不應立即下因果結論。要證明因果關係，通常需要更嚴謹的研究設計，例如實驗、控制變項或縱向資料。",
    relatedArticle: "standard-deviation-explained",
    relatedTool: "correlation-calculator"
  },
  {
    id: "p-value-meaning",
    question: "p-value 小於 0.05 代表什麼？",
    category: "假設檢定",
    difficulty: "初學",
    answer:
      "p-value 小於 0.05 通常代表在零假設成立的情況下，觀察到目前結果或更極端結果的機率低於 5%。因此研究者通常會拒絕零假設，認為結果具有統計顯著性。不過，p-value 並不代表研究假設一定正確，也不代表效果一定很大。",
    commonMistake:
      "很多人會誤以為 p-value 小於 0.05 就代表結果一定重要，但它只代表統計上顯著，仍然要配合效果量、樣本量和研究背景判斷。",
    relatedArticle: "what-is-p-value",
    relatedTool: "t-test-calculator"
  },
  {
    id: "standard-deviation-meaning",
    question: "標準差越大代表什麼？",
    category: "描述統計",
    difficulty: "初學",
    answer:
      "標準差越大，代表資料分散程度越高，也就是數值之間差異較大。標準差越小，代表資料較集中，數值較接近平均值。例如兩班學生平均分一樣，但其中一班標準差較大，表示該班學生分數差距較明顯。",
    commonMistake:
      "不要只看平均數而忽略標準差。平均數一樣的兩組資料，實際分布可能完全不同。",
    relatedArticle: "standard-deviation-explained",
    relatedTool: "standard-deviation-calculator"
  },
  {
    id: "t-test-vs-anova",
    question: "t 檢定和 ANOVA 有什麼分別？",
    category: "組間比較",
    difficulty: "初學",
    answer:
      "t 檢定主要用於比較兩組平均數是否有顯著差異，而 ANOVA 主要用於比較三組或以上平均數是否有顯著差異。例如比較男生和女生的平均分，可以用 t 檢定；比較三種教學方法的平均分，則較適合用 ANOVA。",
    commonMistake:
      "三組或以上資料不應重複做多次 t 檢定，因為會增加第一類錯誤的機率，應優先考慮 ANOVA。",
    relatedArticle: "t-test-vs-anova",
    relatedTool: "anova-calculator"
  },
  {
    id: "cronbach-alpha-level",
    question: "Cronbach's Alpha 要多少才可以接受？",
    category: "問卷信度",
    difficulty: "中級",
    answer:
      "Cronbach's Alpha 常用於檢查問卷量表的內部一致性。一般來說，0.70 以上通常被視為可以接受，0.80 以上較好，0.90 以上則代表非常高。不過，Alpha 太高也可能代表題目過於重複。",
    commonMistake:
      "Alpha 高不代表問卷一定有效。它只反映內部一致性，不能直接證明量表一定測量到正確概念。",
    relatedArticle: "cronbach-alpha-guide",
    relatedTool: "cronbach-alpha-calculator"
  },
  {
    id: "sample-size-bigger-better",
    question: "樣本量越大越好嗎？",
    category: "研究設計",
    difficulty: "初學",
    answer:
      "樣本量較大通常可以提高估計穩定性和檢定力，但不代表越大越好。過大的樣本可能讓很小、實際意義不大的差異也變成統計顯著。因此樣本量應根據研究目的、效果大小、顯著水準和檢定力進行估算。",
    commonMistake:
      "不要只追求大樣本，也要關心樣本是否具代表性。如果抽樣方式有偏差，樣本再大也可能得出錯誤結論。",
    relatedArticle: "sample-size-estimation",
    relatedTool: "sample-size-calculator"
  },
  {
    id: "chi-square-when-use",
    question: "什麼時候用卡方檢定？",
    category: "類別資料",
    difficulty: "初學",
    answer:
      "卡方檢定常用於分析類別變數之間是否存在關聯。例如研究性別與是否購買某產品之間是否有關係，或不同年齡組別對某政策的支持比例是否不同，都可以考慮使用卡方檢定。",
    commonMistake:
      "卡方檢定適合類別資料，不適合直接比較連續型平均數。如果要比較平均數，應考慮 t 檢定或 ANOVA。",
    relatedArticle: "when-to-use-chi-square",
    relatedTool: "chi-square-calculator"
  },
  {
    id: "ab-testing-duration",
    question: "A/B Testing 要測多久？",
    category: "商業分析",
    difficulty: "中級",
    answer:
      "A/B Testing 的時間不應只看天數，而要看樣本量、轉化率、預期效果大小和流量穩定性。測試時間太短可能受偶然波動影響，時間太長則可能受到市場環境變化干擾。通常應先估算所需樣本量，再決定測試週期。",
    commonMistake:
      "不要看到某一天 A 組比 B 組好就立即停止測試。過早停止測試容易導致錯誤判斷。",
    relatedArticle: "ab-testing-result",
    relatedTool: "ab-test-calculator"
  },
  {
    id: "logistic-vs-linear-regression",
    question: "Logistic 回歸和線性回歸有什麼不同？",
    category: "回歸分析",
    difficulty: "中級",
    answer:
      "線性回歸通常用於預測連續型結果，例如收入、分數或銷售額。Logistic 回歸則常用於預測二元結果，例如是否購買、是否流失、是否通過。當結果變數只有兩種狀態時，Logistic 回歸通常比線性回歸更合適。",
    commonMistake:
      "不要用線性回歸直接處理只有 0 和 1 的結果變數，因為預測值可能超出 0 到 1 的合理範圍。",
    relatedArticle: "logistic-regression-intro",
    relatedTool: "logistic-regression-helper"
  },
  {
    id: "confidence-level-95",
    question: "信心水平 95% 是什麼意思？",
    category: "置信區間",
    difficulty: "初學",
    answer:
      "95% 信心水平表示如果用同樣方法重複抽樣很多次，約有 95% 的置信區間會包含真正的母體參數。它不是指某一次計算出的區間有 95% 機率包含真值，而是指方法在長期重複使用下的可靠程度。",
    commonMistake:
      "不要把 95% 信心水平解讀成『真值有 95% 機率在這個區間內』，這是常見但不嚴謹的說法。",
    relatedArticle: "confidence-interval-intro",
    relatedTool: "confidence-interval-calculator"
  },
  {
    id: "correlation-not-causation",
    question: "相關不等於因果是什麼意思？",
    category: "相關分析",
    difficulty: "初學",
    answer:
      "相關代表兩個變數之間存在某種共同變化趨勢，但不代表其中一個一定導致另一個。例如冰淇淋銷量和中暑人數可能同時上升，但真正原因可能是天氣炎熱，而不是冰淇淋導致中暑。",
    commonMistake:
      "看到兩個變數有高度相關時，不應立即下因果結論。要證明因果關係，通常需要更嚴謹的研究設計，例如實驗、控制變項或縱向資料。",
    relatedArticle: "pearson-vs-spearman",
    relatedTool: "correlation-calculator"
  },
  {
    id: "effect-size-meaning",
    question: "效果量和 p-value 有什麼不同？",
    category: "假設檢定",
    difficulty: "中級",
    answer:
      "p-value 主要用來判斷結果是否具有統計顯著性，而效果量則用來判斷差異或關係的實際大小。簡單來說，p-value 回答『有沒有顯著』，效果量回答『有多大』。",
    commonMistake:
      "不要只報告 p-value 而完全不看效果量。樣本量很大時，即使很小的差異也可能顯著，但實際意義可能有限。",
    relatedArticle: "effect-size-guide",
    relatedTool: "t-test-calculator"
  },
  {
    id: "normal-distribution-meaning",
    question: "資料一定要符合常態分佈才可以做 t 檢定嗎？",
    category: "機率分佈",
    difficulty: "中級",
    answer:
      "t 檢定與常態分佈假設有關，但實務上不一定要求資料完全常態。當樣本量足夠大、資料沒有嚴重偏態或極端離群值時，t 檢定通常仍具有一定穩健性。",
    commonMistake:
      "不要看到資料不是完美鐘形就立即放棄所有參數檢定。應該同時考慮樣本量、偏態程度、離群值和研究目的。",
    relatedArticle: "normal-distribution-intro",
    relatedTool: "z-score-calculator"
  },
  {
    id: "nonparametric-test-when-use",
    question: "什麼時候應該用非參數檢定？",
    category: "統計方法",
    difficulty: "中級",
    answer:
      "當資料明顯不符合常態分佈、樣本量較小、資料屬於等級尺度，或離群值嚴重影響平均數時，可以考慮非參數檢定。常見例子包括 Mann-Whitney U test、Wilcoxon signed-rank test 和 Kruskal-Wallis test。",
    commonMistake:
      "非參數檢定不是比較低級的方法，而是在某些資料條件下更合適的替代方法。但如果資料符合參數方法假設，參數檢定通常具有更高檢定力。",
    relatedArticle: "nonparametric-test-intro",
    relatedTool: "method-selector"
  },
  {
    id: "pearson-spearman-difference",
    question: "Pearson 和 Spearman 相關應該怎樣選？",
    category: "相關分析",
    difficulty: "中級",
    answer:
      "Pearson 相關主要用於連續型資料和線性關係；Spearman 相關則基於排名，適合等級資料、偏態資料、存在離群值，或兩個變量呈現單調但不一定線性的關係。",
    commonMistake:
      "不要所有相關分析都直接用 Pearson。若資料有明顯偏態、離群值或本身是排名資料，Spearman 可能更合適。",
    relatedArticle: "pearson-vs-spearman",
    relatedTool: "correlation-calculator"
  },
  {
    id: "survey-analysis-steps",
    question: "問卷資料分析應該先做什麼？",
    category: "問卷研究",
    difficulty: "中級",
    answer:
      "問卷資料分析應先整理題目類型和變量類型，再做描述統計。如果是多題量表，應檢查 Cronbach's Alpha。之後才根據研究假設選擇 t 檢定、ANOVA、卡方檢定、相關或回歸等方法。",
    commonMistake:
      "不要一開始就直接跑統計檢定。若沒有先釐清題目類型、資料尺度和研究假設，很容易選錯方法。",
    relatedArticle: "survey-data-analysis-guide",
    relatedTool: "cronbach-alpha-calculator"
  },
  {
    id: "h0-h1-how-to-write",
    question: "H0 和 H1 應該怎樣寫？",
    category: "研究設計",
    difficulty: "初學",
    answer:
      "H0 是零假設，通常表示沒有差異、沒有關係或沒有效果；H1 是研究假設或對立假設，通常表示存在差異、存在關係或存在效果。假設寫法應該對應研究問題和統計方法。",
    commonMistake:
      "不要把 H0 和 H1 寫成模糊的研究目標。它們應該能夠被資料和統計方法檢驗。",
    relatedArticle: "hypothesis-h0-h1-guide",
    relatedTool: "method-selector"
  }
];