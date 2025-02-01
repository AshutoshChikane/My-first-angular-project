import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
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
};

@Component({
  selector: 'app-fail-pass-chart',
  standalone: false,
  templateUrl: './fail-pass-chart.component.html',
  styleUrls: ['./fail-pass-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FailPassChartComponent {
  @ViewChild("chart") chart!: ChartComponent;

  // Initialize chartOptions fully to avoid undefined errors
  public chartOptions: ChartOptions = {
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 111]
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }
    ],
    chart: {
      type: "bar",
      height: 350
    },
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
        text: "$ (thousands)"
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function(val) {
          return "$ " + val + " thousands";
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

  constructor() {
    // chartOptions is now fully populated at initialization, no need for Partial<ChartOptions>
  }
}
