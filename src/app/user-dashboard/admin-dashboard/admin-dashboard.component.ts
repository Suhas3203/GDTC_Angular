import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceService } from 'src/app/services/course-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  userName = this.userService.userName;
  totalCourses = 0;
  totalRegistrations = 0;
  totalStudents = 0;

  constructor(
    private userService: UserServiceService,
    private courseService: CourseServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((result) => {
      this.userService.userName;

      this.courseService.getAllCourses().subscribe((result) => {
        result.forEach((element: any) => {
          // console.log(element);
          this.totalCourses += 1;
        });
      });

      this.userService.getAllRegistrations().subscribe((result) => {
        result.forEach((element: any) => {
          // console.log(element);
          this.totalRegistrations += 1;
        });
      });

      this.userService.getAllUsers().subscribe((result) => {
        result.forEach((element: any) => {
          // console.log(element);
          this.totalStudents += 1;
        });
      });
    });

    // console.log(this.totalCourses);
    // console.log(this.totalRegistrations);
    // console.log(this.totalStudents);
  }
}
