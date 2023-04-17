const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const tmp = arr.filter((ele) => ele !== -1).sort((a, b) => a - b);
  let idx = -1;
  return arr.map((ele) => {
    if (ele === -1) {
      return ele;
    }
    idx += 1;
    return tmp[idx];
  });
}

module.exports = {
  sortByHeight,
};
