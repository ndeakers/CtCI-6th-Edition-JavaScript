/**
 * implement a basic string comp method using the counts
 * of repeated chars
 * if result string is not smaller than original--> return original
 *
 */

function strComp(str) {
  // loop over the string
  // if current and next are the same
  // loop until you find another char
  // add that to result

  let comp = "";
  let i = 0
  while (i < str.length) {
    let char = str[i];
    let currentIdx = i;
    let count = 0
    while (str[currentIdx] === char) {
      count++;
      currentIdx++;
    }
    comp += char + count
    i += count;
  }
  return comp.length < str.length ? comp : str;
}


// Test
console.log('aaaaaa', strComp('aaaaaa'), 'a6');
console.log('a', strComp('a'), 'a');
console.log('aabcccccaaa', strComp('aabcccccaaa'), 'a2b1c5a3');