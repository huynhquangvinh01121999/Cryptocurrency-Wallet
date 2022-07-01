const Block = require("./Block");
const crypto = require("crypto");

class BlockChain {
  static instance = new BlockChain();

  constructor() {
    const generateTheFirstBlock = new Block(
      1,
      "0000",
      "Initialized Transaction"
    );
    this.chains = [generateTheFirstBlock];
  }

  getLastBlock() {
    return this.chains[this.chains.length - 1];
  }

  addToBlockChain(transaction, publicKey, signature, difficuty) {
    const lastBlock = this.getLastBlock();

    // chứng thực chữ ký số bằng khóa công khai
    const verifier = crypto.createVerify("SHA256");
    verifier.update(transaction.toString());

    const isValid = verifier.verify(publicKey, signature);
    if (isValid) {
      const newBlock = new Block(
        this.chains.length + 1,
        lastBlock.hash,
        transaction
      );
      newBlock.mine(difficuty);
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
