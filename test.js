var standAlonePassGenerate = require('./index.js');

const mnemonic = standAlonePassGenerate.generateMnemonic();
console.log("test mnemonic: " + mnemonic);
console.log("test wallest: " + JSON.stringify(standAlonePassGenerate.deriveWallet(mnemonic)));
