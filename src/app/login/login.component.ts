import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {DataService} from '../util/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserPassword = {}
  data : any
  message = ""
  constructor(private router: Router,private http:HttpClient, private Data:DataService) { }

  ngOnInit() {
  }

  login() {
  this.http.post('/api/login',this.UserPassword).subscribe(res => {
    this.data = res;
    //to store data in the browser's session
    localStorage.setItem('jwtToken', this.data.token);
    // window.location.reload()
    this.Data.getUserInfo();
    this.router.navigate(['home']);
  }, err => {
    this.message = err.error.msg;
  });
}
}
