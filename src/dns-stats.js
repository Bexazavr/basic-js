const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const data = domains.map((ele) => ele.split(".").reverse());
  const out = {};
  data.forEach((arr) => {
    let tmp = "";
    arr.forEach((ele) => {
      tmp += `.${ele}`;
      if (tmp in out) {
        out[tmp]++;
      } else {
        out[tmp] = 1;
      }
    });
    tmp = "";
  });
  return out;
}

module.exports = {
  getDNSStats,
};
