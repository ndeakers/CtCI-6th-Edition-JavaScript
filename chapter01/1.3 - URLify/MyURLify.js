/**
 * Write a method called urlify to replace all spaces in a string 
 * with "%20". If space at the end of array, ignore.
 */

function urlify(str, length) {
  let words = [];
  let word = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      word += str[i];
    }
    if ((str[i] !== " " && str[i + 1] === " ") || (str[i] !== " " && str[i + 1] === undefined)) {
      words.push(word);
      word = "";
    }
  }
  return words.join("%20");
}


console.log(urlify('Mr John Smith    ', 13), 'Mr%20John%20Smith');