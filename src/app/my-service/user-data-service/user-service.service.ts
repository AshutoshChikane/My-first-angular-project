import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { data_user} from '../../user-management/view-user/view-user.component'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  getMessage(): Observable<data_user[]>  {

    return this.http.get<data_user[]>('http://127.0.0.1:8000/api/users/');
  }
}
