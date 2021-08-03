/**
 * given two strings, checkPerm returns true if one is a permutation of the other
 * 
 */
// 
function checkPerm(str1, str2) {
  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let char of str1) {
    if (freqCounter1[char]) {
      freqCounter1++;
    } else {
      freqCounter1 = 1;
    }
  }

  for (let char of str2) {
    if (freqCounter2[char]) {
      freqCounter2++;
    } else {
      freqCounter2 = 1;
    }
  }
  for (let key in freqCounter1) {
    if (freqCounter1[key] !== freqCounter2[key]) {
      return false;
    }
  }
  return true;
}

// Tests
console.log(checkPerm('aba', 'aab'), true);

console.log(checkPerm('aba', 'aaba'), false);

console.log(checkPerm('aba', 'aa'), false);
