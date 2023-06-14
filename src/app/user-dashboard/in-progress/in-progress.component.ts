import { DatePipe, formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.css'],
})
export class InProgressComponent {
  inProgressCourses: any = [];
  registrations: any;

  today = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  applyFilter(event: Event) {}

  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.userService.userId;
    });

    this.userService
      .getRegistrationForLearners(this.userService.userId)
      .subscribe((result) => {
        this.registrations = result;

        this.registrations.forEach((element: any) => {
          if (element.startDate <= this.today) {
            this.inProgressCourses.push(element);
          }
        });
      });
  }

  //imageUrl = 'https://source.unsplash.com/random/900×700/?coding';
}
