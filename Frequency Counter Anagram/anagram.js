// function validAnagram(first, second) {
//   if (first.length !== second.length) {
//     return false;
//   }

//   const lookup = {};

//* loop through the first string, create lookup object key, if empty add 1, else += 1;

//   for (let i = 0; i < first.length; i++) {
//     const letter = first[i];
//     //* if letter exists in the lookup object, increment, otherwise set to 1
//     lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
//   }
//   console.log(lookup);

//   for (let i = 0; i < second.length; i++) {
//     const letter = second[i];
//     //* compare str2 to lookup key, can't find letter in lookup or letter is zero then it's not an anagram, if there is key -= 1;
//     if (!lookup[letter]) {
//       return false;
//     } else {
//       lookup[letter] -= 1;
//     }
//   }

//   return true;
// }

function validAnagram(str1, str2) {

}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
console.log(validAnagram('anagrams', 'nagaramm'));
// false
console.log(validAnagram('sunny', 'ynnus'));
// true
console.log(validAnagram('sunn', 'ynnus'));
// false
