import { useEffect, useState } from "react";
import {
  Calculator,
  FlaskConical,
  FunctionSquare,
  Map,
  Search,
  BookOpen,
  GraduationCap,
  FileText,
  TrendingUp,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Compass,
  Lightbulb,
  LineChart,
  Users,
  HelpCircle
} from "lucide-react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionTitle from "./components/SectionTitle";

import KnowledgeMapPage from "./pages/KnowledgeMapPage";
import TopicDetailPage from "./pages/TopicDetailPage";
import FormulaLibraryPage from "./pages/FormulaLibraryPage";
import MethodSelectorPage from "./pages/MethodSelectorPage";
import CalculatorPage from "./pages/CalculatorPage";
import ChartToolPage from "./pages/ChartToolPage";
import CaseLibraryPage from "./pages/CaseLibraryPage";
import GlossaryPage from "./pages/GlossaryPage";
import LearningPathPage from "./pages/LearningPathPage";
import ArticleLibraryPage from "./pages/ArticleLibraryPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import FAQPage from "./pages/FAQPage";

import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import DisclaimerPage from "./pages/DisclaimerPage";

const validPages = [
  "home",
  "map",
  "topic-detail",
  "formulas",
  "methods",
  "calculators",
  "chart",
  "cases",
  "glossary",
  "path",
  "articles",
  "article",
  "faq",
  "about",
  "contact",
  "privacy",
  "disclaimer"
];

function parseHash() {
  const hash = window.location.hash.replace("#", "").trim();

  if (!hash) {
    return {
      page: "home",
      param: null
    };
  }

  const parts = hash.split("/").filter(Boolean);
  const page = parts[0];
  const param = parts[1] || null;

  if (validPages.includes(page)) {
    return {
      page,
      param
    };
  }

  return {
    page: "home",
    param: null
  };
}

