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
  // the post form model
  model:any = {
  user: '',
  header: "",
  needed: 0,
  description: "",
  publicKey: '',
  balance: 0
};


// all the information about the current user;
userInfo :any = {
username :'' 
};

// array of the posts that we will get it from the database;
Posts :any;

// temp variable to save the post we clicked on;
post :any;

// warning message to show for the user;
message = '';

// is the current user type is donor or Project maker
isDonor = false;

// is the user logged in or not;
isLogged = false;


constructor( private http :HttpClient, private web3 :Web3Service, private data :DataService ) { }

  ngOnInit() {
    // check if the user is logged in or not;
    if (localStorage.getItem('isLogged') === "true") {
    this.isLogged = true;
    }
    else {
      this.isLogged = false;
      return;
    }


    // check if the user is donor or Project maker;
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
    if(this.userInfo.type === "donor") {
      this.isDonor = true;
    };
    // to send the user name with the post medel;
    this.model.user = this.userInfo.username;
    // start the web3 provider this function is inside the file web3.Service
    this.web3.bootstrapWeb3();
    // get the posts from the database
    this.getPosts();
    // set the user publicKey and get it from web3 service;
    setTimeout(()=>{
      this.model.publicKey = this.web3.accounts[0]
    }, 500)
  }

// send the post information to the server;
sendPost() {

// prevent the user from posting if he does't have metamask;
  if (this.model.publicKey === '') {
    this.message = 'use metamask to continue'
    return;
  };

// http request to add the post to the database;
  this.http.post('/addPost',this.model).subscribe(res => {
    this.message = "post added"
  }, err => {
    this.message = "error"
    return;
  });
  this.message = "done"
// reset the model to the default values;
  this.model = {
    user: "",
    header: "",
    needed: 0,
    description: "",
    publicKey: '',
    balance: 0,
    donors: []
  };
  // reget the posts after addin g the new post
  this.getPosts();
};

getPosts() {
  this.http.get("/getPosts").subscribe(res => {
    this.Posts = res;
  }, err => {
    this.message = "error getting the posts";
    return;

  })
};

// the jquery animation for the post cards;
flipOn(i){
  this.flip[i]=false
  var index=".card"+i
  $(index).addClass('animated flipOutY ');
  setTimeout(()=> {
    $(index).removeClass('animated flipOutY ');
    this.flip[i]=true;
  }, 600)
};

flipOf(i){
  var index=".card"+i
  $(index).addClass('animated flipOutY ');
  setTimeout(()=> {
    $(index).removeClass('animated flipOutY ');
    this.flip[i]=false;
  }, 600)
};

// save the post in the localStorage temporary after click donate or spend;
setPost(post) {
  localStorage.setItem('post',JSON.stringify(post));
}

}
