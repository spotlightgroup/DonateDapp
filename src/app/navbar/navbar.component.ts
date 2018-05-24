import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../util/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  User = "";
  message = "";
  isLogged = false;
  constructor(private http:HttpClient, private data: DataService, private router: Router) { }

  ngOnInit() {
    this.data.isLogged = true;
    setInterval(()=> {
      if(this.data.userInfo.username) {
        this.isLogged = this.data.isLogged;
      }
    }, 2000)

  }


  logout(){
    setTimeout(()=> {
      window.location.reload()
    }, 1000)
    this.http.post('/api/logout',{}).subscribe(res => {
      this.data.isLogged = false;

      this.router.navigate(['home']);


    }, err => {
      this.message = err.error.msg;
    });
    };

}
