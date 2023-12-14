import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { IpApi, IpApiResponse } from '../interfaces/ip-api.interface';
import {
  ListWeatherResponse,
  WeatherApi,
} from '../interfaces/weather-api.interface';
import { MOCK_DAYS_WEATHER, MOCK_IP, MOCK_WEATHER } from '../mocks/api.mock';

@Injectable({
  providedIn: 'root',
})
export class DataApiService {
  private API_KEY: string = import.meta.env['NG_APP_WEATHER_API_KEY'];
  private IP_API: string = import.meta.env['NG_APP_IP_API'];
  private WEATHER_API: string = import.meta.env['NG_APP_WEATHER_API'];
  // private DEV: string = import.meta.env['NG_APP_ENV'];
  private DEV: string = 'prod';

  constructor(private http: HttpClient) {}

  /**
   * Obtiene los datos de la ubicación del cliente (ciudad, región, país)
   * @returns {Observable<IpApi>}
   */
  getHomeLocation(): Observable<IpApi> {
    if (this.DEV === 'development') return of(MOCK_IP);
    return this.http.get<IpApiResponse>(this.IP_API + '/json').pipe(
      map((value: IpApiResponse): IpApi => {
        return {
          city: value.city,
          country_name: value.country_name,
          region: value.region,
        };
      }),
      catchError((err: Error) => throwError(() => new Error(err.message)))
    );
  }

  /**
   * Obtiene los datos del clima para una determinada ciudad, región o país
   * @param {string} location Nombre de la ciudad, región o país
   * @returns {Observable<WeatherApi>}
   */
  getWeatherDay(location: string = ''): Observable<WeatherApi> {
    if (this.DEV === 'development') return of(MOCK_WEATHER);
    return this.http
      .get<WeatherApi>(this.WEATHER_API + '/weather', {
        params: {
          q: location,
          appid: this.API_KEY,
          units: 'metric',
        },
      })
      .pipe(
        catchError((err: Error) => throwError(() => new Error(err.message)))
      );
  }

  /**
   * Obtiene los datos del clima en un rango de 5 días para una determinada ciudad, región o país
   * @param {string} location Nombre de la ciudad, región o país
   * @returns {Observable<WeatherApi[]>}
   */
  getWeatherFiveDays(location: string = ''): Observable<WeatherApi[]> {
    if (this.DEV === 'development') return of(MOCK_DAYS_WEATHER);
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
        ),
        catchError((err: Error) => throwError(() => new Error(err.message)))
      );
  }
}
