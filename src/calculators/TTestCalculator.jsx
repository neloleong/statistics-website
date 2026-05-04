import { useMemo, useState } from "react";
import {
  mean,
  parseNumberInput,
  sampleStandardDeviation,
  sampleVariance
} from "../utils/statistics";
import { formatNumber } from "../utils/formatters";

function TTestCalculator() {
  const [groupAInput, setGroupAInput] = useState("78, 82, 85, 88, 90");
  const [groupBInput, setGroupBInput] = useState("70, 73, 75, 79, 81");
  const [testType, setTestType] = useState("independent");

  const groupA = useMemo(() => parseNumberInput(groupAInput), [groupAInput]);
  const groupB = useMemo(() => parseNumberInput(groupBInput), [groupBInput]);

  const result = useMemo(() => {
    if (testType === "paired") {
      return calculatePairedTTest(groupA, groupB);
    }

    return calculateIndependentTTest(groupA, groupB);
  }, [groupA, groupB, testType]);

  return (
    <div className="calculator-box">
      <h3>t-test 計算器</h3>
      <p>
        用於比較兩組平均數是否存在差異。第一版先計算 t 值、自由度和基本解釋。
      </p>

      <label>
        檢定類型
        <select value={testType} onChange={(event) => setTestType(event.target.value)}>
          <option value="independent">獨立樣本 t-test</option>
          <option value="paired">配對樣本 t-test</option>
        </select>
      </label>

      <label>
        第一組數據
        <textarea
          value={groupAInput}
          onChange={(event) => setGroupAInput(event.target.value)}
          placeholder="例如：78, 82, 85, 88, 90"
        />
      </label>

      <label>
        第二組數據
        <textarea
          value={groupBInput}
          onChange={(event) => setGroupBInput(event.target.value)}
          placeholder="例如：70, 73, 75, 79, 81"
        />
      </label>

      {!result.isValid && (
        <div className="recommendation-warning">{result.message}</div>
      )}

      <div className="stats-result-grid">
        <div>
          <span>第一組樣本數</span>
          <strong>{groupA.length}</strong>
        </div>

        <div>
          <span>第二組樣本數</span>
          <strong>{groupB.length}</strong>
        </div>

        <div>
          <span>第一組平均數</span>
          <strong>{formatNumber(mean(groupA))}</strong>
        </div>

        <div>
          <span>第二組平均數</span>
          <strong>{formatNumber(mean(groupB))}</strong>
        </div>

        <div>
          <span>t 值</span>
          <strong>{formatNumber(result.tValue, 4)}</strong>
        </div>

        <div>
          <span>自由度 df</span>
          <strong>{formatNumber(result.degreesOfFreedom, 2)}</strong>
        </div>

        <div>
          <span>差異方向</span>
          <strong>{result.direction}</strong>
        </div>

        <div>
          <span>差異大小</span>
          <strong>{formatNumber(result.difference)}</strong>
        </div>
      </div>

      <div className="result-box">
        <strong>結果解釋</strong>
        <p>{result.interpretation}</p>
      </div>

      <div className="recommendation-warning">
        目前版本先提供 t 值和自由度。正式研究或論文報告仍應使用專業統計軟件計算精確 p-value。
      </div>
    </div>
  );
}

function calculateIndependentTTest(groupA, groupB) {
  if (groupA.length < 2 || groupB.length < 2) {
    return invalidResult("兩組數據都至少需要 2 個數值。");
  }

  const meanA = mean(groupA);
  const meanB = mean(groupB);
  const varianceA = sampleVariance(groupA);
  const varianceB = sampleVariance(groupB);

  const standardError = Math.sqrt(varianceA / groupA.length + varianceB / groupB.length);

  if (standardError === 0) {
    return invalidResult("標準誤為 0，不能計算 t 值。");
  }

  const difference = meanA - meanB;
  const tValue = difference / standardError;

  const numerator = Math.pow(varianceA / groupA.length + varianceB / groupB.length, 2);
  const denominator =
    Math.pow(varianceA / groupA.length, 2) / (groupA.length - 1) +
    Math.pow(varianceB / groupB.length, 2) / (groupB.length - 1);

  const degreesOfFreedom = denominator === 0 ? groupA.length + groupB.length - 2 : numerator / denominator;

  return {
    isValid: true,
    message: "",
    tValue,
    degreesOfFreedom,
    difference,
    direction: getDirection(difference),
    interpretation:
      "這是 Welch 版本的獨立樣本 t-test 近似計算。t 值絕對值越大，代表兩組平均數差異相對標準誤越明顯。"
  };
}

function calculatePairedTTest(groupA, groupB) {
  if (groupA.length < 2 || groupB.length < 2) {
    return invalidResult("兩組數據都至少需要 2 個數值。");
  }

  if (groupA.length !== groupB.length) {
    return invalidResult("配對樣本 t-test 要求兩組數據數量完全相同。");
  }

  const differences = groupA.map((value, index) => value - groupB[index]);
  const meanDifference = mean(differences);
  const sdDifference = sampleStandardDeviation(differences);
  const standardError = sdDifference / Math.sqrt(differences.length);

  if (standardError === 0) {
    return invalidResult("差值標準誤為 0，不能計算 t 值。");
  }

  const tValue = meanDifference / standardError;

  return {
    isValid: true,
    message: "",
    tValue,
    degreesOfFreedom: differences.length - 1,
    difference: meanDifference,
    direction: getDirection(meanDifference),
    interpretation:
      "這是配對樣本 t-test，重點是比較同一批對象兩次測量之間的平均差值。t 值絕對值越大，代表前後差異越明顯。"
  };
}

function invalidResult(message) {
  return {
    isValid: false,
    message,
    tValue: 0,
    degreesOfFreedom: 0,
    difference: 0,
    direction: "未能判斷",
    interpretation: "請輸入有效數據後再查看結果。"
  };
}

function getDirection(difference) {
  if (difference > 0) {
    return "第一組平均數較高";
  }

  if (difference < 0) {
    return "第二組平均數較高";
  }

  return "兩組平均數相同";
}

export default TTestCalculator;