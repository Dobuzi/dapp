var Web3 = require('web3');
var web3 = new Web3('http://127.0.0.1:7545')

web3.eth.getTransactionCount('0x56973fb30454A1023713725662dCdDcbDF0cFc01').then(console.log)
