pragam solidity ^0.4.17;

// the contract body;
contarct Donation {
  //variables declare
  address manager;
  uint public minimumContribution;

// the constructor;
  function Donation(uint minimum) public{
    //the manager is the person who deploy the contarct;
    manager = msg.sender;
    minimumContribution = minimum;
  }

/* to be a contributer your value should be more than the
minimumContribution value  */

  function contribute() public payable {
    require(msg.value > minimumContribution);
  }


}
