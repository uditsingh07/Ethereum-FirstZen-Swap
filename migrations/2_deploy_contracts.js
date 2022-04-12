const Token = artifacts.require("Token");     //importing Smart contract
const EthSwap = artifacts.require("EthSwap");

module.exports = async function(deployer) {
  await deployer.deploy(Token);
  const token = await Token.deployed()
  await deployer.deploy(EthSwap, token.address);
  const ethSwap = await EthSwap.deployed()

  //Transfer token to ethSwap contract
  await token.transfer(ethSwap.address, '1000000000000000000000000') //transfer is a function in token.sol responsible for token transfer
};
