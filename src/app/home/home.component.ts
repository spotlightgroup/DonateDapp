import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Web3Service} from '../util/web3.service';
import {DataService} from '../util/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
model = {
  user: '',
  header: "",
  needed: 0,
  description: "",
  publicKey: ''
};
Posts: any;
message = ''
post :any;





  constructor(private http:HttpClient, private web3:Web3Service, private data:DataService) { }

  ngOnInit() {
    this.model.publicKey = this.data.publicKey
    this.http.get('/api/currentUser',{}).subscribe(res => {
      console.log("resss",res);
      if(res['msg']){
        this.model.user = res['msg'].username;
      }
    }, err => {
      console.log(err.error);
    })
    this.web3.bootstrapWeb3()
    this.getPosts()

    setTimeout(()=>{

      this.model.publicKey = this.web3.accounts[0]
      console.log(this.model.publicKey)
    }, 2000)


  }
  sendPost() {
    if (this.model.publicKey === '') {
      this.message = 'use metamask to continue'
      return;
    }
    if (this.model.user === '') {
      this.message = 'log in first'
      return;
    }
    let that = this
    if(this.model.user === "") {
      this.message = "log in first"
      return;
    }
    if (this.model.publicKey === "") {
      this.message = "you sould use meta mask to complete the process"
      return;
    }
    this.http.post('/addPost',this.model).subscribe(res => {


    }, err => {
      this.message = "error"
      return;
    });
    that.message = "done"
    console.log('this',that.message)
    that.model = {
      user: "",
      header: "",
      needed: 0,
      description: "",
      publicKey: ''
    };
    this.getPosts()
  }


  getPosts() {
    this.http.get("/getPosts").subscribe(res => {
      this.Posts = res;
    }, err => {
      this.message = "error"
      return;
    })
  }
  setReciever(key) {
    this.http.post("/api/Reciever",{"key":key}).subscribe(res => {
      console.log("reciever sent")
    }, err => {
      console.log("Reciever sent failed !!");
    })
    setTimeout(()=> {
      window.location.reload()
    }, 3000)
  }


}
