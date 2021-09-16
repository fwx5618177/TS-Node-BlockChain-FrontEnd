import { BlockChain } from './src/BlockChain';
import { Block } from './src/block';
import './public/style/index.css';

enum status {
    Initialization = 'Initialization the blockchain',
    AddTransaction = 'Add one or more transaction',
    ReadyToMine = 'Ready to mine a new block',
    MineInProgress = 'Mining a new block...'
}

const amountEl = document.getElementById('amount');
const blocksEl = document.getElementById('blocks');
const confirmBtn = document.getElementById('confirm');
const pendingTransactionsEl = document.getElementById('pending-transactions');
const recipientEl = document.getElementById('recipient');
const senderEl = document.getElementById('sender');
const statusEl = document.getElementById('status');
const transferBtn = document.getElementById('transfer');

const blockchain = new BlockChain();

console.log('#1')
blockchain.addBlock('First block');

blockchain.addBlock('Second block');

console.log(blockchain);