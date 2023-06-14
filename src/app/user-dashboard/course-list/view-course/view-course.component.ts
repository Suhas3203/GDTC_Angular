import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css'],
})
export class ViewCourseComponent {
  constructor(
    public dialogRef: MatDialogRef<ViewCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public course: any
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
