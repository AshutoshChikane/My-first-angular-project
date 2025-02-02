import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
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
  selector: 'app-fail-pass-chart',
  standalone: false,
  templateUrl: './fail-pass-chart.component.html',
  styleUrls: ['./fail-pass-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class FailPassChartComponent {
  @ViewChild("chart") chart!: ChartComponent;

  dataa: recordDataInterface[] = [];
  // Initialize chartOptions fully to avoid undefined errors
  public chartOptions: ChartOptions = {
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 111]
      },
      {
        name: "Pass",
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

  
  
  constructor(private my_api: DateRecordServiceService) {
  
  }
  ngOnInit(){
    this.my_api.fetchData().subscribe((response) => {
      console.log(response)
      this.dataa = response;
      const monthNames:string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
      const array_date = this.dataa.map(item => `${monthNames[item.month - 1].toLowerCase()}_${item.year}`);
      console.log(array_date)
      const total_records = this.dataa.map(item => item.total_records);
      const total_passed = this.dataa.map(item => item.total_passed);
      const total_failed = this.dataa.map(item => item.total_failed);
      this.chartOptions.xaxis.categories = array_date
      this.chartOptions.colors = ["rgb(220, 53, 69)", "rgb(77, 212, 172)", "rgb(253, 126, 20)"];
      this.chartOptions.series = [
        {
          name: "Fail Case",
          data: total_failed
        },
        {
          name: "Pass Case",
          data: total_passed
        },
        {
          name: "Total Cases",
          data: total_records
        }
      ];
      if (this.chart) {
        this.chart.updateOptions(this.chartOptions); // 🔥 Force chart update
      }
      
    })
  }
  chartShow = false
  
  showData(){
    console.log("SHOW DATA")
    this.chartShow = false
  }
  showChart(){
    console.log("SHOW Chart")
    this.chartShow = true
  }
    // chartOptions is now fully populated at initialization, no need for Partial<ChartOptions>
}
