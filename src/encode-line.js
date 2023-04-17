const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let tmp = null;
  let count;
  let out = "";
  str.split("").map((ele, idx) => {
    if (tmp === null) {
      tmp = ele;
      count = 1;
    } else if (tmp === ele) {
      count++;
      if (idx === str.length - 1) {
        out += count;
        out += ele;
      }
    } else {
      if (count <= 1) {
        out += tmp;
        tmp = ele;
        count = 1;
      } else {
        out += count;
        out += tmp;
        tmp = ele;
        count = 1;
      }
      if (idx === str.length - 1) {
        out += ele;
      }
    }
    return null;
  });
  return out;
}

module.exports = {
  encodeLine,
};
