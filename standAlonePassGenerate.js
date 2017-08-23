'use strict'
const wallet = require('./src/wallet.js');
const util = require('./src/util.js');
const bs58check = require('bs58check');

console.log("      .-``'.       EnLedger, Corp.      .'''-.")
console.log("    .`   .`~    StandAlone Passphrase   ~`.   '.");
console.log("_.-'     '._     & Keypair Generator    _.'     '-._");

const mnemonic = wallet.generateMnemonic();
console.log("MNEMONIC PASSPHRASE: " + mnemonic);
const walletData = wallet.deriveWallet(mnemonic);

// some testing code here, not in use...
//let prefix = new Buffer('0x80', 'hex')
//console.log("BITCOIN PRIVATE KEY (wif): " + bs58check.encode(util.concat(prefix,walletData.privateKeys.bitcoin)));
//console.log("WALLET DATA: " + JSON.stringify(walletData));

console.log("ENERGYCHAIN PRIVATE KEY (hex): " + walletData.privateKeys.cosmos.toString('hex'));
console.log("ENERGYCHAIN PRIVATE KEY (base58): " + bs58check.encode(walletData.privateKeys.cosmos));
console.log("ENERGYCHAIN PUBLIC ADDRESS: " + walletData.addresses.cosmos);


