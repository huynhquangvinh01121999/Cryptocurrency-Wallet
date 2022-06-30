const fs = require("fs");
const BlockChain = require("./src/BlockChain/BlockChain");
const Transaction = require("./src/Transactions/Transactions");

var data = JSON.parse(
  fs.readFileSync("./src/Transactions/transactions.json", "utf8")
);

const blockChain = new BlockChain(1);
data.transactions.map((trans) => {
  blockChain.addToBlockChain(
    new Transaction(trans.sender, trans.receiver, trans.amount, trans.gasFee)
  );
});

// console.log(blockChain.chains);
// console.log(blockChain.isValid());
// console.log(JSON.stringify(blockChain.chains, null, 2));

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

var keypair = require("keypair");

var pair = keypair();
console.log(pair.public);
