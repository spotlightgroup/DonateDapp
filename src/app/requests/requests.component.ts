import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../util/data.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  model:any={
    user:"",
    postId:"",
    description:"",
    amount:0,
    receiver:"",
    balance:0
  }
  constructor(private data:DataService,private http:HttpClient) {

   }

  ngOnInit() {
    this.model.postId=this.data.post._id;
    this.model.balance=this.data.post.balance;
  }

  sendRequest(){
    this.http.get("/api/currentUser")
    .subscribe(res=>{
      this.model.user=res['msg'].username;
      this.http.post("/api/addRequest",this.model)
      .subscribe(res=>{
        console.log(res);
      },err=>{
        console.log(err);
      });
    },err=>{
      console.log(err);
    });
  }
}
