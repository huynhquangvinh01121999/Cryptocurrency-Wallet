const fs = require("fs");
const BlockChain = require("../src/BlockChain/BlockChain");
const Wallet = require("../src/Wallet/Wallet");

var data = JSON.parse(
  fs.readFileSync("./src/Transactions/transactions.json", "utf8")
);

const myWallet = new Wallet(1);
data.transactions.map((trans) => {
  myWallet.sendMoney(trans);
});

//console.log(BlockChain.instance);
console.log(BlockChain.instance.isValid());
console.log(JSON.stringify(BlockChain.instance.chains, null, 2));

// blockChain.chains[1].data = {
//   fromAddress: "0000xxVinh",
//   toAddress: "0000xxThuxx0000",
//   amount: "1000",
// };

// // console.log(JSON.stringify(blockChain, null, 1));
// console.log(blockChain);
// console.log(blockChain.isValid());

/**
 * library convert ether: https://www.npmjs.com/package/ether-converter
 *
 * api currency usd - eth:
 * https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum
 *
 * example: current_price   = $1207.73
 * => 1 ETH = 1 * 1207.73   = $1207.73
 * => 1 USD = 1/1207.73     = 0.0009730182 ETH
 */

/*
const { JSEncrypt } = require('js-encrypt')
const crypto = require('crypto');

const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
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

// mã hóa
var ciphertext = crypto.publicEncrypt(
  {
    key: publicKey,
    padding: crypto.constants.RSA_PKCS1_PADDING
  },
  Buffer.from('Hello word', 'utf8')
)
console.log(ciphertext.toString('base64'))

// giải mã
var decrypt = new JSEncrypt()
decrypt.setPrivateKey(privateKey)
var decrypted = decrypt.decrypt(ciphertext.toString('base64'))
console.log(decrypted) 
*/
