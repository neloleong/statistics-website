export const learningPaths = [
  {
    id: "beginner",
    title: "零基礎入門路線",
    targetUser: "完全沒有統計基礎的初學者",
    goal: "理解統計學最核心的概念，能看懂基本數據和圖表。",
    estimatedTime: "2 至 4 星期",
    level: "入門",
    steps: [
      {
        order: 1,
        title: "理解數據是什麼",
        topics: ["變量", "樣本", "母體", "數據類型"]
      },
      {
        order: 2,
        title: "學習描述統計",
        topics: ["平均數", "中位數", "眾數", "方差", "標準差"]
      },
      {
        order: 3,
        title: "學習基礎圖表",
        topics: ["柱狀圖", "折線圖", "直方圖", "箱形圖"]
      },
      {
        order: 4,
        title: "理解機率基礎",
        topics: ["基本概率", "條件概率", "常見分佈"]
      },
      {
        order: 5,
        title: "初步理解假設檢定",
        topics: ["虛無假設", "p-value", "顯著性水平"]
      }
    ]
  },
  {
    id: "student-exam",
    title: "大學生考試路線",
    targetUser: "正在修讀統計學、商科、心理學、教育或社會科學的學生",
    goal: "掌握考試和作業中最常見的統計方法。",
    estimatedTime: "4 至 8 星期",
    level: "入門至中階",
    steps: [
      {
        order: 1,
        title: "描述統計與機率分佈",
        topics: ["平均數", "標準差", "正態分佈", "z-score"]
      },
      {
        order: 2,
        title: "推論統計",
        topics: ["抽樣分佈", "標準誤", "置信區間"]
      },
      {
        order: 3,
        title: "假設檢定",
        topics: ["單樣本 t 檢定", "獨立樣本 t 檢定", "配對樣本 t 檢定"]
      },
      {
        order: 4,
        title: "進階檢定",
        topics: ["卡方檢定", "ANOVA", "非參數檢定"]
      },
      {
        order: 5,
        title: "相關與回歸",
        topics: ["Pearson 相關", "簡單線性回歸", "R²"]
      }
    ]
  },
  {
    id: "research-paper",
    title: "論文研究路線",
    targetUser: "需要寫論文、研究報告或處理問卷數據的人",
    goal: "能根據研究問題選擇統計方法，並正確解釋分析結果。",
    estimatedTime: "6 至 12 星期",
    level: "中階",
    steps: [
      {
        order: 1,
        title: "研究設計與變量定義",
        topics: ["自變量", "因變量", "控制變量", "研究假設"]
      },
      {
        order: 2,
        title: "問卷與信效度",
        topics: ["信度", "效度", "Cronbach's Alpha", "因素分析"]
      },
      {
        order: 3,
        title: "選擇合適統計方法",
        topics: ["t-test", "ANOVA", "卡方檢定", "相關分析"]
      },
      {
        order: 4,
        title: "建立模型",
        topics: ["線性回歸", "Logistic 回歸", "中介效應", "調節效應"]
      },
      {
        order: 5,
        title: "結果表達",
        topics: ["p-value 解釋", "效應量", "表格呈現", "論文寫法"]
      }
    ]
  },
  {
    id: "business-analysis",
    title: "商業數據分析路線",
    targetUser: "需要做市場分析、營運分析、客戶分析或 A/B 測試的人",
    goal: "用統計方法支持商業決策。",
    estimatedTime: "4 至 10 星期",
    level: "中階",
    steps: [
      {
        order: 1,
        title: "商業數據理解",
        topics: ["銷售額", "客單價", "轉化率", "留存率"]
      },
      {
        order: 2,
        title: "描述統計與視覺化",
        topics: ["平均數", "標準差", "趨勢圖", "分佈圖"]
      },
      {
        order: 3,
        title: "A/B Testing",
        topics: ["樣本量", "轉化率比較", "顯著性檢定"]
      },
      {
        order: 4,
        title: "客戶行為分析",
        topics: ["分群", "相關分析", "回歸分析"]
      },
      {
        order: 5,
        title: "預測與決策",
        topics: ["線性回歸", "時間序列", "預測誤差"]
      }
    ]
  }
];