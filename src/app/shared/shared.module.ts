import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsvHandlerComponent } from '../csv-handler/csv-handler.component'
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CsvHandlerComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[CsvHandlerComponent]
})
export class SharedModule { }
