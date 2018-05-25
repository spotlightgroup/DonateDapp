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
  accounts: string[];
  RbCoin: any;

  model = {
    amount: 5,
    receiver: '',
    balance: 0,
    account: ''
  };

  status = '';

  constructor(private http:HttpClient,private web3Service: Web3Service, private matSnackBar: MatSnackBar, private data:DataService) {

    }

  ngOnInit(): void {
    this.watchAccount();
    this.web3Service.artifactsToContract(metacoin_artifacts)
      .then((RbCoinAbstraction) => {
        this.RbCoin = RbCoinAbstraction;
      });


  }

  watchAccount() {
    this.web3Service.accountsObservable.subscribe((accounts) => {
      this.accounts = accounts;
      this.model.account = accounts[0];
      this.data.publicKey = this.model.account;
      this.refreshBalance();
    });
  }

  setStatus(status) {
    this.matSnackBar.open(status, null, {duration: 3000});
  }

  async sendCoin() {
    let post = JSON.parse(localStorage.getItem('post'))
        console.log(post);
    if (!this.RbCoin) {
      this.setStatus('Metacoin is not loaded, unable to send transaction');
      return;
    }
    let receiver = '';
    const amount = this.model.amount;
       this.http.get("/api/Reciever").subscribe(async res=>{
             receiver = res["reciever"];
            console.log('receiver1', receiver)
            try {
              const deployedRbCoin = await this.RbCoin.deployed();
              const transaction = await deployedRbCoin.sendCoin.sendTransaction(receiver, amount, {from: this.model.account});

              if (!transaction) {
                this.setStatus('Transaction failed!');
              } else {
                this.setStatus('Transaction complete!');
                // setTimeout(()=> {
                //   window.location.reload()
                // }, 3000)
                this.http.post('/api/donate', {_id: post._id}).subscribe(res => {
                  console.log('res', res);
                }, err => {
                  console.log(err);
                })
              }
            }
            catch (e) {
              console.log(e);
              // this.setStatus('Error sending coin; see log.');
            }

          },err=>{
            console.log("error in get reciever ");
          });
           console.log('receiver2', receiver)



    console.log('Sending coins' + amount + ' to ' + receiver);

    this.setStatus('Initiating transaction... (please wait)');


  }

  async refreshBalance() {
    console.log('Refreshing balance');

    try {
      const deployedRbCoin = await this.RbCoin.deployed();
      console.log(deployedRbCoin);
      console.log('Account', this.model.account);
      const metaCoinBalance = await deployedRbCoin.getBalance.call(this.model.account);
      console.log('Found balance: ' + metaCoinBalance);
      this.model.balance = metaCoinBalance;
    //  window.location.reload()

    } catch (e) {
      console.log(e);
      this.setStatus('Error getting balance; see log.');
    }
  }

  setAmount(e) {
    console.log('Setting amount: ' + e.target.value);
      this.model.amount = e.target.value;
  }
}
