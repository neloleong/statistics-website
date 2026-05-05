import VisitorCounter from "./VisitorCounter";

function Footer({ navigate }) {
  function handleNavigate(pageId) {
    if (typeof navigate === "function") {
      navigate(pageId);
      return;
    }

    window.location.hash = pageId;
  }

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-brand">MTS&apos; StatMap 統計學全景平台</div>
          <p>
            系統化整理統計概念、公式、方法、案例、文章及分析工具，
            協助使用者更快理解和應用統計學。
          </p>

          <VisitorCounter />
        </div>

        <div className="footer-links">
          <button type="button" onClick={() => handleNavigate("articles")}>
            統計文章
          </button>

          <button type="button" onClick={() => handleNavigate("about")}>
            關於本站
          </button>

          <button type="button" onClick={() => handleNavigate("contact")}>
            聯絡我們
          </button>

          <button type="button" onClick={() => handleNavigate("privacy")}>
            隱私政策
          </button>

          <button type="button" onClick={() => handleNavigate("disclaimer")}>
            免責聲明
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;