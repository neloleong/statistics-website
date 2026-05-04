import { useMemo, useState } from "react";

function factorial(n) {
  if (n < 0) return NaN;
  if (n === 0 || n === 1) return 1;

  let result = 1;

  for (let i = 2; i <= n; i += 1) {
    result *= i;
  }

  return result;
}

function combination(n, k) {
  if (k < 0 || k > n) return 0;

  const smallerK = Math.min(k, n - k);

  let numerator = 1;
  let denominator = 1;

  for (let i = 1; i <= smallerK; i += 1) {
    numerator *= n - smallerK + i;
    denominator *= i;
  }

  return numerator / denominator;
}

function binomialProbability(n, k, p) {
  return combination(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
}

function poissonProbability(lambda, k) {
  return (Math.pow(lambda, k) * Math.exp(-lambda)) / factorial(k);
}

function normalCdf(x) {
  const sign = x < 0 ? -1 : 1;
  const absX = Math.abs(x) / Math.sqrt(2);

  const t = 1 / (1 + 0.3275911 * absX);
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;

  const erf =
    1 -
    (((((a5 * t + a4) * t + a3) * t + a2) * t + a1) *
      t *
      Math.exp(-absX * absX));

  return 0.5 * (1 + sign * erf);
}

function ProbabilityCalculator() {
  const [distributionType, setDistributionType] = useState("binomial");

  const [trials, setTrials] = useState("10");
  const [successProbability, setSuccessProbability] = useState("0.5");
  const [successCount, setSuccessCount] = useState("3");

  const [lambda, setLambda] = useState("4");
  const [poissonCount, setPoissonCount] = useState("2");

  const [normalMean, setNormalMean] = useState("100");
  const [normalSd, setNormalSd] = useState("15");
  const [normalX, setNormalX] = useState("115");

  const result = useMemo(() => {
    if (distributionType === "binomial") {
      const n = Number(trials);
      const p = Number(successProbability);
      const k = Number(successCount);

      if (
        !Number.isInteger(n) ||
        !Number.isInteger(k) ||
        n <= 0 ||
        k < 0 ||
        k > n ||
        !Number.isFinite(p) ||
        p < 0 ||
        p > 1
      ) {
        return null;
      }

      const exactProbability = binomialProbability(n, k, p);

      let cumulativeProbability = 0;

      for (let i = 0; i <= k; i += 1) {
        cumulativeProbability += binomialProbability(n, i, p);
      }

      const expectedValue = n * p;
      const variance = n * p * (1 - p);
      const standardDeviation = Math.sqrt(variance);

      return {
        type: "binomial",
        exactProbability,
        cumulativeProbability,
        expectedValue,
        variance,
        standardDeviation,
        interpretation: `在 ${n} 次試驗中，每次成功機率為 ${p}，剛好成功 ${k} 次的機率為 ${formatPercent(
          exactProbability
        )}。`
      };
    }

    if (distributionType === "poisson") {
      const l = Number(lambda);
      const k = Number(poissonCount);

      if (
        !Number.isFinite(l) ||
        l <= 0 ||
        !Number.isInteger(k) ||
        k < 0
      ) {
        return null;
      }

      const exactProbability = poissonProbability(l, k);

      let cumulativeProbability = 0;

      for (let i = 0; i <= k; i += 1) {
        cumulativeProbability += poissonProbability(l, i);
      }

      return {
        type: "poisson",
        exactProbability,
        cumulativeProbability,
        expectedValue: l,
        variance: l,
        standardDeviation: Math.sqrt(l),
        interpretation: `當平均發生次數 λ = ${l} 時，剛好發生 ${k} 次的機率為 ${formatPercent(
          exactProbability
        )}。`
      };
    }

    if (distributionType === "normal") {
      const mean = Number(normalMean);
      const sd = Number(normalSd);
      const x = Number(normalX);

      if (
        !Number.isFinite(mean) ||
        !Number.isFinite(sd) ||
        !Number.isFinite(x) ||
        sd <= 0
      ) {
        return null;
      }

      const z = (x - mean) / sd;
      const lowerProbability = normalCdf(z);
      const upperProbability = 1 - lowerProbability;
      const betweenMeanAndX = Math.abs(lowerProbability - 0.5);

      return {
        type: "normal",
        z,
        lowerProbability,
        upperProbability,
        betweenMeanAndX,
        expectedValue: mean,
        variance: sd * sd,
        standardDeviation: sd,
        interpretation: `當平均數為 ${mean}、標準差為 ${sd} 時，X ≤ ${x} 的累積機率約為 ${formatPercent(
          lowerProbability
        )}。`
      };
    }

    return null;
  }, [
    distributionType,
    trials,
    successProbability,
    successCount,
    lambda,
    poissonCount,
    normalMean,
    normalSd,
    normalX
  ]);

  function formatNumber(value) {
    if (!Number.isFinite(value)) {
      return "-";
    }

    return value.toFixed(4);
  }

  function formatPercent(value) {
    if (!Number.isFinite(value)) {
      return "-";
    }

    return `${(value * 100).toFixed(2)}%`;
  }

  function renderInputs() {
    if (distributionType === "binomial") {
      return (
        <div className="two-column-layout" style={{ marginTop: 20 }}>
          <div>
            <label>
              試驗次數 n
              <input
                type="number"
                min="1"
                step="1"
                value={trials}
                onChange={(event) => setTrials(event.target.value)}
              />
              <span className="input-help">
                例如投擲硬幣 10 次、發送 100 封推廣訊息。
              </span>
            </label>

            <label>
              成功機率 p
              <input
                type="number"
                min="0"
                max="1"
                step="0.01"
                value={successProbability}
                onChange={(event) => setSuccessProbability(event.target.value)}
              />
              <span className="input-help">
                請輸入 0 至 1 之間，例如 0.5 代表 50%。
              </span>
            </label>
          </div>

          <div>
            <label>
              成功次數 k
              <input
                type="number"
                min="0"
                step="1"
                value={successCount}
                onChange={(event) => setSuccessCount(event.target.value)}
              />
              <span className="input-help">
                想計算剛好成功幾次，例如剛好成功 3 次。
              </span>
            </label>

            <div className="recommendation-warning">
              二項分佈適合固定試驗次數、每次只有成功 / 失敗兩種結果、且每次成功機率相同的情況。
            </div>
          </div>
        </div>
      );
    }

    if (distributionType === "poisson") {
      return (
        <div className="two-column-layout" style={{ marginTop: 20 }}>
          <div>
            <label>
              平均發生次數 λ
              <input
                type="number"
                min="0.0001"
                step="0.1"
                value={lambda}
                onChange={(event) => setLambda(event.target.value)}
              />
              <span className="input-help">
                例如每小時平均接到 4 個電話。
              </span>
            </label>
          </div>

          <div>
            <label>
              目標發生次數 k
              <input
                type="number"
                min="0"
                step="1"
                value={poissonCount}
                onChange={(event) => setPoissonCount(event.target.value)}
              />
              <span className="input-help">
                例如想計算剛好發生 2 次的機率。
              </span>
            </label>

            <div className="recommendation-warning">
              泊松分佈適合描述一定時間或空間內的事件發生次數，例如來電數、事故數、到店人數等。
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="two-column-layout" style={{ marginTop: 20 }}>
        <div>
          <label>
            平均數 μ
            <input
              type="number"
              value={normalMean}
              onChange={(event) => setNormalMean(event.target.value)}
            />
          </label>

          <label>
            標準差 σ
            <input
              type="number"
              min="0.0001"
              step="0.1"
              value={normalSd}
              onChange={(event) => setNormalSd(event.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            目標值 X
            <input
              type="number"
              value={normalX}
              onChange={(event) => setNormalX(event.target.value)}
            />
            <span className="input-help">
              計算 X 以下的累積機率 P(X ≤ x)。
            </span>
          </label>

          <div className="recommendation-warning">
            正態分佈常用於成績、身高、測量誤差等接近鐘形分佈的連續型資料。
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="calculator-box">
      <h3>機率分佈計算器</h3>
      <p>
        用於計算二項分佈、泊松分佈和正態分佈的基本機率，適合統計入門、
        假設檢定學習和商業分析中的機率判斷。
      </p>

      <label style={{ marginTop: 20 }}>
        選擇分佈類型
        <select
          value={distributionType}
          onChange={(event) => setDistributionType(event.target.value)}
        >
          <option value="binomial">二項分佈 Binomial Distribution</option>
          <option value="poisson">泊松分佈 Poisson Distribution</option>
          <option value="normal">正態分佈 Normal Distribution</option>
        </select>
      </label>

      {renderInputs()}

      {!result ? (
        <div className="empty-state" style={{ marginTop: 20 }}>
          <strong>請輸入有效數據</strong>
          <p>
            請檢查輸入值是否合理，例如機率需介乎 0 至 1，次數需為非負整數，標準差必須大於 0。
          </p>
        </div>
      ) : (
        <>
          {result.type === "normal" ? (
            <div className="stats-result-grid">
              <div>
                <span>z-score</span>
                <strong>{formatNumber(result.z)}</strong>
              </div>

              <div>
                <span>P(X ≤ x)</span>
                <strong>{formatPercent(result.lowerProbability)}</strong>
              </div>

              <div>
                <span>P(X &gt; x)</span>
                <strong>{formatPercent(result.upperProbability)}</strong>
              </div>

              <div>
                <span>平均數至 X 之間</span>
                <strong>{formatPercent(result.betweenMeanAndX)}</strong>
              </div>
            </div>
          ) : (
            <div className="stats-result-grid">
              <div>
                <span>剛好等於 k 的機率</span>
                <strong>{formatPercent(result.exactProbability)}</strong>
              </div>

              <div>
                <span>累積機率 P(X ≤ k)</span>
                <strong>{formatPercent(result.cumulativeProbability)}</strong>
              </div>

              <div>
                <span>期望值</span>
                <strong>{formatNumber(result.expectedValue)}</strong>
              </div>

              <div>
                <span>標準差</span>
                <strong>{formatNumber(result.standardDeviation)}</strong>
              </div>
            </div>
          )}

          <div className="result-box">
            <strong>結果解讀：</strong>
            <p>{result.interpretation}</p>
          </div>

          <div className="detail-section">
            <h4>補充說明</h4>
            <ul>
              <li>二項分佈：用於固定次數的成功 / 失敗試驗。</li>
              <li>泊松分佈：用於一定時間或空間內的事件發生次數。</li>
              <li>正態分佈：用於接近鐘形分佈的連續型資料。</li>
            </ul>
          </div>

          <div className="recommendation-warning">
            注意：本工具主要用於教學和初步估算。正式研究仍應配合研究設計、
            分佈前提、樣本量和專業統計軟件進行判斷。
          </div>
        </>
      )}
    </div>
  );
}

export default ProbabilityCalculator;