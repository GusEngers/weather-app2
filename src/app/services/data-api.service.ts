import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable } from "rxjs"
@Injectable({
  providedIn: 'root',
})
export class DataApiService {
  constructor(private http: HttpClient) {}

  // getLocalAddres(): Observable<string> {
  //   return subscribeOn("");
  // }

  getWeather(locale: string) {
    return;
  }
}
