import { AddNewCourseComponent } from './../../user-dashboard/add-new-course/add-new-course.component';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  login_status: any;
  is_Admin!: boolean;
  // set logout after login
  logout() {
    this.userService.logoutFromAccount();
    this.is_Admin = false;
  }

  addNewCourse() {
    this.dialog.open(AddNewCourseComponent, {
      width: '400px',
    });
  }

  constructor(
    private userService: UserServiceService,
    private router: Router,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.login_status = this.userService.is_LoggedIn;
      this.is_Admin = this.userService.is_Admin;
      // console.log(this.userService.is_Admin);
    });
  }
}
