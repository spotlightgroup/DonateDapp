import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../util/data.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import swal from 'sweetalert2';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user="";
  message = "";
  // the user info model;
  model :any = {
    image: "http://sreeguru.in/public/images/male.png",
    username: '',
    email: '',
    publicKey:'',
    address: '',
    fullName: '',
    phoneNumber1: 0,
    phoneNumber2: 0,
    overview: ''
  }



  constructor(
    private http:HttpClient,
    private router:Router,
    private data:DataService) { }

  ngOnInit() {
    // get the user info from the localStorage;
    this.model = JSON.parse(localStorage.getItem('userInfo'));

    // if the user doesn't have an image give him a default one;
    if(!this.model.image){
      this.model.image = "http://sreeguru.in/public/images/male.png";
    }

  }


  async profile() {
    await  this.http.post('/api/profile', this.model)
        .subscribe(res => {
          console.log('resss in profile' ,res)
          this.model.email=res['email'];
          this.model.fullName=res['fullName'];
          this.model.publicKey=res['publicKey'];
        //  this.model=res;
        }, (err) => {
            console.log(err);
        }
      );
    }
    alert(){
      swal({
        position: 'top-end',
        type: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      });
    }
  );
}
// the success message;
alert(){
  swal({
    position: 'top-end',
    type: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  })
}

// upload the profile photo
photoUpload(photo) {
//get the image from the user input;
  let file = photo.target.files[0]
  let fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onload = (e) => {
    // send it to the server
    this.http.post('/api/profileImage', {image: e.target['result']})
    .subscribe(res => {
      this.message = "photo uploaded";
      this.model = res;
    }, error => {
      if (error.status === 413) {
        this.message = "this image is too large";

      }
    });
  }
}
}
