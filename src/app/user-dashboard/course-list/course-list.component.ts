import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseInterface } from 'src/app/Interfaces/course-interface';
import { CourseServiceService } from 'src/app/services/course-service.service';
import { ViewCourseComponent } from './view-course/view-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  courseList: any;
  displayColumns = [
    'id',
    'title',
    // 'description',
    'registrationValidityDate',
    'branchesList',
    'actions',
  ];
  constructor(
    private courseService: CourseServiceService,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe((result) => {
      // console.log(result);
      this.courseList = result;
    });
  }

  viewCourse(course: CourseInterface) {
    this.dialog.open(ViewCourseComponent, {
      width: '400px',
      data: course,
    });
  }

  editCourse(course: CourseInterface) {
    this.dialog.open(EditCourseComponent, {
      width: '400px',
      data: course,
    });
  }

  // deleteCourse(course: CourseInterface) {
  //   if (window.confirm('Are you Sure to Delete this Course?')) {
  //     this.courseService.deleteACourse(course.id).subscribe((result) => {
  //       window.location.reload();
  //     });
  //   }
  // }
}
