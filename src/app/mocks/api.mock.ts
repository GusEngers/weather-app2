import { IpApi } from '../interfaces/ip-api.interface';
import { WeatherApi } from '../interfaces/weather-api.interface';

export const MOCK_IP: IpApi = {
  city: 'San Javier',
  region: 'Misiones',
  country_name: 'Argentina',
};

export const MOCK_WEATHER: WeatherApi = {
  base: 'stations',
  clouds: {
    all: 0,
  },
  cod: 200,
  coord: {
    lat: -27.8739,
    lon: -55.1348,
  },
  dt: 1702408838,
  id: 3430631,
  main: {
    feels_like: 35.67,
    grnd_level: 997,
    humidity: 47,
    pressure: 1009,
    sea_level: 1009,
    temp: 33.11,
    temp_min: 33.11,
    temp_max: 33.11,
  },
  name: 'San Javier',
  sys: {
    country: 'AR',
    sunrise: 1702370279,
    sunset: 1702420230,
  },
  timezone: -10800,
  visibility: 10000,
  weather: [
    {
      description: 'clear sky',
      icon: '01d',
      id: 800,
      main: 'Clear',
    },
  ],
  wind: {
    deg: 76,
    gust: 3.72,
    speed: 2.11,
  },
};

export const MOCK_DAYS_WEATHER: WeatherApi[] = new Array<WeatherApi>(5).fill({
  clouds: {
    all: 20,
  },
  dt: 1702468800,
  dt_txt: '2023-12-13 12:00:00',
  main: {
    feels_like: 31.3,
    grnd_level: 997,
    humidity: 67,
    pressure: 1009,
    sea_level: 1009,
    temp: 28.55,
    temp_kf: 0,
    temp_max: 28.55,
    temp_min: 28.55,
  },
  pop: 0,
  sys: {
    pod: 'd',
  },
  visibility: 10000,
  weather: [
    {
      description: 'few clouds',
      icon: '02d',
      id: 801,
      main: 'Clouds',
    },
  ],
  wind: {
    deg: 22,
    gust: 8.29,
    speed: 3.06,
  },
});
