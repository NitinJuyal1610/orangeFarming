function calculateRepresentativeProfit(sample) {
  let weightedSum = 0;
  let totalWeight = 0;
  for (const point of sample) {
    const weight =
      (point.Timestamp - sample[0].Timestamp) /
      (sample[sample.length - 1].Timestamp - sample[0].Timestamp);
    weightedSum += weight * point.Profit_Percentage;
    totalWeight += weight;
  }

  return weightedSum / totalWeight;
}
export const sampling = (data, maxDataPoints = 100) => {
  const downsampledData = [];
  let currentSample = [];
  let lastTimestamp = null;

  for (const { Timestamp, Profit_Percentage } of data) {
    // Ensure consistent 15-minute intervals
    if (lastTimestamp && new Date(Timestamp) - lastTimestamp !== 900000) {
      throw new Error('Inconsistent timestamp intervals');
    }
    lastTimestamp = new Date(Timestamp);

    // Add to current sample
    currentSample.push({ Timestamp, Profit_Percentage });

    // Check for change or sample size
    if (
      currentSample.length >= 4 ||
      (currentSample.length > 1 &&
        Math.abs(
          currentSample[currentSample.length - 1].Profit_Percentage -
            currentSample[0].Profit_Percentage,
        ) >= 1)
    ) {
      // Determine representative point for the sample

      const representativeTimestamp =
        currentSample[Math.floor(currentSample.length / 2)].Timestamp;
      const representativeProfitPercentage =
        calculateRepresentativeProfit(currentSample);

      downsampledData.push({
        timestamp: representativeTimestamp,
        profitPercentage: representativeProfitPercentage,
      });

      // Reset sample
      currentSample = [];
    }

    // Limit downsampled data size
    if (downsampledData.length >= maxDataPoints) {
      break;
    }
  }

  // Add any remaining points
  if (currentSample.length > 0) {
    const representativeTimestamp =
      currentSample[currentSample.length / 2].timestamp;
    const representativeProfitPercentage =
      calculateRepresentativeProfit(currentSample);
    downsampledData.push({
      timestamp: representativeTimestamp,
      profitPercentage: representativeProfitPercentage,
    });
  }

  return downsampledData;
};
