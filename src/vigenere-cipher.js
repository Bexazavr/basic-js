const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(state = true) {
    this.reverse = state;
  }
  encrypt() {
    if (!arguments[0] || !arguments[1]) {
      throw new Error("Incorrect arguments!");
    }
    let mainString = arguments[0].toUpperCase();
    let cryptKey = arguments[1]
      .repeat(Math.ceil(mainString.length / arguments[1].length))
      .toUpperCase();
    let encodedMessage = new Array(mainString.length);
    for (let i = 0, j = 0; i < mainString.length; i++, j++) {
      if (mainString.charCodeAt(i) >= 65 && mainString.charCodeAt(i) <= 90) {
        encodedMessage[i] = String.fromCharCode(
          ((mainString.charCodeAt(i) + cryptKey.charCodeAt(j) - 130) % 26) + 65
        );
      } else {
        encodedMessage[i] = mainString[i];
        j--;
      }
    }
    return this.reverse
      ? encodedMessage.join("")
      : encodedMessage.reverse().join("").toUpperCase();
  }
  decrypt() {
    if (!arguments[0] || !arguments[1]) {
      throw new Error("Incorrect arguments!");
    }
    let mainString = arguments[0].toUpperCase();
    let cryptKey = arguments[1]
      .repeat(Math.ceil(mainString.length / arguments[1].length))
      .toUpperCase();
    let decodedMessage = new Array(mainString.length);
    for (let i = 0, j = 0; i < mainString.length; i++, j++) {
      if (mainString.charCodeAt(i) >= 65 && mainString.charCodeAt(i) <= 90) {
        decodedMessage[i] = String.fromCharCode(
          ((mainString.charCodeAt(i) + 26 - cryptKey.charCodeAt(j)) % 26) + 65
        );
      } else {
        decodedMessage[i] = mainString[i];
        j--;
      }
    }
    return this.reverse
      ? decodedMessage.join("")
      : decodedMessage.reverse().join("").toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine,
};
