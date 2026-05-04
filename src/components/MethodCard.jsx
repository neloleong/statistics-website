function MethodCard({ method, onClick }) {
  if (!method) {
    return null;
  }

  function handleClick() {
    if (typeof onClick === "function") {
      onClick(method);
    }
  }

  return (
    <article className="method-card">
      <button className="card-click-layer" onClick={handleClick}>
        <div className="card-meta">
          <span>{method.category}</span>
          <span>{method.dataType}</span>
        </div>

        <h3>{method.name}</h3>
        <span className="english-name">{method.englishName}</span>

        <p>{method.purpose}</p>

        <small>適用情況：{Array.isArray(method.whenToUse) ? method.whenToUse.join("、") : "待補充"}</small>
      </button>
    </article>
  );
}

export default MethodCard;