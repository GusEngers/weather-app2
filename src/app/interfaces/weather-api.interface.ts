interface MainWeather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf?: number;
}

interface WeatherWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface SystemWeather {
  type?: number;
  id?: number;
  country?: string;
  sunrise?: number;
  sunset?: number;
  pod?: string;
}

export interface WeatherApi {
  dt: number;
  main: MainWeather;
  weather: WeatherWeather[];
  clouds: { all: number };
  wind: { speed: number; deg: number; gust: number };
  visibility: number;
  pop?: number;
  rain?: { '1h'?: number; '3h'?: number };
  snow?: { '1h'?: number; '3h'?: number };
  sys: SystemWeather;
  dt_txt?: string;
  coord?: { lon: number; lat: number };
  base?: string;
  timezone?: number;
  id?: number;
  name?: string;
  cod?: number;
}

export interface ListWeatherResponse {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherApi[];
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}
