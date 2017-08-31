const wallet = require('./src/wallet.js');
const util = require('./src/util.js');

exports.generateMnemonic() {
  return wallet.generateMnemonic();
}

exports.deriveWallet() {
  return wallet.deriveWallet();
}
