pragam solidity ^0.4.17;

// the contract body;
contarct Donation {
  //variables declare
  address manager;
  uint public minimumDonation;
  address[] public donors;



// the constructor;
  function Donation(uint minimum) public{
    //the manager is the person who deploy the contarct;
    manager = msg.sender;
    minimumDonation = minimum;
  }

  // donat for someone have have a project;
  function donate() public payable {
    require (msg.value > minimumDonation)
    donors.push(msg.sender)

  }

}
