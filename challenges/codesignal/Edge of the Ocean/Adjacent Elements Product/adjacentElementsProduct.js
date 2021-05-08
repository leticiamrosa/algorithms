/**
 *
 * Given an array of integers, find the pair of adjacent elements that has the largest product and return that product
 */

export const adjacentElementsProduct = (inputArray) => {
  let max = -Infinity;

  for (let i = 1; i < inputArray.length; i++) {
      max = Math.max(inputArray[i] * inputArray[i - 1], max);
  }

  return max;
};

export default adjacentElementsProduct;