import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRegisterComponent } from '../user-register/user-register.component';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  loginForm!: FormGroup;
  registrationForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private userService: UserServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    this.registrationForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required]],
      password: ['', [Validators.required]],
      // address: this.fb.group({
      cityName: ['', [Validators.required]],
      // }),
    });

    if (this.userService.checkLoggedIn()) {
      this.router.navigate(['/home/user-dashboard']);
    }
  }

  // login function
  login() {
    // console.log(this.loginForm.value);
    this.userService.authenticateUserLogin(this.loginForm.getRawValue());
  }

  // open registration dialog
  openRegistrationDialog() {
    const dialogRef = this.dialog.open(UserRegisterComponent, {
      width: '600px',
      data: { registrationForm: this.registrationForm },
    });

    dialogRef.afterClosed().subscribe((result) => {
      // console.log('The dialog was closed' + result);
      this.registrationForm.reset();
    });
  }
}
