const hash = require("crypto-js/sha256");

class Transaction {
   constructor(sender, receiver, amount, gasFee, unit = "ether", gasPrice = "21000") {
      this.sender = sender;
      this.receiver = receiver;
      this.amount = amount;
      this.unit = unit;
      this.gasFee = gasFee;
      this.gasPrice = gasPrice;
      this.timestamp = new Date();
      this.transactionHash = this.calculateTransactionHash();
   }

   calculateTransactionHash() {
      return hash(this.sender + this.receiver, this.amount, this.timestamp + this.unit);
   }
}

module.exports = Transaction