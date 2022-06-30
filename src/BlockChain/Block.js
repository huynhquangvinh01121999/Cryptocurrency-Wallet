const hash = require("crypto-js/sha256");

class Block {
  constructor(index, prevHash, transaction) {
    this.index = index;
    this.mineVar = 0;
    this.timstamp = new Date();
    this.transaction = transaction;
    this.prevHash = prevHash;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return hash(
      this.index +
        this.prevHash +
        JSON.stringify(this.transactions) +
        this.timestamp +
        this.mineVar
    ).toString();
  }

  mine(difficuty) {
    while (!this.hash.startsWith("0000".repeat(difficuty))) {
      //console.log(this.mineVar);
      this.mineVar++;
      this.hash = this.calculateHash();
    }
  }
}

module.exports = Block;
