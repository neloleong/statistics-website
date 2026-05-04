function FormulaCard({ formula, onClick }) {
  if (!formula) {
    return null;
  }

  function handleClick() {
    if (typeof onClick === "function") {
      onClick(formula);
    }
  }

  return (
    <article className="formula-card">
      <button className="card-click-layer" onClick={handleClick}>
        <div className="card-meta">
          <span>{formula.category}</span>
          <span>{formula.englishName}</span>
        </div>

        <h3>{formula.name}</h3>

        <div className="formula-box">{formula.formula}</div>

        <p>{formula.explanation || formula.whenToUse}</p>

        {formula.warning && <small className="warning-text">注意：{formula.warning}</small>}
      </button>
    </article>
  );
}

export default FormulaCard;