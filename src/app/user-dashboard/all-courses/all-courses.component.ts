import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css'],
})
export class AllCoursesComponent implements OnInit {
  filterValue: any;
  columnName: any;
  registrations: any;
  displayedColumns = [
    'title',
    'description',
    'branchesList',
    'startDate',
    'endDate',
    'status',
  ];
  today = formatDate(new Date(), 'yyyy, MM, dd', 'en');

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
      });
  }

  applyFilter(event: Event) {
    // this.userService
    //   .getFilteredRegistrations(this.filterValue)
    //   .subscribe((result) => {
    //     // console.log(result);
    //     this.registrations = result;
    //   });
  }
}
