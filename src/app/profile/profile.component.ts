import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
model = {
  fullName: "",
  phoneNumber1: 0,
  phoneNumber2: 0,
  address: "",
  email: "",
  Overview: ""
}
  constructor(private http:HttpClient) { }

  ngOnInit() {
      this.http.get('/api/currentUser',{}).subscribe(res => {
        console.log("resss",res);
      //  console.log("resss msssg",res.msg);
        if(res['msg']){
          this.username = res['msg'];

        }
      }, err => {
console.log(err.error);
      });
  }

}
