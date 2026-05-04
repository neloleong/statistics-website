import { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import ResultInterpreter from "./ResultInterpreter";

function ChartGenerator({ parsedData }) {
  const headers = parsedData?.headers || [];
  const rows = parsedData?.chartData || [];

  const defaultXKey = headers[0] || "";
  const defaultYKey = headers.find((header) =>
    rows.some((row) => Number.isFinite(Number(row[header])))
  ) || headers[1] || "";

  const [chartType, setChartType] = useState("bar");
  const [xKey, setXKey] = useState(defaultXKey);
  const [yKey, setYKey] = useState(defaultYKey);

  const safeXKey = xKey || defaultXKey;
  const safeYKey = yKey || defaultYKey;

  const chartData = useMemo(() => {
    return rows.map((row, index) => ({
      ...row,
      __index: index + 1,
      [safeYKey]: Number(row[safeYKey])
    }));
  }, [rows, safeYKey]);

  if (!parsedData || parsedData.error) {
    return (
      <div className="chart-box">
        <h3>圖表生成器</h3>

        <div className="chart-placeholder">
          <div>
            <strong>未有可用數據</strong>
            <p>{parsedData?.error || "請先在左側輸入或上傳 CSV 數據。"}</p>
          </div>
        </div>
      </div>
    );
  }

  if (headers.length < 2) {
    return (
      <div className="chart-box">
        <h3>圖表生成器</h3>

        <div className="chart-placeholder">
          <div>
            <strong>欄位不足</strong>
            <p>至少需要兩個欄位：一個作為 X 軸，一個作為 Y 軸。</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="chart-box">
      <h3>圖表生成器</h3>
      <p>選擇圖表類型、X 軸和 Y 軸，系統會即時生成可視化圖表。</p>

      <div className="three-column-grid" style={{ marginTop: 18 }}>
        <label>
          圖表類型
          <select value={chartType} onChange={(event) => setChartType(event.target.value)}>
            <option value="bar">柱狀圖</option>
            <option value="line">折線圖</option>
            <option value="scatter">散點圖</option>
          </select>
        </label>

        <label>
          X 軸
          <select value={safeXKey} onChange={(event) => setXKey(event.target.value)}>
            {headers.map((header) => (
              <option value={header} key={header}>
                {header}
              </option>
            ))}
          </select>
        </label>

        <label>
          Y 軸
          <select value={safeYKey} onChange={(event) => setYKey(event.target.value)}>
            {headers.map((header) => (
              <option value={header} key={header}>
                {header}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="chart-placeholder" style={{ marginTop: 18 }}>
        <ResponsiveContainer width="100%" height={300}>
          {chartType === "bar" ? (
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={safeXKey} />
              <YAxis />
              <Tooltip />
              <Bar dataKey={safeYKey} />
            </BarChart>
          ) : chartType === "line" ? (
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={safeXKey} />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey={safeYKey} strokeWidth={3} />
            </LineChart>
          ) : (
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={safeXKey} name={safeXKey} />
              <YAxis dataKey={safeYKey} name={safeYKey} />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Scatter data={chartData} />
            </ScatterChart>
          )}
        </ResponsiveContainer>
      </div>

      <ResultInterpreter
        data={chartData}
        xKey={safeXKey}
        yKey={safeYKey}
        chartType={chartType}
      />
    </div>
  );
}

export default ChartGenerator;