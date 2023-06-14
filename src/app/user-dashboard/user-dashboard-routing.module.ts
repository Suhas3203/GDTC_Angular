import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { InProgressComponent } from './in-progress/in-progress.component';
import { CompletedComponent } from './completed/completed.component';
import { JobsPortalComponent } from './jobs-portal/jobs-portal.component';
import { AdminVerifyGuard } from '../guards/admin-verify.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { CourseListComponent } from './course-list/course-list.component';
import { AddNewCourseComponent } from './add-new-course/add-new-course.component';

const routes: Routes = [
  {
    path: '',
    component: UserDashboardComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'admin-dashboard',
        component: AdminDashboardComponent,
      },

      { path: 'all-users', component: AllUsersComponent },
      { path: 'courseslist', component: CourseListComponent },
      { path: 'all-courses', component: AllCoursesComponent },
      { path: 'in-progress', component: InProgressComponent },
      { path: 'completed', component: CompletedComponent },
      { path: 'jobs', component: JobsPortalComponent },
    ],
  },
  { path: 'add-course', component: AddNewCourseComponent },
  {
    path: 'enrollment',
    component: EnrollmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDashboardRoutingModule {}
