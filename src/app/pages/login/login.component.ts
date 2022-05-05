import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder, 
    public userService: UserService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  // collect login data
  loginForm = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]]
  });

  login() {
    this.userService.getUser(this.loginForm.value.email)
      .then((res: any)=> {
        console.log(res);
        if(res.length == 0){
          console.log('Account does not exist');
          this.snackBar.open('Account does not exist', 'OK');
        }else {
          if(res[0].password === this.loginForm.value.password){
            console.log('matched');
            this.snackBar.open('Logged In Successfully', 'OK');
          }else {
            console.log('Incorrect Password');
            this.snackBar.open('Incorrect Password', 'OK');
          }
        }
      })
      .catch((err)=> {
        console.log(err);
      })
  }

}
