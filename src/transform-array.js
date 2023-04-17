const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let data = [...arr];
  let transformed = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "--discard-next") {
      i++;
    } else if (data[i] === "--discard-prev") {
      if (data[i - 2] !== "--discard-next" && i !== 0) {
        transformed.pop();
      }
    } else if (data[i] === "--double-next") {
      if (i !== data.length - 1) {
        transformed.push(data[i + 1]);
      }
    } else if (data[i] === "--double-prev") {
      if (i !== 0) {
        if (data[i - 2] !== "--discard-next")
          transformed.push(transformed[transformed.length - 1]);
      }
    } else {
      transformed.push(data[i]);
    }
  }
  return transformed;
}

module.exports = {
  transform,
};
