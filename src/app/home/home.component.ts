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

message = '';




  constructor(private http:HttpClient) { }

  ngOnInit() {

  }
  sendPost() {
    console.log(this.model)
    this.http.post('/addPost',this.model).subscribe(res => {
      this.message = "done"
    }, err => {
      this.message = "error"
    });
  }
}
