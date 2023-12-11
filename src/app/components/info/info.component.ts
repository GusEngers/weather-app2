import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent implements OnInit {
  public days: boolean = true;
  public error: boolean = false;
  constructor(private serv: DataApiService) {}

  ngOnInit(): void {
    // this.serv.getFiveDays('Misiones').subscribe({
    //   next: (value) => {
    //     this.days = true;
    //     this.error = false;
    //     console.log(value);
    //   },
    //   error: (err) => {
    //     this.error = true;
    //     this.days = false;
    //     console.log(err);
    //   },
    // });
  }
}
