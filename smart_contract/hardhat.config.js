// https://eth-rinkeby.alchemyapi.io/v2/K2oztR6wbeOvwkBBTyUPo3da-wXz9leK

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/UYZvSg1eWZfpdybybJTtKzBxdpALcKAI',
      accounts: ['84ac1a470fa5047158bb9ef9def335719fb1ce99752a21df9d818940d5d0efd4']
    }
  }
}