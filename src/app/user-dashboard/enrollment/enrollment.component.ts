import { DatePipe, formatDate } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseInterface } from 'src/app/Interfaces/course-interface';
import { UserServiceService } from 'src/app/services/user-service.service';
import { MatDialog } from '@angular/material/dialog';
import { EnrollmentSuccessComponent } from '../enrollment-success/enrollment-success.component';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css'],
})
export class EnrollmentComponent {
  selectedCourse!: CourseInterface;
  enrollmentResult: any;
  branches!: any[];
  enrollmentForm!: FormGroup;

  branchErrorMessage = 'Please select a branch';
  durationErrorMessage = 'Duration is required and should be a number upto 12';
  courseStartDateErrorMessage = 'Course start date is required';

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private router: Router,
    private userService: UserServiceService,
    public datePipe: DatePipe,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      this.userService.userId;
      this.changeDetectorRef.detectChanges();
    });

    this.route.queryParams.subscribe((params) => {
      this.selectedCourse = JSON.parse(params['course']);
    });

    this.enrollmentForm = this.fb.group({
      userId: ['', Validators.required],
      courseId: ['', Validators.required],
      branch: ['', Validators.required],
      duration: ['', [Validators.required, Validators.pattern('^[1-9]*$')]],
      courseStartDate: ['', Validators.required],
    });

    this.enrollmentForm.patchValue({
      userId: this.userService.userId, // replacing with actual user ID from service
      courseId: this.selectedCourse.id,
    });
  }

  onSubmit() {
    this.enrollmentForm.controls['courseStartDate'].setValue(
      this.datePipe.transform(
        this.enrollmentForm.value.courseStartDate,
        'yyyy-MM-dd'
      )
    );

    this.userService
      .registerLearnerForCourse(this.enrollmentForm.getRawValue())
      .subscribe((result) => {
        this.enrollmentResult = result;
        // console.log(this.enrollmentResult);
        this.dialog.open(EnrollmentSuccessComponent, {
          data: this.enrollmentResult,
        });
      });

    setTimeout(() => {
      this.dialog.closeAll();
      this.router.navigate(['/home/user-dashboard/dashboard']);
    }, 8000);
    // this.router.navigate(['/enrollment-success']);
  }
}
