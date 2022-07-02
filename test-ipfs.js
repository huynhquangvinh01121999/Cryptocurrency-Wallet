const Hash = require('pure-ipfs-only-hash')
const data = 'hello world!'
Hash.of(data).then(res => console.log(res))

const CID = require('cids')
const cid = new CID('QmT78zSuBmuS4z925WZfrqQ1qHaJ56DQaTfyMUF7F8ff5o')
console.log(CID.isCID(cid));

/**
 * tham khảo ipfs tại đây:
 * https://viblo.asia/p/nhung-goc-nhin-dau-tien-ve-ipfs-Az45b9PwlxY
 * 
 * */
