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
  //sent=false;
  color: 'green'
  requests:any;
  message = "";
  status="";
  isDonor = false;
  donorsCount = 0;
  userInfo :any;
  constructor(private http:HttpClient,
     private web3Service: Web3Service,
     private matSnackBar: MatSnackBar,
     private data: DataService,
   ) { }



async  ngOnInit() {
  this.watchAccount();
 this.web3Service.artifactsToContract(metacoin_artifacts)
 .then((RbCoinAbstraction) => {
   this.RbCoin = RbCoinAbstraction;
 });
     this.userInfo = await JSON.parse(localStorage.getItem('userInfo'));
    if (this.userInfo.type === "donor") {
      this.isDonor = true;
      await this.http.post("/api/getDonorRequests",{username:this.userInfo.username})
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
      await this.http.post("/api/getRequests",{username:this.userInfo.username})
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
  let sender;
  console.log("request.receiver in finlize",request.receiver);


      await   this.http.post('/api/getReceiver',{username:request.receiver}).subscribe(async(res)=>{
        receiver= res['publicKey'];
        console.log('get receiver in finalize',res);
      },(err)=>{
        console.log(err);
      });
      console.log('usernamee',this.userInfo.username)
setTimeout(async()=> {
      console.log("receiver in finlize",receiver);
        const amount = request.amount;
        if (!this.RbCoin) {
          this.setStatus('RbCoin is not loaded, unable to send transaction');
          return;
        }

        this.setStatus('Initiating transaction... (please wait)');

        try {
          console.log("receiver in finlize inside try",receiver);
          const deployedRbCoin = await this.RbCoin.deployed();
          const transaction = await deployedRbCoin.sendCoin.sendTransaction(receiver, amount, {from: this.userInfo.publicKey});

          if (!transaction) {
            this.setStatus('Transaction failed!');
          }
          else {
            this.setStatus('Transaction complete!');
            this.http.post('/api/finalize', request)
            .subscribe(res=> {
              console.log('finalized',res)
            }, err => {
              console.log(err)
            })
          }
        }
        catch (e) {
          console.log(e);
          this.setStatus('Error sending coin; see log.');
          return;
        }
        window.location.reload()
      },2000);

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
