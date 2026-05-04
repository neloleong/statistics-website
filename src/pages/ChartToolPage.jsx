import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import CsvUploader from "../tools/CsvUploader";
import ChartGenerator from "../tools/ChartGenerator";

const defaultParsedData = {
  headers: ["月份", "銷售額"],
  rows: [
    { 月份: "1月", 銷售額: 120 },
    { 月份: "2月", 銷售額: 150 },
    { 月份: "3月", 銷售額: 180 },
    { 月份: "4月", 銷售額: 160 },
    { 月份: "5月", 銷售額: 210 }
  ],
  chartData: [
    { 月份: "1月", 銷售額: 120 },
    { 月份: "2月", 銷售額: 150 },
    { 月份: "3月", 銷售額: 180 },
    { 月份: "4月", 銷售額: 160 },
    { 月份: "5月", 銷售額: 210 }
  ],
  error: ""
};

function ChartToolPage() {
  const [parsedData, setParsedData] = useState(defaultParsedData);

  return (
    <section className="page-section">
      <SectionTitle
        eyebrow="Chart Tool"
        title="統計圖表工具"
        description="輸入或上傳簡單 CSV 數據，生成柱狀圖、折線圖、散點圖，並自動給出基礎解釋。"
      />

      <div className="two-column-layout">
        <CsvUploader onDataParsed={setParsedData} />
        <ChartGenerator parsedData={parsedData} />
      </div>

      <div className="table-card" style={{ marginTop: 24 }}>
        <h3>目前數據預覽</h3>

        {parsedData?.headers?.length > 0 && parsedData?.rows?.length > 0 ? (
          <table className="data-table">
            <thead>
              <tr>
                {parsedData.headers.map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {parsedData.rows.slice(0, 10).map((row, rowIndex) => (
                <tr key={`row-${rowIndex}`}>
                  {parsedData.headers.map((header) => (
                    <td key={`${rowIndex}-${header}`}>{String(row[header] ?? "")}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="empty-state">
            <strong>未有數據</strong>
            <p>請先輸入或上傳 CSV。</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ChartToolPage;