import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FailPassChartComponent } from './fail-pass-chart/fail-pass-chart.component';
import { RouterModule } from '@angular/router'; 
import { NgApexchartsModule } from 'ng-apexcharts';



@NgModule({
  declarations: [
    FailPassChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgApexchartsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ChartProjectModule { }
