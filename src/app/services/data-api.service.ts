import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataApiService {
  constructor() {}

  getLocalAddres(): string {
    return 'Argentina';
  }

  getWeather(locale: string) {
    return;
  }
}
