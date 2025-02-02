  import { Component,ViewChild, Input ,OnChanges, SimpleChanges} from '@angular/core';
  import { ChartComponent } from 'ng-apexcharts';
  import { ApexChart, ApexOptions } from 'ng-apexcharts';

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
    selector: 'app-tree-chart',
    standalone: false,
    
    templateUrl: './tree-chart.component.html',
    styleUrl: './tree-chart.component.css'
  })
  export class TreeChartComponent {
    @Input() chartData: dashboardInterface[] = [];

    @ViewChild("chart") chart!: ChartComponent;
      // public chartOptions: Partial<ChartOptions>;
      showchart: boolean = false;
      // data: { [month: string]: dashboardInterface[] } = {};
      months: string[] = [];
      // month1Data: dashboardInterface[] = [];
      // month2Data: dashboardInterface[] = [];
      // month3Data: dashboardInterface[] = [];
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
              { from: 10001, to: 20000, color: "#1E88E5" },
              { from: 20001, to: 30000, color: "#0D47A1" },
              ]
            }
          }
        },
        legend: {
          show: true, // Initialize the legend
        }
      };

      ngOnChanges(changes: SimpleChanges) {
        if (changes['chartData'] && this.chartData.length > 0) {
          this.updateChart();
        }
      }
      private updateChart() {
        this.chartOptions.series = [
          {
            name: 'Policy Cases', // Customize the name if needed
            data: this.chartData.map((item) => ({
              x: item.city,  // City as x-axis
              y: item.total_cases,  // Total cases as y-axis
            })),
          },
        ];
      }
  }
