import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../util/data.service'
@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {
  requests:any;
  message = "";
  isDonor = false;
  donorsCount = 0;
  userInfo :any;
  constructor(private http:HttpClient, private data: DataService) { }



async  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (this.userInfo.type === "donor") {
      this.isDonor = true;
      await this.http.post("/api/getDonorRequests",{username:this.userInfo.username})
      .subscribe((res)=>{
        this.requests = res;
        console.log('res',res)
        // if (this.requests.length === 0) {
        //   this.message = "there is no requests yet !"
        // }

      },err=>{
        console.log(err);
      });


    }else{
      await this.http.post("/api/getRequests",{username:this.userInfo.username})
      .subscribe(res=>{
        this.requests = res;
        console.log('res',res)
          // if (this.requests.length === 0) {
          //   this.message = "there is no requests yet !"
          // }
      },err=>{
        console.log(err);
      });
    }
    console.log("this.requestssssss",this.requests);
    if (this.requests.length === 0) {
      this.message = "there is no requests yet !"
    }
  }

  finalize(request){
    if(request.amount === 0){
      this.message= "Enter real amount"
      return;
    }
    if(request.approvals <= request.donors / 2){
      this.message="you don't have the permession"
      return;
    }
    this.message = "done"

  }

  approve(request) {
    this.http.post('/api/approve', {request:request, username:this.userInfo.username})
    .subscribe(res=> {
      console.log("esheeee",res)
      this.message = "Approved !"

    }, err=> {
      console.log(err)
      this.message = " you already approved !"
    })
  }

}
