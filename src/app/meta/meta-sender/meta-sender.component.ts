import {Component, OnInit} from '@angular/core';
import {Web3Service} from '../../util/web3.service';
import { MatSnackBar } from '@angular/material';
import {DataService} from '../../util/data.service';
import { HttpClient } from '@angular/common/http';


declare let require: any;
const metacoin_artifacts = require('../../../../build/contracts/RbCoin.json');

@Component({
  selector: 'app-meta',
  templateUrl: './meta-sender.component.html',
  styleUrls: ['./meta-sender.component.css']
})
export class MetaSenderComponent implements OnInit {
  // the publicKey addresses for the accounts;
  accounts: string[];
  // the rbk contracts;
  RbCoin: any;
  // the transaction model;
  model = {
  amount: 5,
  receiver: '',
  balance: 0,
  account: ''
};

sent = false;
status = '';

constructor(
  private http:HttpClient,
  private web3Service: Web3Service,
  private matSnackBar: MatSnackBar,
  private data:DataService) {}



  ngOnInit(): void {
    // getting the accounts from the web3;
    this.watchAccount();

    // convert the ABI contract to use it;
    this.web3Service.artifactsToContract(metacoin_artifacts)
    .then((RbCoinAbstraction) => {
      this.RbCoin = RbCoinAbstraction;
    });


  }
  // check the change of the accounts and save it in local variable
  watchAccount() {
  this.web3Service.accountsObservable
  .subscribe((accounts) => {
    this.accounts = accounts;
    this.model.account = accounts[0];
    this.data.publicKey = this.model.account;
    // call the refreshBalance function after getting the new accounts
    this.refreshBalance();
  });
}

setStatus(status) {
  this.matSnackBar.open(status, null, {duration: 3000});
}
// the money transfer function;
async sendCoin() {
// set the receiver that the user want to donate for;
const receiver = JSON.parse(localStorage.getItem('post')).publicKey;
// set the amount that the user want to send;
const amount = this.model.amount;
//get the info for the post user clicked on;
const id = JSON.parse(localStorage.getItem('post'))._id
const post = JSON.parse(localStorage.getItem('post'))

// if there is any problem with the contracts;
if (!this.RbCoin) {
this.setStatus('Metacoin is not loaded, unable to send transaction');
return;
}

// while the user is submiting the transaction;
this.setStatus('Initiating transaction... (please wait)');


try {
  //get the deployed contract and call the send coin function;
  // and pass the receiver and the amount;
  const deployedRbCoin = await this.RbCoin.deployed();
  const transaction = await deployedRbCoin.sendCoin.sendTransaction(receiver, amount, {from: this.model.account});
  // if there is any problem with the transaction;
  if (!transaction) {
  this.setStatus('Transaction failed!');
}
// if the transaction is completed;
else {
this.setStatus('Transaction complete!');
this.sent = true;

}
}
// handle the Error
catch (e) {
console.log(e);
this.setStatus('Error sending coin; see log.');
return;
}
// add the donor to the donors array of the post after the transaction is completed
if (this.sent) {
this.http.post('/api/donate', {_id: id, amount: amount})
.subscribe(res => {
  console.log(res)
}, err => {
  console.log(err);
})
}

setTimeout(()=> {
  window.location.reload()
},2000)
};

//getting the full balance of an account;
async refreshBalance() {
try {
  // get the deployed version of the contract
  const deployedRbCoin = await this.RbCoin.deployed();
  // call the getBalance function from the deployed contract
  const metaCoinBalance = await deployedRbCoin.getBalance.call(this.model.account);
  this.model.balance = metaCoinBalance;
  // handle the errors
} catch (e) {
console.log(e);
this.setStatus('Error getting balance; see log.');
}
};

// take the amount from the user input
setAmount(e) {
this.model.amount = e.target.value;
}
}
