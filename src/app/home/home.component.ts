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
  header: "",
  needed: 0,
  description: "",
  publicKey: ''
};
Posts: any;
message = ''
post :any;
donateClicked= false;




  constructor(private http:HttpClient, private web3:Web3Service, private data:DataService) { }

  ngOnInit() {
    this.web3.bootstrapWeb3()
    this.getPosts()

    setTimeout(()=>{
      this.model.publicKey = this.web3.accounts[0]
      console.log(this.model.publicKey)
    }, 2000)


  }
  sendPost() {
    let that = this
    this.http.post('/addPost',this.model).subscribe(res => {


    }, err => {
      this.message = "error"
      return;
    });
    that.message = "done"
    console.log('this',that.message)
    that.model = {
      header: "",
      needed: 0,
      description: "",
      publicKey: 'fasdfasss'
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
  getPublicKey(key) {
      this.data.publicKey = key;
      setTimeout(()=> {
        window.location.reload()
      },2000)
  }


}
