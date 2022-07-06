const fs = require("fs");
const BlockChain = require("../BlockChain/BlockChain");
const Wallet = require("../Wallet/Wallet");
const defaultTransaction = require("../Transactions/transactions.json")

module.exports = (app) => {
  /**
   * @swagger
   * /:
   *    get:
   *      description: Home page
   *      responses:
   *        200:
   *          description: Success
   */
  app.get("/", (req, res) => {
    const myWallet = new Wallet(1);
    defaultTransaction.transactions.map((transaction) => {
      myWallet.sendMoney(transaction);
    });
    return res
      .status(200)
      .json({ status: 200, message: "OK", data: BlockChain.instance });
    // res.send(new Date().getSeconds().toString());
  });

  /**
   * @swagger
   * /wallets:
   *    get:
   *      description: Wallets
   *      responses:
   *        200:
   *          description: Success
   */
  app.get("/wallets", (req, res) => {
    return res
      .status(200)
      .json({ status: 200, message: "OK", data: BlockChain.instance });
  });

  /**
   * @swagger
   * /sendTransaction:
   *    post:
   *      description: Home page
   *      parameters:
   *      - name: request body
   *        description: request body of transaction
   *        in: body
   *        required: true
   *        type: String
   *      responses:
   *        201:
   *          description: Success
   */
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
      return res.status(201).json({
        status: 201,
        message: "OK",
        data: BlockChain.instance.getLastBlock(),
      });
    } else {
      return res
        .status(400)
        .json({ status: 400, message: "Bad Request", data: null });
    }
  });

  /**
   * @swagger
   * /isValid:
   *    get:
   *      description: Check valid blockchain
   *      responses:
   *        200:
   *          description: Success
   */
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
