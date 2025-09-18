import { Component } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox-demo',
  templateUrl: './checkbox-demo.component.html',
  standalone: true,
  imports: [CheckboxModule, FormsModule]
})
export class CheckboxDemoComponent {
  acepta: boolean = false;
}
