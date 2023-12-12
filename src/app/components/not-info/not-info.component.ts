import { Component, Input } from '@angular/core';
import { ErrorApi } from '../../interfaces/error-api.interface';

@Component({
  selector: 'app-not-info',
  standalone: true,
  imports: [],
  templateUrl: './not-info.component.html',
  styleUrl: './not-info.component.scss',
})
export class NotInfoComponent {
  @Input() error?: ErrorApi;
}
