export function parseNumberInput(input) {
  if (!input || typeof input !== "string") {
    return [];
  }

  return input
    .split(/[\s,，;；\n\r\t]+/)
    .map((value) => Number(value.trim()))
    .filter((value) => Number.isFinite(value));
}

export function sum(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0;
  }

  return numbers.reduce((total, value) => total + value, 0);
}

export function mean(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0;
  }

  return sum(numbers) / numbers.length;
}

export function median(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0;
  }

  const sorted = [...numbers].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }

  return sorted[middle];
}

export function mode(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return [];
  }

  const frequencyMap = new Map();

  numbers.forEach((number) => {
    frequencyMap.set(number, (frequencyMap.get(number) || 0) + 1);
  });

  const maxFrequency = Math.max(...frequencyMap.values());

  if (maxFrequency <= 1) {
    return [];
  }

  return [...frequencyMap.entries()]
    .filter(([, count]) => count === maxFrequency)
    .map(([number]) => number);
}

export function min(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0;
  }

  return Math.min(...numbers);
}

export function max(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0;
  }

  return Math.max(...numbers);
}

export function range(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0;
  }

  return max(numbers) - min(numbers);
}

export function populationVariance(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0;
  }

  const average = mean(numbers);

  return (
    numbers.reduce((total, value) => total + Math.pow(value - average, 2), 0) /
    numbers.length
  );
}

export function sampleVariance(numbers) {
  if (!Array.isArray(numbers) || numbers.length < 2) {
    return 0;
  }

  const average = mean(numbers);

  return (
    numbers.reduce((total, value) => total + Math.pow(value - average, 2), 0) /
    (numbers.length - 1)
  );
}

export function populationStandardDeviation(numbers) {
  return Math.sqrt(populationVariance(numbers));
}

export function sampleStandardDeviation(numbers) {
  return Math.sqrt(sampleVariance(numbers));
}

export function coefficientOfVariation(numbers) {
  const average = mean(numbers);

  if (average === 0) {
    return 0;
  }

  return sampleStandardDeviation(numbers) / average;
}

export function percentile(numbers, percentileValue) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0;
  }

  if (percentileValue < 0 || percentileValue > 100) {
    return 0;
  }

  const sorted = [...numbers].sort((a, b) => a - b);
  const index = (percentileValue / 100) * (sorted.length - 1);
  const lowerIndex = Math.floor(index);
  const upperIndex = Math.ceil(index);
  const weight = index - lowerIndex;

  if (lowerIndex === upperIndex) {
    return sorted[lowerIndex];
  }

  return sorted[lowerIndex] * (1 - weight) + sorted[upperIndex] * weight;
}

export function quartiles(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return {
      q1: 0,
      q2: 0,
      q3: 0,
      iqr: 0
    };
  }

  const q1 = percentile(numbers, 25);
  const q2 = percentile(numbers, 50);
  const q3 = percentile(numbers, 75);

  return {
    q1,
    q2,
    q3,
    iqr: q3 - q1
  };
}

export function zScore(value, average, standardDeviation) {
  if (!Number.isFinite(value) || !Number.isFinite(average) || standardDeviation === 0) {
    return 0;
  }

  return (value - average) / standardDeviation;
}

export function covariance(xValues, yValues) {
  if (
    !Array.isArray(xValues) ||
    !Array.isArray(yValues) ||
    xValues.length !== yValues.length ||
    xValues.length < 2
  ) {
    return 0;
  }

  const xMean = mean(xValues);
  const yMean = mean(yValues);

  return (
    xValues.reduce((total, xValue, index) => {
      return total + (xValue - xMean) * (yValues[index] - yMean);
    }, 0) /
    (xValues.length - 1)
  );
}

export function pearsonCorrelation(xValues, yValues) {
  if (
    !Array.isArray(xValues) ||
    !Array.isArray(yValues) ||
    xValues.length !== yValues.length ||
    xValues.length < 2
  ) {
    return 0;
  }

  const xStandardDeviation = sampleStandardDeviation(xValues);
  const yStandardDeviation = sampleStandardDeviation(yValues);

  if (xStandardDeviation === 0 || yStandardDeviation === 0) {
    return 0;
  }

  return covariance(xValues, yValues) / (xStandardDeviation * yStandardDeviation);
}

export function simpleLinearRegression(xValues, yValues) {
  if (
    !Array.isArray(xValues) ||
    !Array.isArray(yValues) ||
    xValues.length !== yValues.length ||
    xValues.length < 2
  ) {
    return {
      slope: 0,
      intercept: 0,
      r: 0,
      rSquared: 0,
      predict: () => 0
    };
  }

  const xMean = mean(xValues);
  const yMean = mean(yValues);

  const numerator = xValues.reduce((total, xValue, index) => {
    return total + (xValue - xMean) * (yValues[index] - yMean);
  }, 0);

  const denominator = xValues.reduce((total, xValue) => {
    return total + Math.pow(xValue - xMean, 2);
  }, 0);

  if (denominator === 0) {
    return {
      slope: 0,
      intercept: yMean,
      r: 0,
      rSquared: 0,
      predict: () => yMean
    };
  }

  const slope = numerator / denominator;
  const intercept = yMean - slope * xMean;
  const r = pearsonCorrelation(xValues, yValues);
  const rSquared = r * r;

  return {
    slope,
    intercept,
    r,
    rSquared,
    predict: (xValue) => intercept + slope * xValue
  };
}

export function standardError(numbers) {
  if (!Array.isArray(numbers) || numbers.length < 2) {
    return 0;
  }

  return sampleStandardDeviation(numbers) / Math.sqrt(numbers.length);
}

export function confidenceIntervalForMean(numbers, zCritical = 1.96) {
  if (!Array.isArray(numbers) || numbers.length < 2) {
    return {
      mean: 0,
      lower: 0,
      upper: 0,
      marginOfError: 0
    };
  }

  const average = mean(numbers);
  const se = standardError(numbers);
  const marginOfError = zCritical * se;

  return {
    mean: average,
    lower: average - marginOfError,
    upper: average + marginOfError,
    marginOfError
  };
}

export function descriptiveSummary(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return {
      count: 0,
      sum: 0,
      mean: 0,
      median: 0,
      mode: [],
      min: 0,
      max: 0,
      range: 0,
      sampleVariance: 0,
      sampleStandardDeviation: 0,
      populationVariance: 0,
      populationStandardDeviation: 0,
      coefficientOfVariation: 0,
      q1: 0,
      q2: 0,
      q3: 0,
      iqr: 0
    };
  }

  const quartileResult = quartiles(numbers);

  return {
    count: numbers.length,
    sum: sum(numbers),
    mean: mean(numbers),
    median: median(numbers),
    mode: mode(numbers),
    min: min(numbers),
    max: max(numbers),
    range: range(numbers),
    sampleVariance: sampleVariance(numbers),
    sampleStandardDeviation: sampleStandardDeviation(numbers),
    populationVariance: populationVariance(numbers),
    populationStandardDeviation: populationStandardDeviation(numbers),
    coefficientOfVariation: coefficientOfVariation(numbers),
    q1: quartileResult.q1,
    q2: quartileResult.q2,
    q3: quartileResult.q3,
    iqr: quartileResult.iqr
  };
}