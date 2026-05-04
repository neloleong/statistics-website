function TopicCard({ topic, onClick }) {
  if (!topic) {
    return null;
  }

  function handleClick() {
    if (typeof onClick === "function") {
      onClick(topic);
    }
  }

  return (
    <article className="topic-card">
      <button className="card-click-layer" onClick={handleClick}>
        <div className="topic-card-header">
          <div className="emoji-icon">{topic.icon || "📊"}</div>

          <div>
            <div className="card-meta">
              <span>{topic.category}</span>
              <span>{topic.level}</span>
            </div>

            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
          </div>
        </div>

        {Array.isArray(topic.keywords) && topic.keywords.length > 0 && (
          <div className="tag-list">
            {topic.keywords.map((keyword) => (
              <span key={keyword}>{keyword}</span>
            ))}
          </div>
        )}
      </button>
    </article>
  );
}

export default TopicCard;