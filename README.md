# standAlonePassGenerate
Standalone passphrase &amp; keypair generator for Tendermint Cosmos-SDK Blockchains

This tool will generate (randomized) passphrases and keypairs valid for EnLedger blockchain offerings such as EnergyChain, LandChain, and NotaryChain.

Hard-cloned and modified from: https://github.com/cosmos/fundraiser-lib

Thanks to the Tendermint team!

**pre-requirements for installation:**

a working version of git, npm, and node installed on your system

**Installation:**

git clone https://github.com/enledger/standAlonePassGenerate.git

cd standAlonePassGenerate

npm i

node standAlonePassGenerate.js

**Example output:**

      .-``'.       EnLedger, Corp.      .'''-.
    .`   .`~    StandAlone Passphrase   ~`.   '
                 & Keypair Generator

MNEMONIC PASSPHRASE: help script brother cool .......

ENERGYCHAIN PRIVATE KEY (hex): 22d872816.......

ENERGYCHAIN PRIVATE KEY (base58): GM5j2agjNF........

ENERGYCHAIN PUBLIC ADDRESS: 0x08af6.......

**Using your own mnemonic passphrase**

use the -p flag, example:

node ./standAlonePassGenerate.js -p 'attitude cage smoke shaft section ...'

example output:

Wallet DERIVED SUCCESSFULLY from user-provided mnemonic passphrase!

ENERGYCHAIN PRIVATE KEY (hex): ff24fa3ab...

ENERGYCHAIN PRIVATE KEY (base58): 2wNKhRb7m...

ENERGYCHAIN PUBLIC ADDRESS: 0xf6733f2...



