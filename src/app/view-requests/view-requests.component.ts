import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {
  posts:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("/api/getRequests").subscribe(res=>{
      this.posts=res;
    },err=>{
      console.log(err);
    })
  }

}
