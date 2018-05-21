import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  User = "";
  message = "";
  constructor(private http:HttpClient , private router:Router ) {
    this.islogged();
  };

  logout(){
    this.http.post('/api/logout',{}).subscribe(res => {
    }, err => {
      this.message = err.error.msg;
      return;
    });
    window.location.reload()
    this.router.navigate(['home']);
  }
  islogged(){
    this.http.get('/api/currentUser',{}).subscribe(res => {

      if(res['msg']){
        this.User = res['msg'].username;
        console.log("resss",this.User);
      }
    }, err => {
      console.log(err.error);
    })
  }
}
