/**
 * Rotate Matrix.
 * Given an image represented by an N x N matrix where each 
 * pixel is represented by an integer, write a method to rotate
 * the matrix 90 degrees.
 */

// solution is O(n^2) time and space
function rotateMatrix(matrix) {
  if (matrix.length === 0 || matrix.length !== matrix[0].length) return false;
  let length = matrix.length;
  let resultMatrix = [];

  for (let i = 0; i < length; i++) {
    let row = [];
    for (let j = 0; j < length; j++) {
      row.push(0);
    }
    resultMatrix.push(row);
  }

  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      let col = row.length - 1 - i;
      resultMatrix[j][col] = row[j];
    }
  }
  return resultMatrix;
}

// TEST
var testMatrix = [
  [1, 2, 3, 4],
  [0, 1, 2, 3],
  [0, 0, 1, 2],
  [1, 0, 0, 1]
];

console.log('before:');
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);

console.log("result", rotateMatrix(testMatrix));

console.log('after:');
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);