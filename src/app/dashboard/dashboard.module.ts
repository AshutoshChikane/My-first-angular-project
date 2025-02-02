import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMainPageComponent } from './dashboard-main-page/dashboard-main-page.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RouterModule } from '@angular/router';
import { TreeChartComponent } from './tree-chart/tree-chart.component'; 



@NgModule({
  declarations: [
    DashboardMainPageComponent,
    TreeChartComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule,
    RouterModule
  ]
})
export class DashboardModule { }
