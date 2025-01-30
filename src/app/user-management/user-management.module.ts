import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { ViewUserComponent } from './view-user/view-user.component';




@NgModule({
  declarations: [
    CreateUserComponent,
    ViewUserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserManagementModule { }
