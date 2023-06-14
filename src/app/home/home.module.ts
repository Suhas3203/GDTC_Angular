import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from '../navbar/header/header.component';
import { FooterComponent } from '../navbar/footer/footer.component';
import { ExploreCoursesComponent } from './explore-courses/explore-courses.component';
import { CourseDetailsDialogComponent } from './explore-courses/course-details-dialog/course-details-dialog.component';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarModule,
} from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    ExploreCoursesComponent,
    CourseDetailsDialogComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule,
    MatSnackBarModule,
  ],
  // providers: [
  // MatSnackBarModule,
  // SnackBarComponent,
  // {
  //   provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
  //   useClass: SnackBarComponent,
  //   useValue: { duration: 2500 },
  // },
  // ],
})
export class HomeModule {}
