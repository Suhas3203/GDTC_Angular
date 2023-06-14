import { UserServiceService } from './../../services/user-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ChangeDetectorRef, Component } from '@angular/core';
import { CourseDetailsDialogComponent } from './course-details-dialog/course-details-dialog.component';
import { CourseServiceService } from 'src/app/services/course-service.service';
import { CourseInterface } from '../../Interfaces/course-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-courses',
  templateUrl: './explore-courses.component.html',
  styleUrls: ['./explore-courses.component.css'],
})
export class ExploreCoursesComponent {
  courses!: CourseInterface[];

  imageUrl = 'https://source.unsplash.com/random/900×700/?coding';
  getAllCourses() {
    this.courseService.getAllCourses().subscribe((result) => {
      // console.log(result);
      this.courses = result;
    });
  }

  openCourseDetails(course: any) {
    this.dialog.open(CourseDetailsDialogComponent, {
      data: course,
    });
  }

  enrollToCourse(course: CourseInterface) {
    //  console.log(course);
    //   console.log(this.userServiceService.is_LoggedIn);

    if (this.userServiceService.is_LoggedIn) {
      this.router.navigate(['/home/user-dashboard/enrollment'], {
        queryParams: { course: JSON.stringify(course) },
        skipLocationChange: true,
      });
    } else {
      this.router.navigate(['/login']);
    }
    //  console.log(course);
  }

  constructor(
    private dialog: MatDialog,
    private courseService: CourseServiceService,
    private userServiceService: UserServiceService,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    // this.courses. =  //imageUrl:
  }
  ngOnInit(): void {
    this.getAllCourses();
    this.router.events.subscribe((res) =>{
      // console.log(this.userServiceService.is_LoggedIn);
      this.changeDetectorRef.detectChanges();
    })
    
  
  }
}
