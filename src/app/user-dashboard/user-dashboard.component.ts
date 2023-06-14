import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent {
  is_Admin!: boolean;
  constructor(private router: Router, private userService: UserServiceService) {
    this.router.events.subscribe((res) => {
      this.is_Admin = this.userService.is_Admin;
    });
  }
}
