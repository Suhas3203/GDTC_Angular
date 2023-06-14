import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { userInterface } from 'src/app/Interfaces/user-interface';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent {
  newUser!: userInterface;
  constructor(
    private userService: UserServiceService,
    // private router: Router,
    public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public user: any
  ) {}

  saveChanges(): void {
    console.log('Course updated:', this.user);

    this.newUser = {
      name: this.user.name,
      email: this.user.email,
      mobileNumber: this.user.mobileNumber,
      password: 'Pass@123',
      learnerLocation: {
        cityName: this.user.learnerLocation.cityName,
      },
    };
    this.userService
      .updateExistingUser(this.user.id, this.newUser)
      .subscribe((result) => {
        console.log(result);
      });
    this.dialogRef.close();
    window.location.reload();
  }

  closeDialog(): void {
    this.dialogRef.close();
    window.location.reload();
  }
}
