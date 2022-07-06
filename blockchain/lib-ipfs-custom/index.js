const { importer } = require('./pure-ipfs-unixfs-importer/dist/src')

const block = {
   get: async cid => { throw new Error(`unexpected block API get for ${cid}`) },
   put: async () => { throw new Error('unexpected block API put') }
}

const ipfs = async (content, options) => {
   options = options || {};
   options.onlyHash = true;

   if (typeof content === 'string') {
      content = new TextEncoder().encode(content);
   }

   let lastCid;
   for await (const { cid } of importer([{ content }], block, options)) {
      lastCid = cid;
   }

   // return `${lastCid}`;
   return lastCid;
}

const data = "hello world!"
ipfs(data).then(res => console.log(res))