import { Sigma } from "lucide-react";

const defaultNavItems = [
  { id: "home", label: "首頁" },
  { id: "map", label: "知識地圖" },
  { id: "formulas", label: "公式庫" },
  { id: "methods", label: "方法選擇器" },
  { id: "calculators", label: "計算器" },
  { id: "chart", label: "圖表工具" },
  { id: "cases", label: "案例庫" },
  { id: "glossary", label: "詞彙表" },
  { id: "path", label: "學習路線" }
];

function Header({ currentPage = "home", setCurrentPage, navItems = defaultNavItems }) {
  function handleNavigate(pageId) {
    if (typeof setCurrentPage === "function") {
      setCurrentPage(pageId);
    }
  }

  return (
    <header className="site-header">
      <div className="nav-container">
        <button className="brand" onClick={() => handleNavigate("home")}>
          <span className="brand-icon">
            <Sigma size={22} />
          </span>

          <span>
            <strong>StatMap</strong>
            <small>統計學全景平台</small>
          </span>
        </button>

        <nav className="main-nav" aria-label="網站主選單">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={currentPage === item.id ? "nav-link active" : "nav-link"}
              onClick={() => handleNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;