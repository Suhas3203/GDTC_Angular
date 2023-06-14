import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ExploreCoursesComponent } from './explore-courses/explore-courses.component';
import { AuthGuardGuard } from '../guards/auth-guard.guard';
import { AboutUsComponent } from '../about-us/about-us.component';
import { SupportComponent } from '../support/support.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'home-page',
        pathMatch: 'full',
      },
      {
        path: 'home-page',
        component: HomePageComponent,
      },
      {
        path: 'explore-courses',
        component: ExploreCoursesComponent,
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: 'support',
        component: SupportComponent,
      },
      {
        path: 'user-dashboard',
        // canActivate: [AuthGuardGuard],
        loadChildren: () =>
          import('../user-dashboard/user-dashboard.module').then(
            (m) => m.UserDashboardModule
          ),
      },
    ],
  },

  // { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
