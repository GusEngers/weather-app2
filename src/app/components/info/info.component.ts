import { Component, Input } from '@angular/core';
import { LoadingComponent } from '../loading/loading.component';
import { ErrorApi } from '../../interfaces/error-api.interface';
import { NotInfoComponent } from '../not-info/not-info.component';
import { WeatherApi } from '../../interfaces/weather-api.interface';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [LoadingComponent, NotInfoComponent],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {
  @Input() loading?: boolean;
  @Input() error?: ErrorApi;
  @Input() weather?: WeatherApi;
  @Input() daysWeather?: WeatherApi[];
}
