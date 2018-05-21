import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user="";
  model = {
    image: "https://i.imgur.com/YKhObkG.jpg",
    username:"",
    fullName: "",
    phoneNumber1: 0,
    phoneNumber2: 0,
    address: "",
    email: "",
    overview: ""
  };
  constructor(private http:HttpClient , private router:Router) { }

  ngOnInit() {
    this.http.get('/api/currentUser',{}).subscribe(res => {
      console.log("resss",res);
      if(res['msg']){
        this.user = res['msg'].username;
        this.model.username = res['msg'].username;
        this.model.fullName = res['msg'].fullName;
        this.model.phoneNumber1 = res['msg'].phoneNumber1;
        this.model.phoneNumber2 = res['msg'].phoneNumber2;
        this.model.address = res['msg'].address;
        this.model.email = res['msg'].email;
        this.model.overview = res['msg'].overview;
      }
    }, err => {
      console.log(err.error);
    })
  }
  profile() {
    this.model.username=this.user;
    this.http.post('/api/profile', this.model)
      .subscribe(res => {
        //this.router.navigate(['/login']);
      }, (err) => {
          console.log(err);
      }
    );
  }
}
