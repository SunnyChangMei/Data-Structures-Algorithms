/**
 *1. The indexOf() method returns the first index at which a given element can be found in the array, or       -1 if it is not present.
 *2. The splice() method changes the contents of an array by removing or replacing existing elements and/      or adding new elements
 */
//* Brute solution/Naive solution O(n2)
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   // loop over arr1, check if

//   for (let i = 0; i < arr1.length; i++) {
//     const squaredNum = arr1[i] ** 2; //?
//     const correctIndex = arr2.indexOf(squaredNum); //?
//     if (correctIndex === -1) {
//       return false;
//     }
//     arr2.splice(correctIndex, 1); //?
//   }
//   return true;
// }

//* O(n)
function same(arr1, arr2) {
  // edge case make sure both arr in the same size
  if (arr1.length !== arr2.length) {
    return false;
  }
  // construction object, hash map
  const freCounter1 = {};
  const freCounter2 = {};

  // use for of loop, if the val not there, add 0, else add 1 to val
  for (const val of arr1) {
    freCounter1[val] = (freCounter1[val] || 0) + 1; //?
  }
  for (const val of arr2) {
    freCounter2[val] = (freCounter2[val] || 0) + 1; //?
  }

  // use for in loop to check KEY of the freqCounter1 object, if key squared not find in freqCounter2 key object, return false, done
  for (const key in freCounter1) {
    if (!(key ** 2 in freCounter2)) {
      return false;
    }
    // if we check all key, then we then to check the value
    if (freCounter2[key ** 2] !== freCounter1[key] /*?*/) {
      return false;
    }
  }
  return true;
}

// console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
console.log(same([3, 2, 3, 2], [9, 3, 4, 4]));
