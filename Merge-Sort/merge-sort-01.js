/**
 * Logarithms in sorting
 * Sorting costs O(n\log_{2}{n})O(nlog2n) time in general. More specifically, O(n\log_{2}{n})O(nlog2n) is the best worst-case runtime we can get for sorting.
 *
 * The easiest way to see why is to look at merge sort. In merge sort, the idea is to divide the array in half, sort the two halves, and then merge the two sorted halves into one sorted whole. But how do we sort the two halves? Well, we divide them in half, sort them, and merge the sorted halves...and so on.
 */

function mergeSort(arrayToSort) {
  // base case: arrays with fewer than 2 elements are sorted
  if (arrayToSort.length < 2) {
    return arrayToSort;
  }
  /**
   * step 1: divide the array in half
   * we need to round down avoid getting a half index
   */
  const midIndex = Math.floor(arrayToSort.length / 2);

  const left = arrayToSort.slice(0, midIndex);
  console.log('left', left);
  const right = arrayToSort.slice(midIndex);
  console.log('right', right);
  // step 2: sort each half
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // step 3: merge the sorted halves
  const sortedArray = [];
  let currentLeftIndex = 0;
  let currentRightIndex = 0;

  while (sortedArray.length < left.length + right.length) {
    /**
     * sortedLeft first element comes next
     * if it's less than sortedRight first
     * element or if sortedRight is exhausted
     */
    if (
      currentLeftIndex < left.length &&
      (currentRightIndex === right.length ||
        sortedLeft[currentLeftIndex] < sortedRight[currentRightIndex])
    ) {
      sortedArray.push(sortedLeft[currentLeftIndex]);
      currentLeftIndex += 1;
    } else {
      sortedArray.push(sortedRight[currentRightIndex]);
      currentRightIndex += 1;
    }
  }

  return sortedArray;
}

const arrayToSort = [34, 3, 434, 2, 4, 55, 6, 83];

console.log(mergeSort(arrayToSort));
