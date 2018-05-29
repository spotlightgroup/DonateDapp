import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../util/data.service';
import { Router } from '@angular/router';
import { MatDialog , MatDialogRef , MAT_DIALOG_DATA } from '@angular/material';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  User = "";
  message = "";
  isLogged = false;
  constructor(private http:HttpClient, private data: DataService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    setInterval(()=> {
      if(localStorage.getItem('isLogged') === "true") {
        this.isLogged = true;
      }
      else {
        this.isLogged = false;
      }
    }, 1000)

  }
loadRequests(){
  setTimeout(() => {
window.location.reload();
}, 1500)
}

  logout(){
    setTimeout(() => {
      this.router.navigate(['home']);
      window.location.reload()
    },400)
    localStorage.setItem('isLogged', 'false');

    this.http.post('/api/logout',{}).subscribe(res => {
      localStorage.remove('jwtToken');
      localStorage.remove('userInfo');
      localStorage.remove('isLogged');

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

}
