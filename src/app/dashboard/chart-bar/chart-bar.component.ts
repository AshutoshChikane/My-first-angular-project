import { Component, ViewChild, ViewEncapsulation,Input } from '@angular/core';
import { dashboardInterface} from '../dashboard-main-page/dashboard-main-page.component'
import { DateRecordServiceService } from '../../my-service/date-record/date-record-service.service'
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";

interface ChartDataItem {
  month: string;
  fail_cases: number;
  pass_cases: number;
  total_cases: number;
}

export interface recordDataInterface{
  year: number;
  month: number;
  total_records: number;
  total_passed: number;
  total_failed: number;
  }

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  colors: string[];
};

@Component({
  selector: 'app-chart-bar',
  standalone: false,
  
  templateUrl: './chart-bar.component.html',
  styleUrl: './chart-bar.component.css'
})
export class ChartBarComponent {
  @Input() chartData: { [month: string]: dashboardInterface[] } = {};

  @ViewChild("chart") chart!: ChartComponent;
  
  
    dataa: recordDataInterface[] = [];
    // Initialize chartOptions fully to avoid undefined errors
    public chartOptions: ChartOptions = {
      series: [
        {
          name: "Fail count",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 111]
        },
        {
          name: "Pass count",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: "Total count",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      colors: [],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          borderRadius: 1 // Rounded corners
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"
        ]
      },
      yaxis: {
        title: {
          text: "(Cases)"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return val + " Cases";
          }
        }
      },
      legend: {
        show: true,
        position: "top",
        horizontalAlign: "center",
        floating: true,
        fontSize: "14px",
        fontWeight: 600,
        markers: {
          shape: 'square'
        },
        itemMargin: {
          horizontal: 5,
          vertical: 5
        }
      }
    };

    ngOnInit() {
      const months = Object.keys(this.chartData); // Get the months
      const failCases: number[] = [];
      const passCases :number[] = [];
      const totalCases : number[]= [];
    
      months.forEach(month => {
        // Assuming chartData[month] is an array of `dashboardInterface[]`
        const totalFailed = this.chartData[month].reduce((sum, record) => sum + record.fail_case, 0);
        const totalPassed = this.chartData[month].reduce((sum, record) => sum + record.pass_case, 0);
        const total = totalFailed + totalPassed; // Total cases = total passed + total failed
    
        failCases.push(totalFailed);
        passCases.push(totalPassed);
        totalCases.push(total);
      });
    
      // Create a new object for chartOptions to trigger change detection
      this.chartOptions = {
        ...this.chartOptions, // Spread the existing options
        series: [
          {
            name: "Fail count",
            data: failCases
          },
          {
            name: "Pass count",
            data: passCases
          },
          {
            name: "Total count",
            data: totalCases
          }
        ],
        xaxis: {
          categories: months // Set months as categories
        }
      };
    
      // Log the updated chartOptions to verify
      console.log(this.chartOptions);
    }
}
