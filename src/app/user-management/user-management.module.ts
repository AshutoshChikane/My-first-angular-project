import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { FormsModule } from '@angular/forms';
import { CsvHandlerComponent } from '../csv-handler/csv-handler.component'




@NgModule({
  declarations: [
    CreateUserComponent,
    ViewUserComponent,
    CsvHandlerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CsvHandlerComponent
  ]
})
export class UserManagementModule { }
