import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enrollment-success',
  templateUrl: './enrollment-success.component.html',
  styleUrls: ['./enrollment-success.component.css'],
})
export class EnrollmentSuccessComponent {
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<EnrollmentSuccessComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onContinue() {
    this.dialogRef.close();
    this.router.navigate(['/home/user-dashboard']);
  }
}
