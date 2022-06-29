const Block = require("./Block");

class BlockChain {
  constructor(difficuty) {
    this.chains = [];
    this.difficuty = difficuty;
  }

  getLastBlock() {
    return this.chains[this.chains.length - 1];
  }

  addToBlockChain(transaction) {
    const lastBlock = this.getLastBlock();
    if (lastBlock === undefined) {
      this.chains.push(new Block(1, "0000", "Initialized Transaction"));
    } else {
      const newBlock = new Block(this.chains.length + 1, lastBlock.hash, transaction);
      newBlock.mine(this.difficuty);
      this.chains.push(newBlock);
    }
  }

  isValid() {
    for (let i = 1; i < this.chains.length; i++) {
      const currentBlock = this.chains[i];
      const prevBlock = this.chains[i - 1];

      if (currentBlock.hash != currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.prevHash != prevBlock.hash) {
        return false;
      }

      if (prevBlock.index + 1 !== currentBlock.index) {
        return false;
      }
    }
    return true;
  }
}

module.exports = BlockChain;
