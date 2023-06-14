import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-course-details-dialog',
  templateUrl: './course-details-dialog.component.html',
  styleUrls: ['./course-details-dialog.component.css'],
})
export class CourseDetailsDialogComponent {
  dataOfCourse: any;
  constructor(
    private userService: UserServiceService,
    private router: Router,
    public dialogRef: MatDialogRef<CourseDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dataOfCourse = data;
  }

  onEnroll(): void {
    if (this.userService.is_LoggedIn) {
      this.router.navigate(['/home/user-dashboard/enrollment'], {
        queryParams: { course: JSON.stringify(this.dataOfCourse) },
        skipLocationChange: true,
      });
    } else {
      this.router.navigate(['/login']);
    }
    //  console.log('Enroll now button clicked');
    this.dialogRef.close();
  }
}
