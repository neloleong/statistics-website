import { useEffect, useState } from "react";
import {
  Calculator,
  FlaskConical,
  FunctionSquare,
  Map,
  Search
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

function getInitialPage() {
  const hash = window.location.hash.replace("#", "");

  if (!hash) {
    return "home";
  }

  return hash;
}

function App() {
  const [currentPage, setCurrentPage] = useState(getInitialPage);
  const [selectedTopic, setSelectedTopic] = useState(null);

  useEffect(() => {
    function handleHashChange() {
      const nextPage = getInitialPage();
      setCurrentPage(nextPage);

      if (nextPage !== "topic-detail") {
        setSelectedTopic(null);
      }
    }

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  function changePage(pageId) {
    window.location.hash = pageId;
    setCurrentPage(pageId);

    if (pageId !== "topic-detail") {
      setSelectedTopic(null);
    }
  }

  function openTopicDetail(topic) {
    setSelectedTopic(topic);
    window.location.hash = "topic-detail";
    setCurrentPage("topic-detail");
  }

  function backToKnowledgeMap() {
    window.location.hash = "map";
    setCurrentPage("map");
  }

  const pageMap = {
    home: <HomePage setCurrentPage={changePage} />,
    map: <KnowledgeMapPage onOpenTopic={openTopicDetail} />,
    "topic-detail": (
      <TopicDetailPage topic={selectedTopic} onBack={backToKnowledgeMap} />
    ),
    formulas: <FormulaLibraryPage />,
    methods: <MethodSelectorPage />,
    calculators: <CalculatorPage />,
    chart: <ChartToolPage />,
    cases: <CaseLibraryPage />,
    glossary: <GlossaryPage />,
    path: <LearningPathPage />
  };

  return (
    <div className="app">
      <Header currentPage={currentPage} setCurrentPage={changePage} />

      <main>{pageMap[currentPage] || pageMap.home}</main>

      <Footer />
    </div>
  );
}

function HomePage({ setCurrentPage }) {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">Statistics Learning & Analysis Platform</span>

          <h1>統計學全景知識與分析平台</h1>

          <p>
            從描述統計、機率論、假設檢定到回歸分析，建立一個可查詢、可計算、
            可學習、可視化、可應用的統計學網站。
          </p>

          <div className="hero-actions">
            <button className="primary-btn" onClick={() => setCurrentPage("map")}>
              開始瀏覽知識地圖
            </button>

            <button className="secondary-btn" onClick={() => setCurrentPage("methods")}>
              選擇統計方法
            </button>
          </div>
        </div>

        <div className="hero-panel">
          <div className="panel-header">
            <Search size={18} />
            <span>你想解決什麼問題？</span>
          </div>

          <div className="quick-grid">
            <button onClick={() => setCurrentPage("formulas")}>查公式</button>
            <button onClick={() => setCurrentPage("calculators")}>做計算</button>
            <button onClick={() => setCurrentPage("chart")}>畫圖表</button>
            <button onClick={() => setCurrentPage("cases")}>看案例</button>
            <button onClick={() => setCurrentPage("path")}>學習路線</button>
          </div>
        </div>
      </section>

      <section className="content-section">
        <SectionTitle
          eyebrow="Core Modules"
          title="第一版網站核心功能"
          description="先完成最重要的入口，之後再逐步加入更多統計內容與互動工具。"
        />

        <div className="feature-grid">
          <FeatureCard
            icon={Map}
            title="統計知識地圖"
            text="用分類方式整理統計學所有核心內容，並支援搜尋與主題詳情。"
            onClick={() => setCurrentPage("map")}
          />

          <FeatureCard
            icon={FunctionSquare}
            title="公式庫"
            text="集中整理常用統計公式、符號說明、使用場景與注意事項。"
            onClick={() => setCurrentPage("formulas")}
          />

          <FeatureCard
            icon={FlaskConical}
            title="方法選擇器"
            text="根據研究目的、數據類型、樣本關係和分佈情況推薦合適方法。"
            onClick={() => setCurrentPage("methods")}
          />

          <FeatureCard
            icon={Calculator}
            title="統計計算器"
            text="包含平均數、標準差、相關係數、回歸、t-test、卡方和置信區間。"
            onClick={() => setCurrentPage("calculators")}
          />
        </div>
      </section>
    </>
  );
}

function FeatureCard({ icon: Icon, title, text, onClick }) {
  return (
    <button className="feature-card" onClick={onClick}>
      <div className="card-icon">
        <Icon size={24} />
      </div>

      <h3>{title}</h3>
      <p>{text}</p>
    </button>
  );
}

export default App;