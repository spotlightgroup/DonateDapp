import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username="";
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
