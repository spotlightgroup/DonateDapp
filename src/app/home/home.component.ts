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
model:any = {
  user: '',
  header: "",
  needed: 0,
  description: "",
  publicKey: '',
  balance: 0
};
Posts: any;
message = '';
post :any;
isDonor= true;





  constructor(private http:HttpClient, private web3:Web3Service, private data:DataService) { }

  ngOnInit() {
    this.model.publicKey = this.data.publicKey
    this.http.get('/api/currentUser').subscribe(res => {
        this.model.user = res['msg'].username;
        console.log(this.model)
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

    this.http.post('/addPost',this.model).subscribe(res => {


    }, err => {
      this.message = "error"
      return;
    });
    this.message = "done"
    console.log('this',this.message)
    this.model = {
      user: "",
      header: "",
      needed: 0,
      description: "",
      publicKey: '',
      balance: 0,
      donors: []
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



  setPost(post) {
    this.data.post=post;
    console.log('post', post)
  }


}