function App() {
  const initialRoute = parseHash();

  const [currentPage, setCurrentPage] = useState(initialRoute.page);
  const [routeParam, setRouteParam] = useState(initialRoute.param);
  const [selectedTopic, setSelectedTopic] = useState(null);

  useEffect(() => {
    function handleHashChange() {
      const nextRoute = parseHash();

      setCurrentPage(nextRoute.page);
      setRouteParam(nextRoute.param);

      if (nextRoute.page !== "topic-detail") {
        setSelectedTopic(null);
      }
    }

    window.addEventListener("hashchange", handleHashChange);

    if (!window.location.hash) {
      window.location.hash = "home";
    }

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  function navigate(pageId, param = null) {
    if (!validPages.includes(pageId)) {
      window.location.hash = "home";
      setCurrentPage("home");
      setRouteParam(null);
      setSelectedTopic(null);
      return;
    }

    const nextHash = param ? `${pageId}/${param}` : pageId;

    window.location.hash = nextHash;
    setCurrentPage(pageId);
    setRouteParam(param);

    if (pageId !== "topic-detail") {
      setSelectedTopic(null);
    }
  }

  function openTopicDetail(topic) {
    setSelectedTopic(topic);
    setRouteParam(null);
    window.location.hash = "topic-detail";
    setCurrentPage("topic-detail");
  }

  function backToKnowledgeMap() {
    window.location.hash = "map";
    setCurrentPage("map");
    setRouteParam(null);
  }

  const pageMap = {
    home: <HomePage navigate={navigate} />,

    map: <KnowledgeMapPage onOpenTopic={openTopicDetail} />,

    "topic-detail": (
      <TopicDetailPage topic={selectedTopic} onBack={backToKnowledgeMap} />
    ),

    formulas: <FormulaLibraryPage />,

    methods: <MethodSelectorPage navigate={navigate} />,

    calculators: (
      <CalculatorPage navigate={navigate} initialCalculatorId={routeParam} />
    ),

    chart: <ChartToolPage />,

    cases: <CaseLibraryPage />,

    glossary: <GlossaryPage />,

    path: <LearningPathPage />,

    articles: <ArticleLibraryPage navigate={navigate} />,

    article: <ArticleDetailPage articleId={routeParam} navigate={navigate} />,

    faq: <FAQPage navigate={navigate} />,

    about: <AboutPage />,

    contact: <ContactPage />,

    privacy: <PrivacyPage />,

    disclaimer: <DisclaimerPage />
  };

  return (
    <div className="app">
      <Header currentPage={currentPage} navigate={navigate} />

      <main>{pageMap[currentPage] || pageMap.home}</main>

      <Footer navigate={navigate} />
    </div>
  );
}

function HomePage({ navigate }) {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">
            Statistics Learning & Analysis Platform
          </span>

          <h1>統計學全景知識與分析平台</h1>

          <p>
            從統計概念、公式查詢、方法選擇、計算器、圖表工具到案例文章，
            幫助初學者、論文研究者及商業分析使用者，更快理解並應用統計學。
          </p>

          <div className="hero-actions">
            <button
              className="primary-btn"
              type="button"
              onClick={() => navigate("methods")}
            >
              不知道用什麼方法？立即選擇
              <ArrowRight size={16} />
            </button>

            <button
              className="secondary-btn"
              type="button"
              onClick={() => navigate("calculators")}
            >
              直接使用統計計算器
            </button>

            <button
              className="ghost-btn"
              type="button"
              onClick={() => navigate("articles")}
            >
              閱讀統計教學文章
            </button>
          </div>
        </div>

        <div className="hero-panel">
          <div className="panel-header">
            <Search size={18} />
            <span>你想解決什麼問題？</span>
          </div>

          <div className="quick-grid">
            <button type="button" onClick={() => navigate("methods")}>
              我不知道應該用哪個統計方法
            </button>

            <button type="button" onClick={() => navigate("calculators")}>
              我想直接計算 t 檢定、ANOVA、信度或樣本量
            </button>

            <button type="button" onClick={() => navigate("formulas")}>
              我想查統計公式和符號意思
            </button>

            <button type="button" onClick={() => navigate("articles")}>
              我想用文章方式理解 p-value、標準差、卡方檢定
            </button>

            <button type="button" onClick={() => navigate("faq")}>
              我想快速查看常見統計問題 FAQ
            </button>

            <button type="button" onClick={() => navigate("path")}>
              我想按學習路線逐步學統計
            </button>
          </div>
        </div>
      </section>

      <section className="content-section">
        <SectionTitle
          eyebrow="For Different Users"
          title="根據你的使用場景快速進入"
          description="不同使用者需要的統計工具不同。你可以先根據自己的目的選擇入口，再進入對應功能。"
        />

        <div className="three-column-grid">
          <UserPathCard
            icon={GraduationCap}
            title="統計初學者"
            text="適合先理解平均數、標準差、p-value、置信區間、假設檢定等基礎概念。"
            actions={[
              { label: "查看學習路線", page: "path" },
              { label: "閱讀統計文章", page: "articles" },
              { label: "查看 FAQ", page: "faq" },
              { label: "查詞彙表", page: "glossary" }
            ]}
            navigate={navigate}
          />

          <UserPathCard
            icon={FileText}
            title="論文 / 問卷研究者"
            text="適合處理問卷信度、樣本量估算、t 檢定、ANOVA、卡方檢定及方法選擇。"
            actions={[
              { label: "方法選擇器", page: "methods" },
              {
                label: "Cronbach's Alpha",
                page: "calculators",
                param: "cronbach-alpha-calculator"
              },
              {
                label: "樣本量計算",
                page: "calculators",
                param: "sample-size-calculator"
              }
            ]}
            navigate={navigate}
          />

          <UserPathCard
            icon={TrendingUp}
            title="商業分析 / A/B Testing"
            text="適合分析轉化率、相關關係、回歸預測、A/B Testing 和商業數據初步判斷。"
            actions={[
              {
                label: "A/B Testing 計算",
                page: "calculators",
                param: "ab-test-calculator"
              },
              {
                label: "相關係數計算",
                page: "calculators",
                param: "correlation-calculator"
              },
              {
                label: "Logistic 回歸",
                page: "calculators",
                param: "logistic-regression-helper"
              }
            ]}
            navigate={navigate}
          />
        </div>
      </section>

      <section className="content-section">
        <SectionTitle
          eyebrow="Core Modules"
          title="網站核心功能"
          description="本站將統計學常用內容分成知識、公式、方法、工具、文章、案例和學習路線，方便你按需要使用。"
        />

        <div className="feature-grid">
          <FeatureCard
            icon={Map}
            title="統計知識地圖"
            text="用分類方式整理統計學核心內容，支援搜尋與主題詳情，適合建立整體知識框架。"
            onClick={() => navigate("map")}
          />

          <FeatureCard
            icon={FunctionSquare}
            title="公式庫"
            text="集中整理常用統計公式、符號說明、使用場景與注意事項，方便快速查閱。"
            onClick={() => navigate("formulas")}
          />

          <FeatureCard
            icon={FlaskConical}
            title="方法選擇器"
            text="根據研究目的、數據類型、樣本關係和分佈情況，推薦合適的統計方法。"
            onClick={() => navigate("methods")}
          />

          <FeatureCard
            icon={Calculator}
            title="統計計算器"
            text="包含平均數、標準差、相關係數、回歸、t 檢定、ANOVA、卡方、信度及樣本量工具。"
            onClick={() => navigate("calculators")}
          />

          <FeatureCard
            icon={BookOpen}
            title="統計教學文章"
            text="用文章方式解釋 p-value、標準差、t 檢定、ANOVA、卡方和 Cronbach's Alpha。"
            onClick={() => navigate("articles")}
          />

          <FeatureCard
            icon={HelpCircle}
            title="統計 FAQ"
            text="整理最常見的統計問題，包括 p-value、標準差、信心水平、樣本量和相關不等於因果。"
            onClick={() => navigate("faq")}
          />

          <FeatureCard
            icon={BarChart3}
            title="圖表工具"
            text="協助理解資料視覺化方式，之後可逐步加入更多互動圖表和資料上傳功能。"
            onClick={() => navigate("chart")}
          />

          <FeatureCard
            icon={Lightbulb}
            title="案例庫"
            text="用實際情境理解不同統計方法如何應用，避免只會公式、不會判斷場景。"
            onClick={() => navigate("cases")}
          />

          <FeatureCard
            icon={Compass}
            title="學習路線"
            text="按入門、基礎、進階和應用分析整理學習順序，適合系統化學習。"
            onClick={() => navigate("path")}
          />
        </div>
      </section>

      <section className="content-section">
        <SectionTitle
          eyebrow="Popular Tools"
          title="熱門統計工具"
          description="以下工具是學習、問卷研究、論文分析和商業測試中最常用的統計入口。"
        />

        <div className="four-column-grid">
          <QuickToolCard
            icon={Calculator}
            title="t 檢定"
            text="比較兩組平均數差異。"
            onClick={() => navigate("calculators", "t-test-calculator")}
          />

          <QuickToolCard
            icon={FlaskConical}
            title="ANOVA"
            text="比較三組或以上平均數。"
            onClick={() => navigate("calculators", "anova-calculator")}
          />

          <QuickToolCard
            icon={CheckCircle2}
            title="Cronbach's Alpha"
            text="檢查問卷量表信度。"
            onClick={() =>
              navigate("calculators", "cronbach-alpha-calculator")
            }
          />

          <QuickToolCard
            icon={Users}
            title="樣本量估算"
            text="估算問卷或研究所需樣本數。"
            onClick={() => navigate("calculators", "sample-size-calculator")}
          />

          <QuickToolCard
            icon={TrendingUp}
            title="A/B Testing"
            text="比較兩個版本的轉化率。"
            onClick={() => navigate("calculators", "ab-test-calculator")}
          />

          <QuickToolCard
            icon={LineChart}
            title="相關係數"
            text="分析兩個變量的關係強度。"
            onClick={() => navigate("calculators", "correlation-calculator")}
          />

          <QuickToolCard
            icon={FunctionSquare}
            title="線性回歸"
            text="建立簡單預測模型。"
            onClick={() => navigate("calculators", "regression-calculator")}
          />

          <QuickToolCard
            icon={BarChart3}
            title="卡方檢定"
            text="分析類別變量之間的關聯。"
            onClick={() => navigate("calculators", "chi-square-calculator")}
          />
        </div>
      </section>

      <section className="content-section">
        <SectionTitle
          eyebrow="Recommended Articles"
          title="推薦先讀文章"
          description="如果你正在做統計作業、問卷分析或商業數據判斷，可以先從以下文章開始。"
        />

        <div className="case-grid">
          <ArticlePreviewCard
            title="什麼是 p-value？"
            text="理解統計顯著性最常見、也最容易被誤解的概念。"
            onClick={() => navigate("article", "what-is-p-value")}
          />

          <ArticlePreviewCard
            title="t 檢定和 ANOVA 有什麼分別？"
            text="了解兩組平均數比較與三組以上平均數比較的差異。"
            onClick={() => navigate("article", "t-test-vs-anova")}
          />

          <ArticlePreviewCard
            title="Cronbach's Alpha 怎樣解讀？"
            text="問卷信度分析常用指標，適合量表研究者優先閱讀。"
            onClick={() => navigate("article", "cronbach-alpha-guide")}
          />

          <ArticlePreviewCard
            title="A/B Testing 怎樣判斷結果？"
            text="了解轉化率、樣本量、顯著性與商業價值之間的關係。"
            onClick={() => navigate("article", "ab-testing-result")}
          />
        </div>
      </section>

      <section className="content-section">
        <SectionTitle
          eyebrow="FAQ Highlights"
          title="常見統計問題快速入口"
          description="如果你不想先讀長文章，可以先從 FAQ 快速理解最常見的統計問題。"
        />

        <div className="three-column-grid">
          <SmallValueCard
            icon={HelpCircle}
            title="p-value 小於 0.05 代表什麼？"
            text="快速理解統計顯著性、零假設，以及為什麼 p-value 不等於效果大小。"
          />

          <SmallValueCard
            icon={HelpCircle}
            title="樣本量越大越好嗎？"
            text="理解樣本量、代表性、檢定力和實際研究意義之間的關係。"
          />

          <SmallValueCard
            icon={HelpCircle}
            title="相關不等於因果"
            text="避免把相關係數直接解讀成因果關係，學會更嚴謹地看待數據。"
          />
        </div>

        <div className="section-action-row">
          <button
            type="button"
            className="btn-primary"
            onClick={() => navigate("faq")}
          >
            查看全部 FAQ
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <section className="content-section">
        <SectionTitle
          eyebrow="Why StatMap"
          title="為什麼使用 MTS' StatMap？"
          description="本站不是只列公式，而是把統計概念、方法選擇、計算工具和解讀說明連在一起。"
        />

        <div className="three-column-grid">
          <SmallValueCard
            icon={Compass}
            title="先判斷方法，再做計算"
            text="避免一開始就套公式，先根據研究目的和資料類型確認應使用的統計方法。"
          />

          <SmallValueCard
            icon={Calculator}
            title="工具連接教學說明"
            text="每個計算器不只輸出結果，也會說明適用情況、輸入格式、常見錯誤和正式研究注意事項。"
          />

          <SmallValueCard
            icon={BookOpen}
            title="文章幫助理解概念"
            text="把常見統計概念用文章方式解釋，適合初學者和需要快速回顧的人使用。"
          />
        </div>
      </section>
    </>
  );
}

function FeatureCard({ icon: Icon, title, text, onClick }) {
  return (
    <button className="feature-card" type="button" onClick={onClick}>
      <div className="card-icon">
        <Icon size={24} />
      </div>

      <h3>{title}</h3>
      <p>{text}</p>
    </button>
  );
}

function UserPathCard({ icon: Icon, title, text, actions, navigate }) {
  return (
    <article className="path-card">
      <div className="card-icon">
        <Icon size={24} />
      </div>

      <h3>{title}</h3>
      <p>{text}</p>

      <div className="tag-list">
        {actions.map((action) => (
          <button
            key={action.label}
            type="button"
            className="text-button"
            onClick={() => navigate(action.page, action.param || null)}
          >
            {action.label}
            <ArrowRight size={14} />
          </button>
        ))}
      </div>
    </article>
  );
}

function QuickToolCard({ icon: Icon, title, text, onClick }) {
  return (
    <button className="small-card" type="button" onClick={onClick}>
      <div className="card-icon">
        <Icon size={21} />
      </div>

      <h3>{title}</h3>
      <p>{text}</p>
    </button>
  );
}

function ArticlePreviewCard({ title, text, onClick }) {
  return (
    <button className="case-card" type="button" onClick={onClick}>
      <span>推薦文章</span>
      <h3>{title}</h3>
      <p>{text}</p>
      <strong>閱讀全文</strong>
    </button>
  );
}

function SmallValueCard({ icon: Icon, title, text }) {
  return (
    <article className="small-card">
      <div className="card-icon">
        <Icon size={21} />
      </div>

      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default App;