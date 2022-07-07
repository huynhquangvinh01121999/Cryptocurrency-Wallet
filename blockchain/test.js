const { create } = require("ipfs-http-client");
const fs = require("fs");
async function ipfsClient() {
  const ipfs = await create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
  });
  return ipfs;
}

async function saveText() {
  let ipfs = await ipfsClient();

  let result = await ipfs.add(`welcome ${new Date()}`);
  console.log(result);
}

async function saveFile() {
  let ipfs = await ipfsClient();

  //   var data = fs.readFileSync(
  //     `${__dirname}/src/Transactions/Transactions.json`,
  //     "utf8"
  //   );
  let data = fs.readFileSync("./package.json");
  let options = {
    warpWithDirectory: false,
    progress: (prog) => console.log(`Saved :${prog}`),
  };
  let result = await ipfs.add(data, options);
  console.log(result);
}

async function getData(hash) {
  let ipfs = await ipfsClient();

  let asyncitr = ipfs.cat(hash);

  for await (const itr of asyncitr) {
    let data = Buffer.from(itr).toString();
    console.log(data);
  }
}

// saveText();
// saveFile();
getData("QmUe4a5wqKQnab1JT2jyyvQvg1nnxcnSaJoMmk9uNZXCkc")
