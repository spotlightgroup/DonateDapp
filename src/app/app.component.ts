import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  User = "";
  message = "";
  constructor(private http:HttpClient) {

  };

  logout(){
    this.http.post('/api/logout',{}).subscribe(res => {}, err => {
      this.message = err.error.msg;
    });
  }
  currentUser(){
    this.http.get('/api/currentUser',{}).subscribe(res => {}, err => {
      this.User = err.error.msg;
    });
  }
}
