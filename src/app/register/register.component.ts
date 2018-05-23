import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  User = {};
  message = '';


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

register() {
    this.http.post('/api/register', this.User)
      .subscribe(res => {
          this.router.navigate(['/login']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
