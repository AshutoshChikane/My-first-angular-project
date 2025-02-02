import { Component, ViewChild } from '@angular/core';
import { DashboardServiceService } from '../../my-service/dashboard/dashboard-service.service';
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexChart,
  ApexPlotOptions,
  ApexLegend
} from "ng-apexcharts";
import { ChartComponent } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
};

export interface dashboardInterface {
  "city": string;
  "total_cases": number;
  "smoker_count": number;
  "non_smoker_count": number;
  "male_count": number;
  "female_count": number;
  "transgender_count": number;
  "pass_case": number;
  "fail_case": number;
  "date": Date;
  "id": number;
}

@Component({
  selector: 'app-dashboard-main-page',
  standalone: false,
  templateUrl: './dashboard-main-page.component.html',
  styleUrls: ['./dashboard-main-page.component.css']
})
export class DashboardMainPageComponent {
  // @ViewChild("chart") chart!: ChartComponent;
  // public chartOptions: Partial<ChartOptions>;
  showchart: boolean = false;
  data: { [month: string]: dashboardInterface[] } = {};
  months: string[] = [];
  month1Data: dashboardInterface[] = [];
  month2Data: dashboardInterface[] = [];
  month3Data: dashboardInterface[] = [];
  selectedData: dashboardInterface[] = [];
  lastThreeMonths: string[] = [];
  total_male = 0
  total_female = 0
  total_transgender = 0


  constructor(private my_api: DashboardServiceService)  { }

  ngOnInit() {
    this.my_api.fetchData().subscribe((response) => {
      console.log(response);
      this.data = response;
      this.months = Object.keys(this.data);

      this.getLastThreeMonths();  // Get last 3 months for dynamic button creation

      // Store the data for the last 3 months in separate variables
      this.month1Data = this.data[this.lastThreeMonths[2]] || [];
      this.month2Data = this.data[this.lastThreeMonths[1]] || [];
      this.month3Data = this.data[this.lastThreeMonths[0]] || [];
      console.log("month1Data",this.month1Data)
      console.log("month2Data",this.month2Data)
      console.log("month3Data",this.month3Data)
      this.selectedData = this.month1Data
      
      
    });
  }
  getLastThreeMonths() {
    const lastThree = this.months.slice(-3);  // Get last 3 months
    this.lastThreeMonths = lastThree.reverse();  // Reverse to display in order
  }

  showData() {
    console.log("show data");
    this.showchart = false;
  }

  showChart() {
    console.log("show chart");
    this.showchart = true;
  }

  
  changeMonth(event: any) {
    const selectedValue = event.target.value;
    console.log(`Selected Month: ${selectedValue}`);

    if (selectedValue === '1') {
      this.selectedData = this.month1Data;
    } else if (selectedValue === '2') {
      this.selectedData = this.month2Data;
    } else if (selectedValue === '3') {
      this.selectedData = this.month3Data;
    }
  }
}
