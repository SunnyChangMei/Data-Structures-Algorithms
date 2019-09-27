//? find the FIRST PAIR indices if sum = 0;

// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }

//! sorted array => return index if pair += 0
// function sumZero(arr) {
//   // start from 0 index, and last index
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     const sum = arr[left] + arr[right];
//     if (sum === 0) {
//       return [arr[left], arr[right]];
//     } else if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
// }

function sumZero(arr) {
  while (arr.length) {
    const smallestEl = arr[0];
    const largestEl = arr[arr.length - 1];
    const sum = smallestEl + largestEl;

    if (sum === 0) {
      return [smallestEl, largestEl];
    } else if (sum > 0) {
      arr.pop();
    } else if (sum < 0) {
      arr.shift();
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
