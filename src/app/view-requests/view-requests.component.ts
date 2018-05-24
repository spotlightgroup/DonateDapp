import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {
  requests:any;
  message = "";
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("/api/getRequests").subscribe(res=>{
      this.requests=res;
    },err=>{
      console.log(err);
    })
  }

  finalize(request){
    if(request.amount===0){
      this.message= "Enter real amount"
      return;
    }
    if(request.approvals<=request.donors/2){
      this.message="you don't have the permession"
      return;
    }
    this.message = "done"

  }

}
