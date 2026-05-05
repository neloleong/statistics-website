const navItems = [
  { id: "home", label: "首頁" },
  { id: "map", label: "知識地圖" },
  { id: "formulas", label: "公式庫" },
  { id: "methods", label: "方法選擇器" },
  { id: "calculators", label: "計算器" },
  { id: "articles", label: "統計文章" },
  { id: "chart", label: "圖表工具" },
  { id: "cases", label: "案例庫" },
  { id: "glossary", label: "詞彙表" },
  { id: "path", label: "學習路線" },
  { id: "about", label: "關於本站" },
  { id: "contact", label: "聯絡我們" }
];

function Header({ currentPage = "home", navigate }) {
  function handleNavigate(pageId) {
    if (typeof navigate === "function") {
      navigate(pageId);
      return;
    }

    window.location.hash = pageId;
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <button
          className="brand"
          type="button"
          onClick={() => handleNavigate("home")}
        >
          <div className="brand-mark">Σ</div>
          <div>
            <div className="brand-title">MTS&apos; StatMap</div>
            <div className="brand-subtitle">統計學全景平台</div>
          </div>
        </button>

        <nav className="main-nav" aria-label="主導航">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={
                currentPage === item.id ? "nav-link active" : "nav-link"
              }
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