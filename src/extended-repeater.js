const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let newStr = [];
  let almostThere;
  if (String(options["addition"])) {
    if (options["additionRepeatTimes"]) {
      newStr.push(str + String(options["addition"]));
      for (let i = 1; i < options["additionRepeatTimes"]; i++) {
        newStr.push(String(options["addition"]));
      }
    } else {
      newStr.push(str);
      newStr.push(options["addition"]);
    }
  }
  if (options["additionRepeatTimes"]) {
    almostThere = newStr.join(options["additionSeparator"] || "|");
  } else {
    almostThere = newStr.join("");
  }
  let completedArr = [];
  if (options["repeatTimes"]) {
    if (newStr.length !== 0) {
      for (let i = 0; i < options["repeatTimes"]; i++) {
        completedArr.push(almostThere);
      }
    } else {
      for (let i = 0; i < options["repeatTimes"]; i++) {
        completedArr.push(str);
      }
    }
  }
  return completedArr.length > 0
    ? completedArr.join(options["separator"] || "+")
    : almostThere;
}

module.exports = {
  repeater,
};
