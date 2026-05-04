function ContactPage() {
  return (
    <main className="container page-shell">
      <section className="legal-page">
        <div className="page-eyebrow">Contact</div>
        <h1 className="page-title">聯絡我們</h1>

        <p>
          如果你對 StatMap 統計學全景平台有任何建議、內容修正、合作查詢或功能需求，歡迎透過以下方式聯絡我們。
        </p>

        <div className="contact-box">
          <h2>聯絡方式</h2>
          <p>
            電郵：
            <a href="mailto:mtscardshop@gmail.com">
              mtscardshop@gmail.com
            </a>
          </p>
        </div>

        <h2>可聯絡事項</h2>
        <ul>
          <li>統計內容錯誤修正。</li>
          <li>公式、案例或詞彙補充建議。</li>
          <li>網站功能改善建議。</li>
          <li>教育、課程、內容合作查詢。</li>
          <li>網站使用問題回報。</li>
        </ul>

        <h2>回覆說明</h2>
        <p>
          我們會盡量檢視收到的意見和建議，但未必能對所有查詢作出即時回覆。
          如涉及正式研究、學術論文、醫療、法律或財務決策，請同時諮詢相關專業人士。
        </p>
      </section>
    </main>
  );
}

export default ContactPage;