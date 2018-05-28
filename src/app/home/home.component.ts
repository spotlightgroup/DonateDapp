import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Web3Service} from '../util/web3.service';
import {DataService} from '../util/data.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  img='https://i.imgur.com/hvctU41.jpg';
flip={};
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
user: '';
message = '';
post :any;
isDonor = false;
isLogged = false;


  constructor(
    private http:HttpClient,
    private web3:Web3Service,
    private data:DataService) { }

  ngOnInit() {
    // this.data.getUserInfo();
    if (localStorage.getItem('isLogged') === "true") {
      this.isLogged = true;
    }

    else {
      this.isLogged = false;
      return;
    }
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
    if(this.userInfo.type === "donor") {
      this.isDonor = true;
    }

    this.user = this.userInfo.username;
    this.model.user = this.userInfo.username;

        this.web3.bootstrapWeb3()
        this.getPosts()

    setTimeout(()=>{
      this.model.publicKey = this.web3.accounts[0]
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
      console.log('Posts', this.Posts)
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
  flipOn(i){
    this.flip[i]=false
    var index=".card"+i
      $(index).addClass('animated flipOutY ');
    setTimeout(()=> {
      $(index).removeClass('animated flipOutY ');
      this.flip[i]=true;
    }, 600)
  }
  flipOf(i){
    var index=".card"+i
      $(index).addClass('animated flipOutY ');
    setTimeout(()=> {
      $(index).removeClass('animated flipOutY ');
      this.flip[i]=false;
    }, 600)
  }

  setPost(post) {
    localStorage.setItem('post',JSON.stringify(post));
  }


}
