const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  try {
    date.toLocaleTimeString();
  } catch (e) {
    throw new Error("Invalid date!");
  }
  let month;
  date.getMonth() === 0
    ? (month = date.getMonth() + 1)
    : (month = date.getMonth());
  if (month === 1 && date.getDate() > 28) {
    throw new Error("Invalid date!");
  }
  const seasons = {
    winter: [1, 11, 12],
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10],
  };
  for (let k in seasons) {
    if (seasons[k].includes(month)) {
      return k;
    }
  }
}

module.exports = {
  getSeason,
};
