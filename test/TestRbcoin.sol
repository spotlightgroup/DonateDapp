pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/RbCoin.sol";
// test
contract TestRbcoin {

  function testInitialBalanceUsingDeployedContract() public {
    RbCoin rb = RbCoin(DeployedAddresses.RbCoin());

    uint expected = 10000;

    Assert.equal(rb.getBalance(tx.origin), expected, "Owner should have 10000 RbCoin initially");
  }

  function testInitialBalanceWithNewRbCoin() public {
    RbCoin rb = new RbCoin();

    uint expected = 10000;

    Assert.equal(rb.getBalance(tx.origin), expected, "Owner should have 10000 RbCoin initially");
  }

}
