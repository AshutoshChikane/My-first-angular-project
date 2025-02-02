import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { dashboardInterface } from '../../dashboard/dashboard-main-page/dashboard-main-page.component'

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {
  api_url = 'http://127.0.0.1:8000/dashboard/city-cases/monthwise/'
  constructor(private httpclient: HttpClient) { }
  fetchData(): Observable<{[month: string]:dashboardInterface[]}>  {
        return this.httpclient.get<{[month: string]:dashboardInterface[]}>(this.api_url);
      }
}
