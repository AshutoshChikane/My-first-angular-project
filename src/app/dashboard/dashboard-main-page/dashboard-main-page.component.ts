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

  public chartOptions: ChartOptions = {
    series: [],
    chart: {
      height: 350,
      type: "treemap"
    },
    title: {
      text: "Basic Treemap"
    },
    dataLabels: {
      enabled: true
    },
    plotOptions: {
      treemap: {
        distributed: true,
        borderRadius: 5,
        colorScale: {
          ranges: [
            { from: 0, to: 50, color: "#00A100" },
            { from: 51, to: 100, color: "#FFB200" },
            { from: 101, to: 200, color: "#FF0000" }
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
      this.chartOptions.series = chartData;
    });
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
