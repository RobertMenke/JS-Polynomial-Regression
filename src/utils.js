/**
 * Sums up all x coordinates raised to a power
 * @param anyData
 * @param power
 * @returns {number}
 */
export const sumX = (anyData, power) =>
  anyData.reduce((acc, { x }) => acc + Math.pow(x, power), 0);

/**
 * sums up all x * y where x is raised to a power
 * @param anyData
 * @param power
 * @returns {number}
 */
export const sumXTimesY = (anyData, power) =>
  anyData.reduce((acc, { x, y }) => acc + Math.pow(x, power) * y, 0);

/**
 * Sums up all Y's raised to a power
 * @param anyData
 * @param power
 * @returns {number}
 */
export const sumY = (anyData, power) =>
  anyData.reduce((acc, { y }) => acc + Math.pow(y, power), 0);
