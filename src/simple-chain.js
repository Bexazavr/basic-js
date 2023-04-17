const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  str: [],
  getLength() {
    return this.str.length;
  },
  addLink(value) {
    this.str.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      position <= 0 ||
      typeof position !== "number" ||
      position > this.str.length
    ) {
      this.str = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.str.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.str.reverse();
    return this;
  },
  finishChain() {
    let tmp = [...this.str];
    this.str = [];
    return tmp.join("~~");
  },
};

module.exports = {
  chainMaker,
};
