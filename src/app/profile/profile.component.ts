import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user="";
  message = "";
  model : any;



  constructor(private http:HttpClient , private router:Router) { }

  ngOnInit() {
    this.model.image = "http://sreeguru.in/public/images/male.png"
    this.http.get('/api/currentUser',{}).subscribe(res => {
      this.model = res;
      console.log('res', res)
    }, err => {
      console.log(err.error);
    })
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
            that.message = "error >>"
      });
    }
  }
}
