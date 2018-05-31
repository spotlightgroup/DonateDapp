var ConvertLib = artifacts.require('./ConvertLib.sol')
var RbCoin = artifacts.require('./RbCoin.sol')

module.exports = function (deployer) {
  deployer.deploy(ConvertLib)
  deployer.link(ConvertLib, RbCoin)
  deployer.deploy(RbCoin)
}
