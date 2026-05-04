function ExampleCard({ example, onClick }) {
  if (!example) {
    return null;
  }

  function handleClick() {
    if (typeof onClick === "function") {
      onClick(example);
    }
  }

  return (
    <article className="case-card">
      <button className="card-click-layer" onClick={handleClick}>
        <span>{example.industry}</span>
        <h3>{example.title}</h3>
        <p>{example.problem || example.description}</p>
        <strong>推薦方法：{example.recommendedMethod || example.method}</strong>
      </button>
    </article>
  );
}

export default ExampleCard;