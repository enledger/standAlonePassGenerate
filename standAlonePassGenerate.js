'use strict'

const wallet = require('./src/wallet.js');
const util = require('./src/util.js');
const bs58check = require('bs58check');

console.log("      .-``'.       EnLedger, Corp.      .'''-.")
console.log("    .`   .`~    StandAlone Passphrase   ~`.   '.");
console.log("_.-'     '._     & Keypair Generator    _.'     '-._");

var genFromPassphrase = false;
process.argv.forEach(function(val,index,array){
  if(val === "-p" || val === "-P"){
    genFromPassphrase = true;
    if(process.argv.length === index + 2){
      var userMnemonic = process.argv[index+1];
      console.log("Generating wallet using passsphrase: " + userMnemonic);
      try {
        const walletData = wallet.deriveWallet(userMnemonic);
        console.log("Wallet DERIVED SUCCESSFULLY from user-provided mnemonic passphrase!");
        console.log("ENERGYCHAIN PRIVATE KEY (hex): " + walletData.privateKeys.cosmos.toString('hex'));
        console.log("ENERGYCHAIN PRIVATE KEY (base58): " + bs58check.encode(walletData.privateKeys.cosmos));
        console.log("ENERGYCHAIN PUBLIC ADDRESS: " + walletData.addresses.cosmos);
        return true;
      } catch(e) {
        console.log("Wallet derivation FAILED! Error detected: " + e);
        return true;
      }
    } else if (process.argv.length < index + 2) {
      return "Format Error: unexpected number of arguments, not enough arguments!";
    } else if (process.argv.length > index + 2) {
      return "Format Error: unexpected number of arguments, too many arguments!";
    }
  }
});

if(!genFromPassphrase) {
  const mnemonic = wallet.generateMnemonic();
  console.log("MNEMONIC PASSPHRASE: " + mnemonic);
  const walletData = wallet.deriveWallet(mnemonic);

  // some testing code here, not in use...
  // let prefix = new Buffer('0x80', 'hex')
  // console.log("BITCOIN PRIVATE KEY (wif): " + bs58check.encode(util.concat(prefix,walletData.privateKeys.bitcoin)));
  //console.log("WALLET DATA: " + JSON.stringify(walletData));

  //console.log("ENERGYCHAIN PRIVATE KEY (raw): " + JSON.stringify(walletData.privateKeys.cosmos));
  console.log("ENERGYCHAIN PRIVATE KEY (hex): " + walletData.privateKeys.cosmos.toString('hex'));
  console.log("ENERGYCHAIN PRIVATE KEY (base58): " + bs58check.encode(walletData.privateKeys.cosmos));
  console.log("ENERGYCHAIN PUBLIC ADDRESS: " + walletData.addresses.cosmos);
  return true;
}

return false;
