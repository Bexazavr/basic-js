const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  if (matrix.flat().every((ele) => ele === false)) {
    return [
      [0, 0, 0],
      [0, 0, 0],
    ];
  }
  const tmp = matrix.map((ele) => ele.slice());
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === true) {
        tmp[i][j] = 1;
        count = 0;
        continue;
      }
      if (i - 1 >= 0 && matrix[i - 1][j] === true) {
        count += 1;
      }
      if (j + 1 < matrix.length && matrix[i][j + 1] === true) {
        count += 1;
      }
      if (i + 1 < matrix.length && matrix[i + 1][j] === true) {
        count += 1;
      }
      if (j - 1 >= 0 && matrix[i][j - 1] === true) {
        count += 1;
      }
      if (i - 1 > 0 && j - 1 >= 0 && matrix[i - 1][j - 1] === true) {
        count += 1;
      }
      if (i - 1 > 0 && j + 1 < matrix.length && matrix[i - 1][j + 1] === true) {
        count += 1;
      }
      if (
        i + 1 < matrix.length &&
        j - 1 >= 0 &&
        matrix[i + 1][j - 1] === true
      ) {
        count += 1;
      }
      if (
        i + 1 < matrix.length &&
        j + 1 < matrix.length &&
        matrix[i + 1][j + 1] === true
      ) {
        count += 1;
      }
      tmp[i][j] = count;
      count = 0;
    }
  }
  return tmp;
}

module.exports = {
  minesweeper,
};
