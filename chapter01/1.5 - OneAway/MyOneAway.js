/**
 * Three types of edits: insert a character, remove a character
 * or replace a character. Given two strings to check if they are one away
 */

function oneAway(str1, str2) {
  if (Math.abs((str1.length - str2.length)) > 1) {
    return false;
  }
  if (str1.length === str2.length) {
    return sameLengths(str1, str2);
  } else {
    return diffLengths(str1, str2);
  }
}

function sameLengths(str1, str2) {
  let numEdits = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) numEdits++;
  }
  return numEdits <= 1
}

function diffLengths(str1, str2) {
  let longerStr = str1;
  let shorterStr = str2;
  if (str2.length > str1.length) {
    longerStr = str2;
    shorterStr = str1;
  }
  let numEdits = 0;
  let pointer = 0;
  for (let i = 0; i < longerStr.length; i++) {
    if (longerStr[i] === shorterStr[pointer]) {
      pointer++;
    } else {
      numEdits++;
    }
  }
  console.log("numEdits", numEdits);
  return numEdits <= 1;
}


console.log(oneAway("pale", "ple"), true);
console.log(oneAway("pales", "pale"), true);
console.log(oneAway("pale", "bale"), true);
console.log(oneAway("pale", "bake"), false);
console.log(oneAway("spale", "pale"), true);