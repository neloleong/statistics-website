function Footer({ navigate }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-brand"> 統計學全景平台</div>
          <p>
            系統化整理統計概念、公式、方法、案例及分析工具，協助使用者更快理解和應用統計學。
          </p>
        </div>

        <div className="footer-links">
          <button type="button" onClick={() => navigate("about")}>
            關於本站
          </button>
          <button type="button" onClick={() => navigate("contact")}>
            聯絡我們
          </button>
          <button type="button" onClick={() => navigate("privacy")}>
            隱私政策
          </button>
          <button type="button" onClick={() => navigate("disclaimer")}>
            免責聲明
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;