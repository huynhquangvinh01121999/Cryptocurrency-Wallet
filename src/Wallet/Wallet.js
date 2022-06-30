const crypto = require('crypto');
const BlockChain = require('../BlockChain/BlockChain');
const Transaction = require('../Transactions/Transactions')

class Wallet {
   constructor(difficuty) {
      const keypair = crypto.generateKeyPairSync('rsa', {
         modulusLength: 2048,
         publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
         },
         privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem'
         }
      });

      this.publicKey = keypair.publicKey;
      this.privateKey = keypair.privateKey;
      this.difficuty = difficuty;
   }

   sendMoney(data) {
      const transaction = new Transaction(data.sender, data.receiver, data.amount, data.gasFee)

      const sign = crypto.createSign("SHA256");
      sign.update(transaction.toString()).end();

      // tạo chữ kỹ số bằng khóa bí mật
      const signature = sign.sign(this.privateKey);

      BlockChain.instance.addToBlockChain(transaction, this.publicKey, signature, this.difficuty)
   }
}

module.exports = Wallet;