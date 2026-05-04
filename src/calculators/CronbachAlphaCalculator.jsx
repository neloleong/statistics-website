import { useMemo, useState } from "react";

function parseMatrix(text) {
  return text
    .trim()
    .split("\n")
    .map((row) =>
      row
        .split(/,|\t/)
        .map((value) => Number(value.trim()))
        .filter((value) => Number.isFinite(value))
    )
    .filter((row) => row.length > 0);
}

function sampleVariance(values) {
  if (!values || values.length < 2) {
    return 0;
  }

  const mean = values.reduce((sum, value) => sum + value, 0) / values.length;

  const squaredDiffSum = values.reduce((sum, value) => {
    return sum + Math.pow(value - mean, 2);
  }, 0);

  return squaredDiffSum / (values.length - 1);
}

function CronbachAlphaCalculator() {
  const [dataText, setDataText] = useState(
    "4,5,4,5\n5,5,5,4\n3,4,3,4\n4,4,4,5\n5,4,5,5\n2,3,2,3\n4,5,4,4\n3,3,4,3"
  );

  const result = useMemo(() => {
    const matrix = parseMatrix(dataText);

    if (matrix.length < 2) {
      return null;
    }

    const itemCount = matrix[0].length;

    if (itemCount < 2) {
      return null;
    }

    const isValidShape = matrix.every((row) => row.length === itemCount);

    if (!isValidShape) {
      return {
        error: "每一行的題項數量必須一致。"
      };
    }

    const respondentCount = matrix.length;

    const itemColumns = Array.from({ length: itemCount }, (_, itemIndex) =>
      matrix.map((row) => row[itemIndex])
    );

    const itemVariances = itemColumns.map((column) => sampleVariance(column));

    const totalScores = matrix.map((row) =>
      row.reduce((sum, value) => sum + value, 0)
    );

    const totalVariance = sampleVariance(totalScores);
    const sumItemVariances = itemVariances.reduce(
      (sum, variance) => sum + variance,
      0
    );

    if (totalVariance === 0) {
      return {
        error: "總分方差為 0，無法計算 Cronbach's Alpha。"
      };
    }

    const alpha =
      (itemCount / (itemCount - 1)) *
      (1 - sumItemVariances / totalVariance);

    let interpretation = "";
    let level = "";

    if (alpha >= 0.9) {
      level = "非常高";
      interpretation =
        "信度非常高，但如果 Alpha 過高，也要留意題項是否過度重複。";
    } else if (alpha >= 0.8) {
      level = "良好";
      interpretation = "信度良好，通常可接受用於研究或問卷分析。";
    } else if (alpha >= 0.7) {
      level = "可接受";
      interpretation = "信度達到常見可接受水平，但仍可檢查是否有題項需要優化。";
    } else if (alpha >= 0.6) {
      level = "偏低";
      interpretation =
        "信度偏低，探索性研究中有時可勉強接受，但正式研究建議改善題項。";
    } else {
      level = "不足";
      interpretation =
        "信度不足，代表題項一致性較差，建議重新檢查題項設計或資料輸入。";
    }

    const itemMeans = itemColumns.map((column) => {
      return column.reduce((sum, value) => sum + value, 0) / column.length;
    });

    return {
      respondentCount,
      itemCount,
      itemVariances,
      itemMeans,
      totalScores,
      totalVariance,
      sumItemVariances,
      alpha,
      level,
      interpretation
    };
  }, [dataText]);

  function formatNumber(value) {
    if (!Number.isFinite(value)) {
      return "-";
    }

    return value.toFixed(4);
  }

  return (
    <div className="calculator-box">
      <h3>Cronbach's Alpha 信度計算器</h3>
      <p>
        用於評估問卷量表多個題項之間的一致性，常見於滿意度調查、
        心理量表、教育研究、市場研究和服務品質問卷。
      </p>

      <label style={{ marginTop: 20 }}>
        輸入問卷題項資料
        <textarea
          value={dataText}
          onChange={(event) => setDataText(event.target.value)}
          placeholder="每一行代表一位受訪者，每一欄代表一個題項，例如：&#10;4,5,4,5&#10;5,5,5,4&#10;3,4,3,4"
          rows={9}
        />
        <span className="input-help">
          每一行代表一位受訪者，每一欄代表一個題項。可使用逗號或 Tab 分隔。
          每一行的題項數量必須一致。
        </span>
      </label>

      {!result ? (
        <div className="empty-state" style={{ marginTop: 20 }}>
          <strong>請輸入有效資料</strong>
          <p>
            至少需要 2 位受訪者和 2 個題項，才能計算 Cronbach's Alpha。
          </p>
        </div>
      ) : result.error ? (
        <div className="empty-state" style={{ marginTop: 20 }}>
          <strong>資料格式有問題</strong>
          <p>{result.error}</p>
        </div>
      ) : (
        <>
          <div className="stats-result-grid">
            <div>
              <span>Cronbach's Alpha</span>
              <strong>{formatNumber(result.alpha)}</strong>
            </div>

            <div>
              <span>信度水平</span>
              <strong>{result.level}</strong>
            </div>

            <div>
              <span>受訪者數量</span>
              <strong>{result.respondentCount}</strong>
            </div>

            <div>
              <span>題項數量</span>
              <strong>{result.itemCount}</strong>
            </div>
          </div>

          <div className="result-grid-3" style={{ marginTop: 18 }}>
            <div className="result-card">
              <span>題項方差總和</span>
              <strong>{formatNumber(result.sumItemVariances)}</strong>
            </div>

            <div className="result-card">
              <span>總分方差</span>
              <strong>{formatNumber(result.totalVariance)}</strong>
            </div>

            <div className="result-card">
              <span>平均總分</span>
              <strong>
                {formatNumber(
                  result.totalScores.reduce((sum, value) => sum + value, 0) /
                    result.totalScores.length
                )}
              </strong>
            </div>
          </div>

          <div className="result-box">
            <strong>結果解讀：</strong>
            <p>{result.interpretation}</p>
          </div>

          <div className="detail-section">
            <h4>題項概況</h4>
            <div className="table-card">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>題項</th>
                    <th>平均值</th>
                    <th>方差</th>
                  </tr>
                </thead>

                <tbody>
                  {result.itemMeans.map((mean, index) => (
                    <tr key={`item-${index + 1}`}>
                      <td>題項 {index + 1}</td>
                      <td>{formatNumber(mean)}</td>
                      <td>{formatNumber(result.itemVariances[index])}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="detail-section">
            <h4>常見解讀標準</h4>
            <ul>
              <li>Alpha ≥ 0.90：非常高，但需留意題項是否重複。</li>
              <li>0.80 ≤ Alpha &lt; 0.90：良好。</li>
              <li>0.70 ≤ Alpha &lt; 0.80：通常可接受。</li>
              <li>0.60 ≤ Alpha &lt; 0.70：偏低，探索性研究中需謹慎使用。</li>
              <li>Alpha &lt; 0.60：信度不足，建議檢查或重寫題項。</li>
            </ul>
          </div>

          <div className="recommendation-warning">
            注意：Cronbach's Alpha 只反映題項內部一致性，不代表問卷一定有效。
            正式研究仍應同時考慮效度、因素分析、題項內容及研究目的。
          </div>
        </>
      )}
    </div>
  );
}

export default CronbachAlphaCalculator;