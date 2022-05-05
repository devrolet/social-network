import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  constructor(
    public userService: UserService, 
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  logout() {
    this.userService.user = undefined;
    this.router.navigate(['/login']);
    this.snackBar.open('Logged Out', 'OK');
  }

}
