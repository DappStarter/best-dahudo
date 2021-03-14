require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog tackle food ecology reflect stereo mistake coral light army genre'; 
let testAccounts = [
"0xb7bc709455610dc9450961633618decdc19fa473ac6f8a5ad4594575f60458b2",
"0x0f46e715efcab61ef7c5813d439ad2cbeedfba68f462b4d0d8531be654d61cc9",
"0x1d596bb062731d9e3822213140aa274cfe7737f26d9cff6d7f00fddd070e4c8d",
"0x75fc08b4b8b07b68b842c4f0e75fe73a2f9f9ff67d05a130d403024d02256dc0",
"0x7459b989cde18056c3ee08ac494b82b8bdbd1ec570261186a4c1ad81ab5ef24b",
"0x7e9d1821ea35eb149c7964e1da9b5fd3694c89d41fae5199b77206906f043ae1",
"0x60149ae28c19116f85507e7f8aa6b8bda868166327a2fddcd886e1e73e366cbc",
"0xa547b49fd372bbcac47d0cd80019b8b473f63a0852df2fb5a26b0b14da5fe33e",
"0xd7204ea1572aac026173c8d2382c73d99a2ef09e7098aefc07659c060af281c3",
"0x473b19eac7625f552533e1567fad7b1548017898cbb90d07080f8b966c05989e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
