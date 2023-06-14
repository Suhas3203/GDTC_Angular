import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { SupportComponent } from './support.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RaiseATicketComponent } from './raise-a-ticket/raise-a-ticket.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SupportComponent, RaiseATicketComponent],
  imports: [
    CommonModule,
    SupportRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatExpansionModule,
    MatDialogModule,
    MatFileUploadModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    // FormsModule,
  ],
  providers: [
    //   MatSelectConfig,
    //   {
    //     provide: MAT_SELECT_SCROLL_STRATEGY,
    //     useFactory:(config: MatSelectConfig)=>()=>config.scrollStrategy(),
    //     deps: [MatSelectConfig],
    // }
  ],
}) //, useFactory: scrollFactory, deps: [Overlay]
export class SupportModule {}
