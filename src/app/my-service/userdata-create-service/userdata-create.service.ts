import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class UserdataCreateService {
  private apiUrl = 'http://127.0.0.1:8000/api/users/'
  constructor(private http: HttpClient) { }
    postData(name:string, phone:number, email:string): Observable<any>  {
      const payload = { name, email, phone };
      return this.http.post(this.apiUrl, payload, { observe: 'response' });
    }
  }
