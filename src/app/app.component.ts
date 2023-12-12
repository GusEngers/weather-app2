import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { InfoComponent } from './components/info/info.component';
import { DataApiService } from './services/data-api.service';
import { ErrorApi } from './interfaces/error-api.interface';
import { WeatherApi } from './interfaces/weather-api.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SearchComponent, InfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public start: boolean = false;
  public error: ErrorApi = { status: false };
  public loading: boolean = true;
  public weather?: WeatherApi;
  public daysWeather?: WeatherApi[];
  public location?: string;

  constructor(private api: DataApiService) {}

  ngOnInit(): void {
    // this.api.getHomeLocation().subscribe({
    //   next: (value) => {
    //     this.location = `${value.city}, ${value.region}, ${value.country_name}`;
    //     this.api.getWeatherDay(this.location).subscribe({
    //       next: (value) => {
    //         this.weather = value;
    //         this.api
    //           .getWeatherFiveDays(
    //             this.location ?? 'San Javier, Misiones, Argentina'
    //           )
    //           .subscribe({
    //             next: (value) => {
    //               this.daysWeather = value;
    //             },
    //             error: (err) => {
    //               this.error = { status: true, message: err.message };
    //               this.loading = false;
    //             },
    //           });
    //         this.loading = false;
    //       },
    //       error: (err) => {
    //         this.error = { status: true, message: err.message };
    //         this.loading = false;
    //       },
    //     });
    //   },
    //   error: (err) => {
    //     this.error = { status: true, message: err.message };
    //     this.loading = false;
    //   },
    // });
  }
}
