import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public publicKey = "";
  public userInfo: any;
  public post:any;
  public isLogged = false;
  constructor(private http:HttpClient) {
    setTimeout(()=> {
      this.getUserInfo()
    },100)
  }


  public getUserInfo() {
    this.http.get('/api/currentUser').subscribe(res => {
      this.userInfo = res['msg'];
    }, err => {
      console.log("not logges in");
    });

  }
}
