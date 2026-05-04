import { useState } from "react";

function CsvUploader({ onDataParsed }) {
  const [rawText, setRawText] = useState("月份,銷售額\n1月,120\n2月,150\n3月,180\n4月,160\n5月,210");

  function handleParse() {
    const parsed = parseCsvText(rawText);

    if (typeof onDataParsed === "function") {
      onDataParsed(parsed);
    }
  }

  function handleFileUpload(event) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = function handleLoad(loadEvent) {
      const text = String(loadEvent.target?.result || "");
      setRawText(text);

      const parsed = parseCsvText(text);

      if (typeof onDataParsed === "function") {
        onDataParsed(parsed);
      }
    };

    reader.readAsText(file, "UTF-8");
  }

  return (
    <div className="tool-box">
      <h3>CSV / 表格數據輸入</h3>
      <p>
        可以直接貼上簡單 CSV，也可以上傳 CSV 檔案。第一行會被視為欄位名稱。
      </p>

      <label>
        貼上 CSV 文字
        <textarea
          value={rawText}
          onChange={(event) => setRawText(event.target.value)}
          placeholder={"例如：\n月份,銷售額\n1月,120\n2月,150"}
        />
      </label>

      <div className="hero-actions" style={{ marginTop: 8 }}>
        <button className="primary-btn" onClick={handleParse}>
          解析數據
        </button>

        <label className="ghost-btn" style={{ display: "inline-flex", alignItems: "center" }}>
          上傳 CSV
          <input
            type="file"
            accept=".csv,text/csv"
            onChange={handleFileUpload}
            style={{ display: "none" }}
          />
        </label>
      </div>

      <span className="input-help">
        目前支援簡單 CSV 格式，例如：名稱,數值。若有複雜逗號或引號，之後可再升級解析器。
      </span>
    </div>
  );
}

function parseCsvText(text) {
  const lines = String(text || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length < 2) {
    return {
      headers: [],
      rows: [],
      chartData: [],
      error: "至少需要標題列和一行數據。"
    };
  }

  const headers = splitCsvLine(lines[0]);

  const rows = lines.slice(1).map((line) => {
    const values = splitCsvLine(line);

    return headers.reduce((row, header, index) => {
      const rawValue = values[index] ?? "";
      const numericValue = Number(rawValue);

      row[header] = Number.isFinite(numericValue) && rawValue !== "" ? numericValue : rawValue;

      return row;
    }, {});
  });

  return {
    headers,
    rows,
    chartData: rows,
    error: ""
  };
}

function splitCsvLine(line) {
  return String(line || "")
    .split(/,|，/)
    .map((value) => value.trim());
}

export default CsvUploader;