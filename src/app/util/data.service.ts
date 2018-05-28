import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public publicKey = "";
  public userInfo: any = {};
  public post:any;
  constructor(private http:HttpClient) {}


  public getUserInfo() {
    this.http.get('/api/currentUser').subscribe(res => {
      localStorage.setItem('userInfo', JSON.stringify(res['msg']));
      this.userInfo = res['msg']
      if (res['msg'].type === 'donor') {
        localStorage.setItem('isDonor','true');
      }
      else {
        localStorage.setItem('isDonor','false');

      }


    }, err => {
      console.log("not logged in");
    });

  }
}
