import { useMemo, useState } from "react";
import { formatNumber } from "../utils/formatters";

function ChiSquareCalculator() {
  const [tableInput, setTableInput] = useState("30, 20\n15, 35");

  const table = useMemo(() => parseTableInput(tableInput), [tableInput]);
  const result = useMemo(() => calculateChiSquare(table), [table]);

  return (
    <div className="calculator-box">
      <h3>卡方檢定計算器</h3>
      <p>
        用於分析兩個分類變量是否存在關聯。請輸入交叉表頻數。
      </p>

      <label>
        輸入交叉表
        <textarea
          value={tableInput}
          onChange={(event) => setTableInput(event.target.value)}
          placeholder={"例如：\n30, 20\n15, 35"}
        />
        <span className="input-help">
          每一行代表一個組別，每行內用逗號或空格分隔。例如 2x2 表：30,20 換行 15,35。
        </span>
      </label>

      {!result.isValid && (
        <div className="recommendation-warning">{result.message}</div>
      )}

      <div className="stats-result-grid">
        <div>
          <span>列數</span>
          <strong>{table.length}</strong>
        </div>

        <div>
          <span>欄數</span>
          <strong>{table[0]?.length || 0}</strong>
        </div>

        <div>
          <span>總樣本數</span>
          <strong>{formatNumber(result.total)}</strong>
        </div>

        <div>
          <span>χ² 值</span>
          <strong>{formatNumber(result.chiSquare, 4)}</strong>
        </div>

        <div>
          <span>自由度 df</span>
          <strong>{result.degreesOfFreedom}</strong>
        </div>

        <div>
          <span>結果狀態</span>
          <strong>{result.isValid ? "可計算" : "未能計算"}</strong>
        </div>
      </div>

      {result.expectedTable.length > 0 && (
        <div className="table-card" style={{ marginTop: 18 }}>
          <h3>期望頻數表</h3>

          <table className="data-table">
            <tbody>
              {result.expectedTable.map((row, rowIndex) => (
                <tr key={`row-${rowIndex}`}>
                  {row.map((value, colIndex) => (
                    <td key={`cell-${rowIndex}-${colIndex}`}>
                      {formatNumber(value, 2)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="result-box">
        <strong>結果解釋</strong>
        <p>
          χ² 值越大，代表觀察頻數與期望頻數差異越明顯。正式判斷是否顯著仍需要配合 p-value 或臨界值表。
        </p>
      </div>

      <div className="recommendation-warning">
        若樣本量很小或期望頻數過低，應考慮 Fisher's Exact Test，而不是普通卡方檢定。
      </div>
    </div>
  );
}

function parseTableInput(input) {
  if (!input || typeof input !== "string") {
    return [];
  }

  return input
    .split(/\n+/)
    .map((row) =>
      row
        .split(/[\s,，;；\t]+/)
        .map((value) => Number(value.trim()))
        .filter((value) => Number.isFinite(value) && value >= 0)
    )
    .filter((row) => row.length > 0);
}

function calculateChiSquare(table) {
  if (!Array.isArray(table) || table.length < 2) {
    return invalidResult("至少需要 2 行數據。");
  }

  const columnCount = table[0]?.length || 0;

  if (columnCount < 2) {
    return invalidResult("至少需要 2 欄數據。");
  }

  const hasSameColumnCount = table.every((row) => row.length === columnCount);

  if (!hasSameColumnCount) {
    return invalidResult("每一行的欄數必須相同。");
  }

  const rowTotals = table.map((row) => row.reduce((sum, value) => sum + value, 0));
  const columnTotals = Array.from({ length: columnCount }, (_, colIndex) =>
    table.reduce((sum, row) => sum + row[colIndex], 0)
  );
  const total = rowTotals.reduce((sum, value) => sum + value, 0);

  if (total === 0) {
    return invalidResult("總頻數不能為 0。");
  }

  const expectedTable = table.map((row, rowIndex) =>
    row.map((_, colIndex) => (rowTotals[rowIndex] * columnTotals[colIndex]) / total)
  );

  const chiSquare = table.reduce((sum, row, rowIndex) => {
    return (
      sum +
      row.reduce((rowSum, observed, colIndex) => {
        const expected = expectedTable[rowIndex][colIndex];

        if (expected === 0) {
          return rowSum;
        }

        return rowSum + Math.pow(observed - expected, 2) / expected;
      }, 0)
    );
  }, 0);

  return {
    isValid: true,
    message: "",
    total,
    chiSquare,
    degreesOfFreedom: (table.length - 1) * (columnCount - 1),
    expectedTable
  };
}

function invalidResult(message) {
  return {
    isValid: false,
    message,
    total: 0,
    chiSquare: 0,
    degreesOfFreedom: 0,
    expectedTable: []
  };
}

export default ChiSquareCalculator;