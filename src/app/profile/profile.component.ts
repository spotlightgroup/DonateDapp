import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../util/data.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user="";
  message = "";
  model :any = {
    image: "http://sreeguru.in/public/images/male.png",
    username: '',
    email: '',
    address: '',
    fullName: '',
    phoneNumber1: 0,
    phoneNumber2: 0

  }



  constructor(private http:HttpClient , private router:Router, private data:DataService) { }

  ngOnInit() {
    this.model = this.data.userInfo;
  }





  profile() {
    this.http.post('/api/profile', this.model)
      .subscribe(res => {
        //this.router.navigate(['/login']);
      }, (err) => {
          console.log(err);
      }
    );
  }

  photoUpload(photo) {

    let that = this;
    let file = photo.target.files[0]
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (e) => {
     that.http.post('/api/profileImage', {image: e.target['result']})
        .subscribe(res => {
          that.message = "photo uploaded";
          that.model = res;
        }, error => {
          if (error.status === 413) {
            that.message = "this image is too large";
            
          }
      });
    }
  }
}
