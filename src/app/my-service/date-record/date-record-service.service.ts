import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { recordDataInterface } from '../../chart-project/fail-pass-chart/fail-pass-chart.component'
@Injectable({
  providedIn: 'root'
})
export class DateRecordServiceService {
  constructor(private http: HttpClient) { }

  fetchData(): Observable<recordDataInterface[]>  {
      return this.http.get<recordDataInterface[]>('http://127.0.0.1:8000/record/financial-summary/2024/');
    }

}
