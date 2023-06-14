import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  @ViewChild('feedbackDialog')
  feedbackDialog!: TemplateRef<any>;

  openFeedbackDialog() {
    this.dialog.open(this.feedbackDialog);
  }

  onSubmit() {
    this.dialog.closeAll();
    this.router.navigate(['/home']);
  }
  constructor(
    private location: Location,
    private dialog: MatDialog,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.location.forward();
    // if (!this.userService.checkLoggedIn()) {
    //   this.router.navigate(['/home']);
    // }
  }
}
