import { Block } from './block';

export class BlockChain {
    private readonly chain: Block[] = [];

    private get latestBlock(): Block {
        return this.chain[this.chain.length - 1];
    }

    constructor() {
        this.chain.push(
            new Block(0, '0', Date.now(), 'Genesis block')
        );
    }

    public addBlock(data: string): void {
        const block = new Block(
            this.latestBlock.index + 1,
            this.latestBlock.hash,
            Date.now(),
            data
        );

        this.chain.push(block);
    }
}


// const blockchain = new BlockChain();

// console.log('#1')
// blockchain.addBlock('First block');

// blockchain.addBlock('Second block');

// console.log(blockchain);