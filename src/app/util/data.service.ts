import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public publicKey = "";
  public userInfo: any;
  public post:any;

  constructor(private http:HttpClient) {
    this.getUserInfo()
   }


  getUserInfo() {
    this.http.get('/api/currentUser').subscribe(res => {
      this.userInfo = res['msg'].userInfo;
    }, err => {
      console.log(err.error);
    });

  }
}
