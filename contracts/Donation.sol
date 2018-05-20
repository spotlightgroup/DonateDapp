pragma solidity ^0.4.17;

// the contract body;
contract Donation {
  //variables declare

// the structure deffetion of the spend money request;
  struct Request {
    string description;
    uint value;
    address recipient;
    bool complete;
    uint approvalCount;
    mapping(address => bool) approvals;
  }

  Request[] public requests;
  address manager;
  uint public minimumDonation;
  mapping(address => bool) public donors;
  uint approversCount;

//create the modifier
modifier restricted() {
  require(msg.sender == manager);
  _;
}
// the constructor;
  function Donation(uint minimum) public{
    //the manager is the person who deploy the contarct;
    manager = msg.sender;
    minimumDonation = minimum;
  }

  // donat for someone have have a project;
  function donate() public payable {
    require (msg.value > minimumDonation);
    donors[msg.sender] = true;
    approversCount++;
  }


  //create request to spend the money;
  function spend(string description, uint value, address recipient)
    public restricted {
      Request memory newRequst = Request({
        description: description,
        value: value,
        recipient: recipient,
        complete: false,
        approvalCount: 0
        });
        requests.push(newRequst);
  }



  // as a donor should be able to approve a spend request ;
  function approveSpend (uint index) public {
    Request storage request = requests[index];

    require(donors[msg.sender]);
    require(!request.approvals[msg.sender]);
    request.approvals[msg.sender] = true;
    request.approvalCount++;

  }
  //finish the request of spending money;
  function resolveRequest(uint index) public restricted {
    Request storage request = requests[index];
    require(request.approvalCount > (approversCount / 2));
    require(!request.complete);
    request.recipient.transfer(request.value);
    request.complete = true;
  }






}
