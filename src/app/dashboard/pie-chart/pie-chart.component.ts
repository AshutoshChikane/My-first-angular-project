import { Component, ViewChild ,SimpleChanges, Input} from "@angular/core";
import {genderDataInterface} from '../dashboard-main-page/dashboard-main-page.component'
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ChartComponent, ApexOptions
} from "ng-apexcharts";

export type chartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-pie-chart',
  standalone: false,
  
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css'
})
export class PieChartComponent {
  @Input() chartData: genderDataInterface = {total_male: 0,
    total_female: 0,
    total_transgender: 0};

  @ViewChild("chart") chart!: ChartComponent;

  public chartOptions: chartOptions = {
    series: [44, 55, 13, 43],
    chart: {
      width: 350,
      type: "pie"
    },
    labels: ["Team A", "Team B", "Team C", "Team D"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  };

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['chartData']) {
      console.log("chartData changed:", this.chartData);
      this.updateChart();
    }
  }

  private updateChart() {
    // Use chartData to update series dynamically
    this.chartOptions.series = [
      this.chartData.total_male,
      this.chartData.total_female,
      this.chartData.total_transgender
    ];
    this.chartOptions.labels = ['Male', 'Female', 'Transgender'];
  }

}
