import SectionTitle from "../components/SectionTitle";

function TopicDetailPage({ topic, onBack }) {
  if (!topic) {
    return (
      <section className="page-section">
        <SectionTitle
          eyebrow="Topic Detail"
          title="未選擇統計主題"
          description="請先返回知識地圖，選擇一個統計主題。"
        />

        <button className="primary-btn" onClick={onBack}>
          返回知識地圖
        </button>
      </section>
    );
  }

  return (
    <section className="page-section">
      <button className="ghost-btn" onClick={onBack} style={{ marginBottom: 20 }}>
        ← 返回知識地圖
      </button>

      <SectionTitle
        eyebrow={topic.category}
        title={`${topic.icon || "📊"} ${topic.title}`}
        description={topic.description}
      />

      <div className="detail-panel">
        <div className="detail-panel-header">
          <div>
            <div className="card-meta">
              <span>{topic.category}</span>
              <span>{topic.level}</span>
              <span>{topic.englishTitle}</span>
            </div>

            <h3>主題概覽</h3>
            <p>{topic.description}</p>
          </div>
        </div>

        {Array.isArray(topic.keywords) && topic.keywords.length > 0 && (
          <div className="detail-section">
            <h4>關鍵詞</h4>

            <div className="tag-list compact">
              {topic.keywords.map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </div>
          </div>
        )}

        {Array.isArray(topic.topics) && topic.topics.length > 0 && (
          <div className="detail-section">
            <h4>包含內容</h4>

            <div className="topic-detail-list">
              {topic.topics.map((item, index) => (
                <article className="topic-detail-item" key={item.id}>
                  <div className="step-number">{index + 1}</div>

                  <div>
                    <h3>{item.name}</h3>
                    <span className="english-name">{item.englishName}</span>
                    <p>{item.description}</p>

                    {item.example && (
                      <div className="recommendation-warning" style={{ marginTop: 12 }}>
                        例子：{item.example}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        <div className="detail-section">
          <h4>學習建議</h4>

          <p>
            建議先理解本主題的基本概念，再進一步查看公式庫、方法選擇器和計算器。
            如果這個主題涉及數據分析，可以先用描述統計和圖表工具觀察數據，再決定是否需要假設檢定或回歸分析。
          </p>
        </div>
      </div>
    </section>
  );
}

export default TopicDetailPage;