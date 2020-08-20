require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name return place modify give another army gift'; 
let testAccounts = [
"0x3421e6795aff117e97c7b94efc52a692d7310ad7a66310a8b5443b8bdfd55c28",
"0x9f0a2a21da0d567c8c85d7481d9f7e6058f5c9ea656df8ec3fd3a38bc6c2547c",
"0x55a14e90d9e922e9dc16503e01a8ce53b33d1b9054f16a399e42331f009d2db1",
"0xe3ab905901d41f7f23c259f0e3925b13144a5e00d9b9d1a44b906c9354054a7a",
"0x28296c0038f30125c9f1abe13ad9c239bf619ec4045ff9ca4f6bdfd164ea3b5d",
"0xef9032fad721a5e0787309deec620c99350ca18ae5434c19dfeb0e9c30849f02",
"0x20e822df0a40312a644ef9d1dfc8faf57bca954a9937e3f8a3090a66309a72a5",
"0x17fb550885b809eedb1ef39daf6e11e161944b008d17ada1c0a6fe6ef2cf8bd2",
"0xdf2341f3ce90d082a640a02fb9ebc707dc7489f420a0e9211d313392ec55bb3d",
"0x48ff2f49f5d2bc19a039d64bb0a2f0ee190b5c9cbdbf637fff5464bf8c1d2291"
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
