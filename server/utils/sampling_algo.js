function calculateVariance(values) {
  const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
  const squaredDifferences = values.map((value) => Math.pow(value - mean, 2));
  const variance =
    squaredDifferences.reduce((sum, squaredDiff) => sum + squaredDiff, 0) /
    values.length;
  return variance;
}

export const sampling = (data, windowSize, threshold) => {
  const compressedData = [data[0]]; // Always include the first data point
  let windowValues = [data[0].Profit_Percentage];

  for (let i = 1; i < data.length; i++) {
    const currentProfitPercentage = data[i].Profit_Percentage;

    // Maintain a moving window of profit percentage values
    windowValues.push(currentProfitPercentage);
    if (windowValues.length > windowSize) {
      windowValues.shift(); // Remove the oldest value to keep the window size constant
    }

    // Calculate the variance of the values in the window
    const windowVariance = calculateVariance(windowValues);

    // Check if the variance exceeds the threshold
    if (windowVariance > threshold) {
      compressedData.push(data[i]);
      windowValues = [currentProfitPercentage]; // Start a new window with the current value
    }
  }

  return compressedData.map((item) => {
    return {
      Timestamp: item.Timestamp.substring(0, 7),
      Profit_Percentage: item.Profit_Percentage,
    };
  });
};
