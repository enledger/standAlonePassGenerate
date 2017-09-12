const wallet = require('./src/wallet.js');
const util = require('./src/util.js');

var exports = module.exports = {};

module.exports = {
  generateMnemonic: function() { return wallet.generateMnemonic(); },
  deriveWallet: function(mnemonic) { return wallet.deriveWallet(mnemonic); }
};

