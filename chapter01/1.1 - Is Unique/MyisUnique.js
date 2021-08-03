/**
 * implement an algo to determine if a string has all unique chars
 * What if you can't use additional data structures
 */

// o(n^2)---> no additional data structures
// function isUnique(str) {
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j < str.length; j++) {
//       if (str[i] === str[j]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }
// O(n) with hash table
function isUnique(str) {
  let seen = {};
  for (let i = 0; i < str.length; i++) {
    if (seen[str[i]]) {
      return false;
    } else {
      seen[str[i]] = 1;
    }
  }
  return true;
}

/* TESTS */
console.log(isUnique('abcd'), 'true');
console.log(isUnique('abccd'), 'false');
console.log(isUnique('bhjjb'), 'false');
console.log(isUnique('mdjq'), 'true');
