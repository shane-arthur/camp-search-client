import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {

  constructor(private http: HttpClient) { }
  post(url: string, payload?: any, headers?: HttpHeaders): Observable<any> {
    const params = new HttpParams();
    const options = {};
    options['params'] = params;
    if (!!headers) {
        options['headers'] = headers;
    }
    return this.http.post<any>(url, payload, options);
  }

  get(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
}
