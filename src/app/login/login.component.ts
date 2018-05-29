import { Component , OnInit , Inject , ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../util/data.service';
import { MatDialog , MatDialogRef , MAT_DIALOG_DATA } from '@angular/material';
import { RegisterComponent } from '../register/register.component';

@Component({
  encapsulation: ViewEncapsulation.None ,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  User = {};
  data :any;
  message = "";

  constructor(
    private router: Router,
    private http:HttpClient,
    private Data:DataService ,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public _data: any
  ) { }

  ngOnInit() {
  }


  // close the login dialog;
  onNoClick(): void {
  this.dialogRef.close();
}

//close the login dialog and open the sign up dialog;
goToSignup(): void {
this.dialogRef.close();
let dialogRef = this.dialog.open(RegisterComponent, {
  panelClass: 'custom-dialog-container'
});
dialogRef.afterClosed().subscribe(result => {
  console.log('The dialog was closed');
});
};

// send the http request to the server with the username and the password;
login() {
this.http.post('/api/login',this.User).subscribe(res => {
  //save the result in a local variable;
  this.data = res;
  //get the current user info after the login;
  this.Data.getUserInfo()
  // store the login info in the browser localStorage;
  localStorage.setItem('jwtToken', this.data.token);
  // check the user as logged in;
  localStorage.setItem('isLogged', 'true');
  // close the login dialog
  this.dialogRef.close();
  //reload the page after the login is complete;
  setTimeout(()=> {
  window.location.reload()
},1000)

}, err => {
  this.message = err.error.msg;
});
}

}
