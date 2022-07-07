// const fs = require("fs");
const Hash = require("pure-ipfs-only-hash");

// var data = JSON.parse(fs.readFileSync(`${__dirname}/src/Transactions/Transactions.json`, "utf8"))
let options = {
  warpWithDirectory: false,
  progress: (prog) => console.log(`Saved :${prog}`),
};

Hash.of("hello word!").then((res) => console.log(res));

// const CID = require('cids')
// const cid = new CID('QmTp2hEo8eXRp6wg7jXv1BLCMh5a4F3B7buAUZNZUu772j')
// console.log(CID.isCID(cid));

/**
 * tham khảo ipfs tại đây:
 * https://viblo.asia/p/nhung-goc-nhin-dau-tien-ve-ipfs-Az45b9PwlxY
 *
 **/
