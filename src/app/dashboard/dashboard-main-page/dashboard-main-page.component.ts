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
  @ViewChild("chart") chart!: ChartComponent;
  // public chartOptions: Partial<ChartOptions>;
  showchart: boolean = false;
  data: { [month: string]: dashboardInterface[] } = {};
  months: string[] = [];
  month1Data: dashboardInterface[] = [];
  month2Data: dashboardInterface[] = [];
  month3Data: dashboardInterface[] = [];
  lastThreeMonths: string[] = [];

  public chartOptions: ChartOptions = {
    series: [],
    chart: {
      height: 250,
      type: "treemap"
    },
    title: {
      text: "Policy As Per Region"
    },
    dataLabels: {
      enabled: true
    },
    plotOptions: {
      treemap: {
        distributed: false,
        borderRadius: 2,
        colorScale: {
          ranges: [
            { from: 0, to: 1000, color: "#00A100" }
          ]
        }
      }
    },
    legend: {
      show: true, // Initialize the legend
    }
  };


  constructor(private my_api: DashboardServiceService)  { }

  ngOnInit() {
    this.my_api.fetchData().subscribe((response) => {
      console.log(response);
      this.data = response;
      this.months = Object.keys(this.data);

      this.getLastThreeMonths();  // Get last 3 months for dynamic button creation

      // Store the data for the last 3 months in separate variables
      this.month1Data = this.data[this.lastThreeMonths[0]] || [];
      this.month2Data = this.data[this.lastThreeMonths[1]] || [];
      this.month3Data = this.data[this.lastThreeMonths[2]] || [];
      console.log("month1Data",this.month1Data)
      console.log("month2Data",this.month2Data)
      console.log("month3Data",this.month3Data)

      this.chartOptions.series = [{
        name: 'Month 1',  // Or whatever name you want for the month
        data: this.month1Data.map(item => ({
          x: item.city,  // City as x-axis
          y: item.total_cases  // Total cases as y-axis
        }))
      }];

  
      // Map data to chart series in the correct format
      const chartData = this.months.map(month => {
        return {
          name: month, // Use month name as the series name
          data: this.data[month].map(item => ({
            x: item.city,  // City as x-axis
            y: item.total_cases  // Total cases as y-axis
          }))
        };
      });
  
      // Update chartOptions.series with the new structured data
      // this.chartOptions.series = chartData;
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
}
