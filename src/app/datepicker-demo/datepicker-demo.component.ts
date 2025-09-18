import { Component } from '@angular/core';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-datepicker-demo',
  templateUrl: './datepicker-demo.component.html',
  standalone: true,
  imports: [DatePickerModule, FormsModule]
})
export class DatepickerDemoComponent {
  fecha!: Date;
}
