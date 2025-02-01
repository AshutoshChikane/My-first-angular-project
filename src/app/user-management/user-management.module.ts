import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module'




@NgModule({
  declarations: [
    CreateUserComponent,
    ViewUserComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
  ]
})
export class UserManagementModule { }
