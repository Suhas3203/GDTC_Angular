import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css'],
})
export class CompletedComponent {
  completedCourses: any = [];
  registrations: any;

  today = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  applyFilter(event: Event) {}

  constructor(
    private userService: UserServiceService,
    private router: Router // private datePipe: DatePipe
  ) {
    // this.today = this.datePipe.transform(this.today, 'yyyy-MM-dd');
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.userService.userId;
    });

    this.userService
      .getRegistrationForLearners(this.userService.userId)
      .subscribe((result) => {
        // console.log(result);
        this.registrations = result;

        this.registrations.forEach((element: any) => {
          // console.log(element);
          // console.log(element.startDate);   //.course
          // console.log(this.today);

          if (element.endDate < this.today) {
            // console.log('in here');
            this.completedCourses.push(element);
          }
        });

        console.log(this.completedCourses);
      });
  }
}
