import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { InProgressComponent } from './in-progress/in-progress.component';
import { CompletedComponent } from './completed/completed.component';
import { JobsPortalComponent } from './jobs-portal/jobs-portal.component';
import { EnrollmentSuccessComponent } from './enrollment-success/enrollment-success.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { CourseListComponent } from './course-list/course-list.component';
import { AddNewCourseComponent } from './add-new-course/add-new-course.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { ViewCourseComponent } from './course-list/view-course/view-course.component';
import { EditCourseComponent } from './course-list/edit-course/edit-course.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ViewUserComponent } from './all-users/view-user/view-user.component';
import { EditUserComponent } from './all-users/edit-user/edit-user.component';
import { SpinnerComponent } from './spinner/spinner.component';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarModule,
} from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@NgModule({
  declarations: [
    UserDashboardComponent,
    DashboardComponent,
    EnrollmentComponent,
    AllCoursesComponent,
    InProgressComponent,
    CompletedComponent,
    JobsPortalComponent,
    EnrollmentSuccessComponent,
    AllUsersComponent,
    CourseListComponent,
    AddNewCourseComponent,
    AdminDashboardComponent,
    ViewCourseComponent,
    EditCourseComponent,
    ViewUserComponent,
    EditUserComponent,
    // SpinnerComponent,
  ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatTableModule,
    // MatMomentDateModule,
    MatNativeDateModule,
    MatDialogModule,
    MatButtonModule,
    MatPaginatorModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  providers: [
    DatePipe,
    // MatSnackBarModule,
    // SnackBarComponent,
    // {
    //   provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
    //   useClass: SnackBarComponent,
    //   useValue: { duration: 2500 },
    // },
  ], //{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
})
export class UserDashboardModule {}
