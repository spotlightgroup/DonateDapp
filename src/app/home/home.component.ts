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
userInfo :any;
Posts: any;
message = '';
post :any;
isDonor = false;
isLogged = false;


  constructor(
    private http:HttpClient,
    private web3:Web3Service,
    private data:DataService) { }

  ngOnInit() {
    if (localStorage.getItem('isLogged') === "true") {
      this.isLogged = true;
    }
    
    this.data.getUserInfo()
    this.userInfo = this.data.userInfo;
    if(this.userInfo.type === "donor") {
      this.isDonor = true;
    }
    this.model.user = this.userInfo.username;

        this.web3.bootstrapWeb3()
        this.getPosts()

    setTimeout(()=>{
      this.model.publicKey = this.web3.accounts[0]
      console.log(this.model.publicKey)
    }, 500)


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

      this.message = "post added"
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
  setReciever(post) {
    localStorage.setItem('post',JSON.stringify(post));
    setTimeout(()=> {
      window.location.reload()
    }, 1000)
  }



  setPost(post) {
    localStorage.setItem('post',JSON.stringify(post));
  }


}
