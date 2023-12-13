import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  @Input() start!: boolean;
  @Output() submitEvent = new EventEmitter<string>();
  public value: string = '';

  onSubmit() {
    this.value = this.value.replaceAll(/( - |-| \/ |\/|; )/g, ', ');
    this.submitEvent.emit(this.value);
    this.value = '';
  }
}
