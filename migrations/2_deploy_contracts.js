var Nostradamus = artifacts.require('./Nostradamus.sol');
var TheProphecy = artifacts.require('./TheProphecy.sol');

module.exports = function(deployer, network, accounts) {
  console.log("network:", network);

  if(network === "ropsten"){
    const nostradamusAddress = "0x8A879BCCd75B9cb17cc9DC9a69820A794cae0b1E";
    deployer.deploy(TheProphecy, nostradamusAddress, {from: accounts[0]});
  }
  else if(network === "develop"){
    deployer.deploy(Nostradamus, {from: accounts[0]})
    .then(() => {
      return deployer.deploy(TheProphecy, Nostradamus.address, {from: accounts[1]});
    });
  }
};