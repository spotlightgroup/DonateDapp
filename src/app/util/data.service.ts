import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public publicKey = "";
  public userInfo: any = {};
  public post:any;
  public isLogged = false;
  constructor(private http:HttpClient) {}


  public getUserInfo() {
    this.http.get('/api/currentUser').subscribe(res => {
      this.userInfo = res['msg'];
      if (this.userInfo.username) {
        this.isLogged = true;
      }
    }, err => {
      this.isLogged = false;
      console.log("not logged in");
    });

  }
}
