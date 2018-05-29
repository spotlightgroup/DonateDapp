import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../util/data.service';
import {Web3Service} from '../util/web3.service';
import { MatSnackBar } from '@angular/material';


declare let require: any;
const metacoin_artifacts = require('../../../build/contracts/RbCoin.json');

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {
  model:any={
    account:""
  }
  accounts: string[];
  RbCoin: any;
  sent=false;
  requests:any;
  message = "";
  status="";
  isDonor = false;
  donorsCount = 0;
  userInfo :any;
  constructor(private http:HttpClient,
    private web3Service: Web3Service,
    private matSnackBar: MatSnackBar,
     private data: DataService) { }



  ngOnInit() {
    this.watchAccount();
    this.web3Service.artifactsToContract(metacoin_artifacts)
    .then((RbCoinAbstraction) => {
      this.RbCoin = RbCoinAbstraction;
    });
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (this.userInfo.type === "donor") {
      this.isDonor = true;
      this.http.post("/api/getDonorRequests",{username:this.userInfo.username})
      .subscribe((res)=>{
        this.requests = res;
        console.log('res',res)
        // if (this.requests.length === 0) {
        //   this.message = "there is no requests yet !"
        // }

      },err=>{
        console.log(err);
      });


    }else{
      this.http.post("/api/getRequests",{username:this.userInfo.username})
      .subscribe(res=>{
        this.requests = res;
        console.log('res',res)
          // if (this.requests.length === 0) {
          //   this.message = "there is no requests yet !"
          // }
      },err=>{
        console.log(err);
      });
    }
    console.log("this.requestssssss",this.requests);
    if (this.requests.length === 0) {
      this.message = "there is no requests yet !"
    }
  }
  setStatus(status) {
    this.matSnackBar.open(status, null, {duration: 3000});
  }
  watchAccount() {
      this.web3Service.accountsObservable
      .subscribe((accounts) => {
        this.accounts = accounts;
        this.model.account = accounts[0];
        //this.data.publicKey = this.model.account;
        this.refreshBalance();
      });
  }

  async refreshBalance() {
    console.log('Refreshing balance');

    try {
      const deployedRbCoin = await this.RbCoin.deployed();
      console.log(deployedRbCoin);
      console.log('Account', this.model.account);
      const RbCoinBalance = await deployedRbCoin.getBalance.call(this.model.account);
      console.log('Found balance: ' + RbCoinBalance);
      this.model.balance = RbCoinBalance;
      //  window.location.reload()

    } catch (e) {
      console.log(e);
      this.setStatus('Error getting balance; see log.');
    }
  }
async  finalize(request){
    if(request.amount === 0){
      this.message= "Enter real amount"
      return;
    }
    if(request.approvals <= request.donors / 2){
      this.message="you don't have the permession"
      return;
    }
  //  this.message = "done"
  let receiver;
    await this.http.post('/api/getReceiver',{username:request.receiver}).subscribe(res=>{
      receiver=res;
    },err=>{
      console.log(err);
    });
    console.log("receiver in finlize",receiver);
      const amount = request.amount;
      //const id = JSON.parse(localStorage.getItem('post'))._id
      //const post = JSON.parse(localStorage.getItem('post'))

      if (!this.RbCoin) {
        this.setStatus('RbCoin is not loaded, unable to send transaction');
        return;
      }

      this.setStatus('Initiating transaction... (please wait)');

      try {
        //receiver="0x8E61B1d28c2ABD2511A2A3b9df9c91F0A281BE9e";
        const deployedRbCoin = await this.RbCoin.deployed();
        const transaction = await deployedRbCoin.sendCoin.sendTransaction(receiver, amount, {from: this.model.account});

        if (!transaction) {
          this.setStatus('Transaction failed!');
        }
        else {
          this.setStatus('Transaction complete!');
          this.sent = true;

        }
      }
      catch (e) {
        console.log(e);
        this.setStatus('Error sending coin; see log.');
        return;
      }

      // if (this.sent) {
      //   this.http.post('/api/donate', {_id: id, amount: amount})
      //   .subscribe(res => {
      //     console.log(res);
      //   }, err => {
      //     console.log(err);
      //   })
      // }

      setTimeout(()=> {
        window.location.reload()
      },2000)

  }

  approve(request) {
    this.http.post('/api/approve', {request:request, username:this.userInfo.username})
    .subscribe(res=> {
      console.log("esheeee",res)
      this.message = "Approved !"

    }, err=> {
      console.log(err)
      this.message = " you already approved !"
    })
  }

}
