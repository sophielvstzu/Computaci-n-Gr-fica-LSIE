import { Component } from '@angular/core';
import { RadioButton } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'radio-button-group-demo',
    templateUrl: './radio-button-group-demo.component.html',
    standalone: true,
    imports: [FormsModule, RadioButton]
})
export class RadioButtonGroupDemo {
    ingredient!: string;
}