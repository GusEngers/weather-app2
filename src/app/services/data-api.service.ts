import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IpApi, IpApiResponse } from '../interfaces/ip-api.interface';
import {
  ListWeatherResponse,
  WeatherApi,
} from '../interfaces/weather-api.interface';

@Injectable({
  providedIn: 'root',
})
export class DataApiService {
  private API_KEY: string = 'MI-API-KEY';
  private IP_API: string = 'https://ipapi.co';
  private WEATHER_API: string = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) {}

  /**
   * Obtiene los datos de la ubicación del cliente (ciudad, región, país)
   * @returns {Observable<IpApi>}
   */
  getHomeWeather(): Observable<IpApi> {
    return this.http.get<IpApiResponse>(this.IP_API).pipe(
      map((value: IpApiResponse): IpApi => {
        return {
          city: value.city,
          country_name: value.country_name,
          region: value.region,
        };
      })
    );
  }

  /**
   * Obtiene los datos del clima para una determinada ciudad, región o país
   * @param {string} location Nombre de la ciudad, región o país
   * @returns {Observable<WeatherApi>}
   */
  getWeatherDay(location: string): Observable<WeatherApi> {
    return this.http.get<WeatherApi>(this.WEATHER_API + '/weather', {
      params: {
        q: location,
        appid: this.API_KEY,
        units: 'metric',
      },
    });
  }

  /**
   * Obtiene los datos del clima en un rango de 5 días para una determinada ciudad, región o país
   * @param {string} location Nombre de la ciudad, región o país
   * @returns {Observable<WeatherApi[]>}
   */
  getWeatherFiveDays(location: string): Observable<WeatherApi[]> {
    return this.http
      .get<ListWeatherResponse>(this.WEATHER_API + '/forecast', {
        params: {
          q: location,
          appid: this.API_KEY,
          units: 'metric',
        },
      })
      .pipe(
        map((value: ListWeatherResponse): WeatherApi[] => value.list),
        map((value: WeatherApi[]): WeatherApi[] =>
          value.filter(
            (val: WeatherApi) =>
              val['dt_txt'] && val['dt_txt'].includes('12:00:00')
          )
        )
      );
  }
}
