import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Inject } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { userInterface } from 'src/app/Interfaces/user-interface';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent {
  registrationForm!: FormGroup;
  user!: userInterface;
  constructor(
    private userService: UserServiceService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UserRegisterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.data.registrationForm;
  }

  // registration function
  register() {
    this.user = {
      name: this.registrationForm.controls['name'].value,
      email: this.registrationForm.controls['email'].value,
      mobileNumber: this.registrationForm.controls['mobileNumber'].value,
      password: this.registrationForm.controls['password'].value,
      learnerLocation: {
        cityName: this.registrationForm.controls['cityName'].value,
      },
    };
    // console.log(this.user);
    this.userService.registerNewUser(this.user).subscribe((result) => {
      console.log(result);
    });
    this.dialogRef.close();
  }

  confirmClosing() {
    if (
      window.confirm('Are you really want to close Registration Process?') ==
      true
    ) {
      this.dialogRef.close();
      // return true;
    }
    return false;
  }
}
