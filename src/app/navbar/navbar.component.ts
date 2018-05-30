import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../util/data.service';
import { Router } from '@angular/router';
import { MatDialog , MatDialogRef , MAT_DIALOG_DATA } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import * as $ from 'jquery';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})



export class NavbarComponent implements OnInit {
  fadeShow = true;
  userInfo :any;
  message = "";
  isLogged = false;
constructor(private http:HttpClient,
    private data: DataService,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit() {
    //get the user info from the browser localStorage;
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
    // check weather if the user is logged in or not every one second;
    setInterval(()=> {
      if(localStorage.getItem('isLogged') === "true") {
        this.isLogged = true;
      }
      else {
        this.isLogged = false;
      }
    }, 1000)
// hide the  logged in content;
  $(".fadeIn").hide();
  }


  loadRequests(){
    setTimeout(() => {
      window.location.reload();
    }, 1500)
  }

// handle the logout  event
  logout(){
    this.fadeClick()
    //navigate to the home page and reload the page;
    setTimeout(() => {
      this.router.navigate(['home']);
      window.location.reload()
    },1000)
    // check the user as not logged in;
    localStorage.setItem('isLogged', 'false');
    // remove the user credintial;
    this.http.post('/api/logout',{}).subscribe(res => {
    localStorage.clear();

    }, err => {
      this.message = err.error.msg;
    });
  };

  openLogin(): void {
    let dialogRef = this.dialog.open(LoginComponent, {
      panelClass: 'custom-dialog-container'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  };

  fadeClick(){
    if(this.fadeShow===true){
      $(".fadeIn").addClass('animated fadeInRight');
      $(".circle").css('-webkit-animation', 'spinR 600ms linear ');
      $(".fadeIn").show();
      setTimeout(()=> {
        $(".fadeIn").removeClass('animated fadeInRight');
        this.fadeShow=false;
      }, 600)
    }
    if(this.fadeShow===false){
      $(".fadeIn").addClass('animated fadeOutRight');
      $(".circle").css('-webkit-animation', 'spinL 600ms linear ');
      setTimeout(()=> {
        $(".fadeIn").hide();
        $(".fadeIn").removeClass('animated fadeOutRight');
        this.fadeShow=true;
      }, 600)
    }
  }
}
