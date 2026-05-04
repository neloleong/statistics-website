import { useMemo, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import SearchBar from "../components/SearchBar";
import TopicCard from "../components/TopicCard";
import { statisticsTopics } from "../data/statisticsTopics";
import { includesKeyword } from "../utils/formatters";

function KnowledgeMapPage({ onOpenTopic }) {
  const [keyword, setKeyword] = useState("");

  const filteredTopics = useMemo(() => {
    return statisticsTopics.filter((topic) => {
      const text = [
        topic.title,
        topic.englishTitle,
        topic.category,
        topic.level,
        topic.description,
        ...(topic.keywords || []),
        ...(topic.topics || []).map(
          (item) => `${item.name} ${item.englishName} ${item.description}`
        )
      ].join(" ");

      return includesKeyword(text, keyword);
    });
  }, [keyword]);

  function handleOpenTopic(topic) {
    if (typeof onOpenTopic === "function") {
      onOpenTopic(topic);
    }
  }

  return (
    <section className="page-section">
      <SectionTitle
        eyebrow="Knowledge Map"
        title="統計學知識地圖"
        description="按主題分類整理統計學核心內容，包括描述統計、機率論、推論統計、檢定方法、回歸分析和時間序列。"
      />

      <SearchBar
        value={keyword}
        onChange={setKeyword}
        placeholder="搜尋：平均數、標準差、t-test、回歸、時間序列..."
      />

      <div className="topic-grid">
        {filteredTopics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} onClick={handleOpenTopic} />
        ))}
      </div>

      {filteredTopics.length === 0 && (
        <div className="empty-state">
          <strong>沒有找到相關主題</strong>
          <p>可以嘗試用其他關鍵詞搜尋，例如「方差」、「p-value」、「回歸」。</p>
        </div>
      )}
    </section>
  );
}

export default KnowledgeMapPage;