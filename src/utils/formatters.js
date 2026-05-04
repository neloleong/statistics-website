export function formatNumber(value, digits = 2) {
  if (!Number.isFinite(value)) {
    return "0";
  }

  return Number(value).toLocaleString("zh-Hant", {
    minimumFractionDigits: 0,
    maximumFractionDigits: digits
  });
}

export function formatFixed(value, digits = 2) {
  if (!Number.isFinite(value)) {
    return "0.00";
  }

  return Number(value).toFixed(digits);
}

export function formatPercent(value, digits = 2) {
  if (!Number.isFinite(value)) {
    return "0%";
  }

  return `${(value * 100).toFixed(digits)}%`;
}

export function formatSignedNumber(value, digits = 2) {
  if (!Number.isFinite(value)) {
    return "0";
  }

  if (value > 0) {
    return `+${value.toFixed(digits)}`;
  }

  return value.toFixed(digits);
}

export function formatMode(values) {
  if (!Array.isArray(values) || values.length === 0) {
    return "無明顯眾數";
  }

  return values.map((value) => formatNumber(value)).join("、");
}

export function formatFormulaText(text) {
  if (!text) {
    return "";
  }

  return String(text)
    .replaceAll("xbar", "x̄")
    .replaceAll("ybar", "ȳ")
    .replaceAll("sigma", "σ")
    .replaceAll("mu", "μ")
    .replaceAll("beta", "β");
}

export function truncateText(text, maxLength = 80) {
  if (!text) {
    return "";
  }

  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength)}...`;
}

export function getDifficultyClass(level) {
  if (!level) {
    return "badge-basic";
  }

  if (level.includes("入門")) {
    return "badge-basic";
  }

  if (level.includes("中階")) {
    return "badge-medium";
  }

  if (level.includes("高階")) {
    return "badge-advanced";
  }

  return "badge-basic";
}

export function getStatusText(status) {
  const statusMap = {
    available: "可使用",
    planned: "規劃中",
    building: "開發中"
  };

  return statusMap[status] || "規劃中";
}

export function getStatusClass(status) {
  const statusMap = {
    available: "status-available",
    planned: "status-planned",
    building: "status-building"
  };

  return statusMap[status] || "status-planned";
}

export function getCorrelationStrength(r) {
  const absoluteValue = Math.abs(r);

  if (absoluteValue >= 0.8) {
    return "極強相關";
  }

  if (absoluteValue >= 0.6) {
    return "強相關";
  }

  if (absoluteValue >= 0.4) {
    return "中等相關";
  }

  if (absoluteValue >= 0.2) {
    return "弱相關";
  }

  return "幾乎沒有線性相關";
}

export function getCorrelationDirection(r) {
  if (r > 0) {
    return "正相關";
  }

  if (r < 0) {
    return "負相關";
  }

  return "無方向";
}

export function getPValueInterpretation(pValue, alpha = 0.05) {
  if (!Number.isFinite(pValue)) {
    return "請輸入有效的 p-value。";
  }

  if (pValue < alpha) {
    return `p-value 小於 ${alpha}，通常可認為結果具有統計顯著性。`;
  }

  return `p-value 不小於 ${alpha}，目前證據不足以認為結果具有統計顯著性。`;
}

export function getZScoreInterpretation(z) {
  if (!Number.isFinite(z)) {
    return "請輸入有效的 z-score。";
  }

  const absZ = Math.abs(z);

  if (absZ >= 3) {
    return "該數值距離平均值非常遠，可能是極端值。";
  }

  if (absZ >= 2) {
    return "該數值距離平均值較遠，需要留意。";
  }

  if (absZ >= 1) {
    return "該數值與平均值有一定距離，但仍屬常見範圍。";
  }

  return "該數值接近平均值。";
}

export function cleanSearchText(text) {
  return String(text || "")
    .trim()
    .toLowerCase();
}

export function includesKeyword(targetText, keyword) {
  const cleanTarget = cleanSearchText(targetText);
  const cleanKeyword = cleanSearchText(keyword);

  if (!cleanKeyword) {
    return true;
  }

  return cleanTarget.includes(cleanKeyword);
}