import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldControl } from '@angular/material/form-field';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

@Component({
  selector: 'app-raise-a-ticket',
  templateUrl: './raise-a-ticket.component.html',
  styleUrls: ['./raise-a-ticket.component.css'],
})
export class RaiseATicketComponent {
  ticketForm!: FormGroup;
  courses: any;
  fileName: any;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<RaiseATicketComponent> // @Inject(MAT_DIALOG_DATA) public user: any
  ) {}
  ngOnInit(): void {
    this.ticketForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      course: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      issue: new FormControl('', Validators.required),
      attachment: new FormControl(''),
    });
  }

  onFileSelected($event: Event) {
    console.log(this.fileName);
  }

  onSubmit() {
    console.log(this.ticketForm.value);
    this.dialogRef.close();
  }
  // @ViewChild('ticket', { read: ViewContainerRef })
  // ticket!: ViewContainerRef;
  // progress: any;

  // upload(file: string | Blob) {
  //   this.progress = 1;
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   this.http
  //     .post('your-url-here', formData, {
  //       reportProgress: true,
  //       observe: 'events',
  //     })
  //     .pipe(
  //       map((event: any) => {
  //         if (event.type == HttpEventType.UploadProgress) {
  //           this.progress = Math.round((100 / event.total) * event.loaded);
  //         } else if (event.type == HttpEventType.Response) {
  //           this.progress = null;
  //         }
  //       }),
  //       catchError((err: any) => {
  //         this.progress = null;
  //         alert(err.message);
  //         return throwError(err.message);
  //       })
  //     )
  //     .toPromise();
  // }
}
