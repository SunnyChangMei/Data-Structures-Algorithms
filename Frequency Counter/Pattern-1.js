//* Brute solution/Naive solution O(n2)
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     const correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }

//* O(n)
const same = (arr1, arr2) => {
  // if arr1.length !== arr2.length, return false, done
  if (arr1.length !== arr2.length) {
    return false;
  }
  // create empty squared array for each number
  // create empty matched number array if squared number matched
  const squaredArr = [];
  const matchedNumbers = [];

  // use forEach to loop through arr1, then squared each number element, push to the squaredarr
  //! O(n)
  arr1.forEach(number => squaredArr.push(number * number));

  // use for loop over squaredArr, if arr2 includes squaredarr[i], then push the matched number to matchedArray, else return null
  //! O(n)
  for (let i = 0; i < squaredArr.length; i++) {
    arr2.includes(squaredArr[i]) ? matchedNumbers.push(squaredArr[i]) : null;
  }
  // return true if matchedNumbers length === squaredArr length, else return false
  return matchedNumbers.length === squaredArr.length;
};

//* O(n)
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   const freCounter1 = {};
//   const freCounter2 = {};
//   for (const val of arr1) {
//     freCounter1[val] = (freCounter1[val] || 0) + 1;
//   }
//   for (const val of arr2) {
//     freCounter2[val] = (freCounter2[val] || 0) + 1;
//   }
//   for (const key in freCounter1) {
//     if (!(key ** 2 in freCounter2)) {
//       return false;
//     }
//     if (freCounter2[key ** 2] !== freCounter1[key]) {
//       return false;
//     }
//   }
//   return true;
// }

const arr1 = [1, 2, 3, 2];
const arr2 = [9, 1, 4, 4];

console.log(same(arr1, arr2));
