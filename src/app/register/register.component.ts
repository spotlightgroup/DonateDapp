import { Component, OnInit , Inject , ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog , MatDialogRef , MAT_DIALOG_DATA } from '@angular/material';
import { LoginComponent } from '../login/login.component';

@Component({
  encapsulation: ViewEncapsulation.None ,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  User = {};
  message = '';


  constructor(private http: HttpClient,
     private router: Router,
     public dialog: MatDialog,
     public dialogRef: MatDialogRef<RegisterComponent>,
     @Inject(MAT_DIALOG_DATA) public _data: any
   ) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  register() {
    this.User['image'] = "http://sreeguru.in/public/images/male.png"
      this.http.post('/api/register', this.User)
        .subscribe(res => {
            this.goToLogin();
          }, (err) => {
            console.log(err);
          }
        );
    }

    goToLogin(){
      this.dialogRef.close();
      let dialogRef = this.dialog.open( LoginComponent, {
        panelClass: 'custom-dialog-container'
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }

}
