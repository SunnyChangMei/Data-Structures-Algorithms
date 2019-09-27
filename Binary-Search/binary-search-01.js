/**
 ** Logarithms in binary search (ex. 1)
This comes up in the time cost of binary search, which is an algorithm for finding a target number in a sorted array. The process goes like this:

**1. Start with the middle number: is it bigger or smaller than our target number? Since the array is sorted, this tells us if the target would be in the left half or the right half of our array.
**2. We've effectively divided the problem in half. We can "rule out" the whole half of the array that we know doesn't contain the target number.
**3. Repeat the same approach (of starting in the middle) on the new half-size problem. Then do it again and again, until we either find the number or "rule out" the whole set.
 */

//! Array must be sorted

function binarySearch(target, sortedArray) {
  /**
   * ? See if target appears in sortedArray
   * we think of floorIndex and ceilingIndex as 'walls' around
   * the possible positions of our target so by -1 below we mean to
   * start our wall "to the left" of the 0th index
   * we don't mean 'the last index
   */
  let floorIndex = -1;
  let ceilingIndex = sortedArray.length;

  /**
   * if there isn't at least 1 index between floor and ceiling
   * we've run out of guesses and the number must not be present
   */

  while (floorIndex + 1 < ceilingIndex) {
    /**
     * find the index halfway between the floor and ceiling
     * we have to round down to avoid getting a half index
     */
    const distance = ceilingIndex - floorIndex;
    console.log('distance', distance);

    const halfDistance = Math.floor(distance / 2);
    const guessIndex = floorIndex + halfDistance;

    const guessValue = sortedArray[guessIndex];
    console.log('guessValue', guessValue);

    if (guessValue === target) {
      return true;
    }
    if (guessValue > target) {
      //target is to the left, so move ceiling to the left
      ceilingIndex = guessIndex;
    } else {
      //target is to the right, so move floor to the right
      floorIndex = guessIndex;
    }
  }
  return false;
}

const sortedArray = [3, 4, 5, 7, 13, 16, 18, 33];

console.log(binarySearch(4, sortedArray));
