import { useMemo, useState } from "react";

function parseGroups(text) {
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

function mean(values) {
  if (!values.length) {
    return 0;
  }

  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function sumOfSquares(values, groupMean) {
  return values.reduce((sum, value) => {
    return sum + Math.pow(value - groupMean, 2);
  }, 0);
}

function ANOVACalculator() {
  const [dataText, setDataText] = useState(
    "80,82,78,85,88\n72,75,70,74,76\n90,92,88,94,91"
  );

  const result = useMemo(() => {
    const groups = parseGroups(dataText);

    if (groups.length < 3) {
      return null;
    }

    const validGroups = groups.filter((group) => group.length >= 2);

    if (validGroups.length < 3) {
      return {
        error: "ANOVA 至少需要 3 組資料，而且每組至少需要 2 個數值。"
      };
    }

    const allValues = validGroups.flat();
    const totalN = allValues.length;
    const groupCount = validGroups.length;

    if (totalN <= groupCount) {
      return {
        error: "資料數量不足，無法計算 ANOVA。"
      };
    }

    const grandMean = mean(allValues);

    const groupStats = validGroups.map((group, index) => {
      const groupMean = mean(group);
      const groupSSWithin = sumOfSquares(group, groupMean);

      return {
        index: index + 1,
        n: group.length,
        mean: groupMean,
        ssWithin: groupSSWithin
      };
    });

    const ssBetween = groupStats.reduce((sum, group) => {
      return sum + group.n * Math.pow(group.mean - grandMean, 2);
    }, 0);

    const ssWithin = groupStats.reduce((sum, group) => {
      return sum + group.ssWithin;
    }, 0);

    const ssTotal = ssBetween + ssWithin;

    const dfBetween = groupCount - 1;
    const dfWithin = totalN - groupCount;
    const dfTotal = totalN - 1;

    const msBetween = ssBetween / dfBetween;
    const msWithin = ssWithin / dfWithin;

    if (msWithin === 0) {
      return {
        error:
          "組內變異為 0，無法計算 F 值。請檢查每組資料是否全部相同。"
      };
    }

    const fValue = msBetween / msWithin;

    let interpretation = "";
    let strengthText = "";

    if (fValue >= 10) {
      strengthText = "組間差異非常明顯";
      interpretation =
        "F 值較大，代表組間平均數差異相對於組內波動非常明顯，建議進一步進行事後比較。";
    } else if (fValue >= 5) {
      strengthText = "組間差異較明顯";
      interpretation =
        "F 值偏大，代表不同組別之間可能存在平均數差異，建議配合 p-value 或事後比較進一步判斷。";
    } else if (fValue >= 2) {
      strengthText = "組間差異有一定跡象";
      interpretation =
        "F 值有一定大小，但是否達到統計顯著仍需要配合 p-value、樣本量和研究設計判斷。";
    } else {
      strengthText = "組間差異不明顯";
      interpretation =
        "F 值較小，代表組間平均數差異相對於組內波動不算明顯。";
    }

    return {
      groups: validGroups,
      groupStats,
      totalN,
      groupCount,
      grandMean,
      ssBetween,
      ssWithin,
      ssTotal,
      dfBetween,
      dfWithin,
      dfTotal,
      msBetween,
      msWithin,
      fValue,
      interpretation,
      strengthText
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
      <h3>單因子 ANOVA 計算器</h3>
      <p>
        用於比較三組或以上平均數是否存在差異，例如三種教學方法、三種產品方案、
        三個年齡組別或多個實驗組別之間的平均分比較。
      </p>

      <label style={{ marginTop: 20 }}>
        輸入各組資料
        <textarea
          value={dataText}
          onChange={(event) => setDataText(event.target.value)}
          placeholder="每一行代表一組，每一行內用逗號分隔，例如：&#10;80,82,78,85,88&#10;72,75,70,74,76&#10;90,92,88,94,91"
          rows={8}
        />
        <span className="input-help">
          每一行代表一組資料，每組至少需要 2 個數值，至少需要 3 組資料。
          可以使用逗號或 Tab 分隔。
        </span>
      </label>

      {!result ? (
        <div className="empty-state" style={{ marginTop: 20 }}>
          <strong>請輸入有效資料</strong>
          <p>
            單因子 ANOVA 至少需要 3 組資料，而且每組至少需要 2 個數值。
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
              <span>F 值</span>
              <strong>{formatNumber(result.fValue)}</strong>
            </div>

            <div>
              <span>組數</span>
              <strong>{result.groupCount}</strong>
            </div>

            <div>
              <span>總樣本數</span>
              <strong>{result.totalN}</strong>
            </div>

            <div>
              <span>整體平均數</span>
              <strong>{formatNumber(result.grandMean)}</strong>
            </div>
          </div>

          <div className="result-grid-3" style={{ marginTop: 18 }}>
            <div className="result-card">
              <span>組間平方和 SSB</span>
              <strong>{formatNumber(result.ssBetween)}</strong>
            </div>

            <div className="result-card">
              <span>組內平方和 SSW</span>
              <strong>{formatNumber(result.ssWithin)}</strong>
            </div>

            <div className="result-card">
              <span>總平方和 SST</span>
              <strong>{formatNumber(result.ssTotal)}</strong>
            </div>
          </div>

          <div className="result-box">
            <strong>初步判斷：</strong>
            <p>{result.strengthText}</p>
          </div>

          <div className="recommendation-warning">
            <strong>解讀：</strong>
            <br />
            {result.interpretation}
          </div>

          <div className="detail-section">
            <h4>ANOVA 表</h4>

            <div className="table-card">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>來源</th>
                    <th>平方和 SS</th>
                    <th>自由度 df</th>
                    <th>均方 MS</th>
                    <th>F 值</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>組間 Between Groups</td>
                    <td>{formatNumber(result.ssBetween)}</td>
                    <td>{result.dfBetween}</td>
                    <td>{formatNumber(result.msBetween)}</td>
                    <td>{formatNumber(result.fValue)}</td>
                  </tr>

                  <tr>
                    <td>組內 Within Groups</td>
                    <td>{formatNumber(result.ssWithin)}</td>
                    <td>{result.dfWithin}</td>
                    <td>{formatNumber(result.msWithin)}</td>
                    <td>-</td>
                  </tr>

                  <tr>
                    <td>總計 Total</td>
                    <td>{formatNumber(result.ssTotal)}</td>
                    <td>{result.dfTotal}</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="detail-section">
            <h4>各組概況</h4>

            <div className="table-card">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>組別</th>
                    <th>樣本數</th>
                    <th>平均數</th>
                    <th>組內平方和</th>
                  </tr>
                </thead>

                <tbody>
                  {result.groupStats.map((group) => (
                    <tr key={`group-${group.index}`}>
                      <td>第 {group.index} 組</td>
                      <td>{group.n}</td>
                      <td>{formatNumber(group.mean)}</td>
                      <td>{formatNumber(group.ssWithin)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="detail-section">
            <h4>使用前提</h4>
            <ul>
              <li>因變量應為連續型數據，例如分數、金額、時間、重量等。</li>
              <li>自變量應為三組或以上的分類組別。</li>
              <li>各組樣本應相互獨立。</li>
              <li>理想情況下，各組資料接近正態分佈。</li>
              <li>各組方差應大致相等。</li>
            </ul>
          </div>

          <div className="recommendation-warning">
            注意：本工具目前提供 F 值、自由度及 ANOVA 表，用於學習和初步分析。
            正式研究仍建議使用 SPSS、R、Python 或其他統計軟件計算精確 p-value。
            若 ANOVA 顯著，仍需進一步做事後比較，才能知道哪兩組之間存在差異。
          </div>
        </>
      )}
    </div>
  );
}

export default ANOVACalculator;