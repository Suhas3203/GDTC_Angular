import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { BranchesInterface } from 'src/app/Interfaces/branchesInterface';
import { CourseInterface } from 'src/app/Interfaces/course-interface';
import { CourseServiceService } from 'src/app/services/course-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-add-new-course',
  templateUrl: './add-new-course.component.html',
  styleUrls: ['./add-new-course.component.css'],
})
export class AddNewCourseComponent {
  newBranchList: any[] = [];
  title!: string;
  description!: string;
  registrationValidity!: Date;
  branchesList!: any[];
  selectedBranches!: any[];
  otherBranches!: string;
  pincode!: number;
  branchList: any[] = [];

  constructor(
    private dialogRef: MatDialogRef<AddNewCourseComponent>,
    private userService: UserServiceService,
    private courseService: CourseServiceService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.branchesList = []; // empty branches list
    this.selectedBranches = [];
    this.otherBranches = '';
  }

  onInputPincode(event: Event) {
    console.log();
    if (this.pincode.toString().length == 6) {
      this.userService
        .getCityNameFromApi(this.pincode)
        .subscribe((result: any) => {
          // console.log(result);
          this.branchesList = result[0].PostOffice;
        });
    }
  }

  getSelectedBranch(event: MatSelectChange) {
    const reserveSelections = this.selectedBranches.at(
      this.selectedBranches.length - 1
    );
    this.branchList.push(reserveSelections);
    // console.log(this.branchList);
  }

  save() {
    // console.log(this.selectedBranches);

    this.branchList.forEach((element) => {
      this.newBranchList.push({ branchLocation: element });
    });

    const course = {
      title: this.title,
      description: this.description,
      registrationValidity: this.datePipe.transform(
        this.registrationValidity,
        'yyyy-MM-dd'
      ),
      branchesList: this.newBranchList,
    };

    this.courseService.addNewCourse(course).subscribe((result) => {
      console.log(result);
    });
    window.location.reload();
    this.dialogRef.close();
  }

  cancel() {
    if (window.confirm('Are You want to close this process?')) {
      this.dialogRef.close();
    }
  }
}
