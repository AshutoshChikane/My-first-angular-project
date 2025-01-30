import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CreateUserComponent,
    ViewUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class UserManagementModule { }
