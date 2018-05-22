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
    this.islogged();
  };

  logout(){
    this.http.post('/api/logout',{}).subscribe(res => {
    }, err => {
      this.message = err.error.msg;
      return;
    });
    window.location.reload()
  };


  islogged(){
    this.http.get('/api/currentUser',{})
    .subscribe(res => {
        this.User = res['username'];
    }, err => {
      console.log(err);
    });
  };
}
