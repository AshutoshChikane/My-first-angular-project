import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CsvHandleServiceService {

  constructor() { }

  downloadCsv(data: any[],filename:string = 'export.csv'): void{
    const csvData = this.convertToCSV(data);
    
    // Create a Blob with CSV data and trigger a download
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) { // Feature detection for download attribute
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  private convertToCSV(data: any[]): string {
    const headers = Object.keys(data[0]);
    const rows = data.map(row => headers.map(header => row[header]).join(','));
    return [headers.join(','), ...rows].join('\n');
  }
}
