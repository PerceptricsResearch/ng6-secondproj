import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DbmanagerService {

  constructor(
    private http: HttpClient
  ) { }

  cloudGet(url) {
    let rslt = null;
    const xurl = url || 'https://jsonplaceholder.typicode.com/users';
    if (xurl) {
      try {
        rslt = this.http.get<Object[]>(xurl);
      } catch (error) {
        rslt = [];
      }
    } else {
      rslt = [];
    }
    return rslt;
  }
}
