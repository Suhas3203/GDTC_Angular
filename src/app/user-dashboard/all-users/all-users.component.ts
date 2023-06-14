import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserServiceService } from 'src/app/services/user-service.service';
import { ViewUserComponent } from './view-user/view-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
})
export class AllUsersComponent implements OnInit {
  usersList: any;
  displayedColumns = [
    'id',
    'name',
    'email',
    'mobileNumber',
    'role',
    'learnerLocation',
    'actions',
  ];

  viewUser(user: any) {
    this.dialog.open(ViewUserComponent, {
      width: '400px',
      data: user,
    });
  }

  editUser(user: any) {
    this.dialog.open(EditUserComponent, {
      width: '400px',
      data: user,
    });
  }

  // deleteUser(user: any) {
  //   if (window.confirm('Are you Sure to Delete this Course?')) {
  //     this.courseService.deleteACourse(course.id).subscribe((result) => {
  //       window.location.reload();
  //     });
  //   }
  // }

  constructor(
    private userService: UserServiceService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((result) => {
      this.usersList = result;
    });
  }
}
