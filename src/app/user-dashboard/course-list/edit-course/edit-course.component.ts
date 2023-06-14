import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CourseServiceService } from 'src/app/services/course-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css'],
})
export class EditCourseComponent {
  constructor(
    private courseService: CourseServiceService,
    private router: Router,
    public dialogRef: MatDialogRef<EditCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public course: any
  ) {}

  saveChanges(): void {
    // Save changes to backend
    console.log('Course updated:', this.course);
    this.courseService
      .updateExistingCourse(this.course.id, this.course)
      .subscribe((result) => {
        console.log(result);
      });
    this.dialogRef.close();
    window.location.reload();
  }

  closeDialog(): void {
    this.dialogRef.close();
    window.location.reload();
  }
}
