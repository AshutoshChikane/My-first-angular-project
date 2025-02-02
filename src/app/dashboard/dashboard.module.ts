import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMainPageComponent } from './dashboard-main-page/dashboard-main-page.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RouterModule } from '@angular/router'; 



@NgModule({
  declarations: [
    DashboardMainPageComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule,
    RouterModule
  ]
})
export class DashboardModule { }
