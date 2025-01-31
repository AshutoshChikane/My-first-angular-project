import { Component, Input } from '@angular/core';
import { CsvHandleServiceService } from '../my-service/csv-handler/csv-handle-service.service'

@Component({
  selector: 'app-csv-handler',
  standalone: false,
  
  templateUrl: './csv-handler.component.html',
  styleUrl: './csv-handler.component.css'
})
export class CsvHandlerComponent {
  @Input() data!: any[];

  constructor(private mycsv_handler:CsvHandleServiceService){}
  downloadCsvClick(): void{
    console.log("helo", this.data)
    this.mycsv_handler.downloadCsv(this.data, "my_first_export.csv")
  }
}
