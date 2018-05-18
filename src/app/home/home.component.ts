import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  publicKey: 'fasdfasss'
};
Posts: any;
message = '';
sender = false;




  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getPosts()
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
  toggleSender() {
    this.sender = !this.sender
  }
}
