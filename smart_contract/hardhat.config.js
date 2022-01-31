// https://eth-ropsten.alchemyapi.io/v2/d7QdpgWprsLKerqbaIsk2C_VQKrEpmVc

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/d7QdpgWprsLKerqbaIsk2C_VQKrEpmVc',
      accounts: ['a2f616884b5d223ea36bbd38240a36b8adaea2aff40c2523560266a2b561712c']
    }
  }
}