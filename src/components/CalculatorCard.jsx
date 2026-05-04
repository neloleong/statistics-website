import { getStatusClass, getStatusText } from "../utils/formatters";

function CalculatorCard({ calculator, onClick }) {
  if (!calculator) {
    return null;
  }

  function handleClick() {
    if (typeof onClick === "function") {
      onClick(calculator);
    }
  }

  return (
    <article className="small-card calculator-card">
      <button className="card-click-layer" onClick={handleClick}>
        <div className="card-meta">
          <span>{calculator.category}</span>
          <span className={getStatusClass(calculator.status)}>
            {getStatusText(calculator.status)}
          </span>
        </div>

        <h3>{calculator.title}</h3>
        <p>{calculator.description}</p>

        {Array.isArray(calculator.outputs) && calculator.outputs.length > 0 && (
          <div className="tag-list compact">
            {calculator.outputs.map((output) => (
              <span key={output}>{output}</span>
            ))}
          </div>
        )}
      </button>
    </article>
  );
}

export default CalculatorCard;