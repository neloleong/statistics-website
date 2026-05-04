import { formatNumber } from "../utils/formatters";

function ResultInterpreter({ data = [], xKey, yKey, chartType }) {
  const numericValues = data
    .map((item) => Number(item?.[yKey]))
    .filter((value) => Number.isFinite(value));

  if (!Array.isArray(data) || data.length === 0 || numericValues.length === 0) {
    return (
      <div className="result-box">
        <strong>圖表解釋</strong>
        <p>請先輸入可用數據，並選擇一個數值欄位作為 Y 軸。</p>
      </div>
    );
  }

  const total = numericValues.reduce((sum, value) => sum + value, 0);
  const average = total / numericValues.length;
  const min = Math.min(...numericValues);
  const max = Math.max(...numericValues);
  const range = max - min;

  const first = numericValues[0];
  const last = numericValues[numericValues.length - 1];
  const trend = getTrend(first, last);

  return (
    <div className="result-box">
      <strong>圖表解釋</strong>
      <p>
        目前圖表類型為「{getChartTypeText(chartType)}」，X 軸為「{xKey}」，Y 軸為「{yKey}」。
        數據共有 {numericValues.length} 筆，平均值為 {formatNumber(average)}，
        最小值為 {formatNumber(min)}，最大值為 {formatNumber(max)}，
        範圍為 {formatNumber(range)}。整體由第一筆到最後一筆呈現「{trend}」。
      </p>
    </div>
  );
}

function getTrend(first, last) {
  if (last > first) {
    return "上升趨勢";
  }

  if (last < first) {
    return "下降趨勢";
  }

  return "大致持平";
}

function getChartTypeText(chartType) {
  const map = {
    bar: "柱狀圖",
    line: "折線圖",
    scatter: "散點圖"
  };

  return map[chartType] || "圖表";
}

export default ResultInterpreter;