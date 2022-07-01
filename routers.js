const fs = require("fs");
const BlockChain = require("./src/BlockChain/BlockChain");
const Wallet = require("./src/Wallet/Wallet");

var data = JSON.parse(
  fs.readFileSync("./src/Transactions/transactions.json", "utf8")
);

module.exports = (app) => {
  // define the home page route
  app.get("/", (req, res) => {
    res.send(new Date());
    // res.send(new Date().getSeconds().toString());
  });

  app.get("/wallets", (req, res) => {
    // const myWallet = new Wallet(1);
    // data.transactions.map((trans) => {
    //   myWallet.sendMoney(trans);
    // });

    return res
      .status(200)
      .json({ status: 200, message: "OK", data: BlockChain.instance });
  });

  app.post("/sendTransaction", (req, res) => {
    const myWallet = new Wallet(1);

    if (
      req.body.sender &&
      req.body.receiver &&
      req.body.amount &&
      req.body.gasFee
    ) {
      myWallet.sendMoney({
        sender: req.body.sender,
        receiver: req.body.receiver,
        amount: req.body.amount,
        gasFee: req.body.gasFee,
      });
      return res
        .status(201)
        .json({ status: 200, message: "OK", data: BlockChain.instance });
    } else {
      return res
        .status(400)
        .json({ status: 400, message: "Bad Request", data: null });
    }
  });

  app.get("/isValid", (req, res) => {
    return res.status(201).json({
      status: 200,
      message: "OK",
      data: {
        isValid: BlockChain.instance.isValid(),
      },
    });
  });
};
