class Block {
    constructor({ timestamp, lastHash, hash, data }) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }
}

const Block1 = new Block({
    timestamp: '01/01/01', 
    lastHash: 'nrl-lasthash', 
    hash: 'nrl-hash', 
    data: 'nrl-data'
});

console.log('Block1', Block1);
