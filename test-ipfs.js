const Hash = require('pure-ipfs-only-hash')
const data = 'hello world!'
Hash.of(data).then(res => console.log(res))

const CID = require('cids')
const cid = new CID('QmT78zSuBmuS4z925WZfrqQ1qHaJ56DQaTfyMUF7F8ff5o')
console.log(CID.isCID(cid));
