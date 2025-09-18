import { Component } from '@angular/core';

// Importamos los 10 componentes standalone
import { ButtonDemo } from './button-demo/button-demo.component';
import { InputTextBasicDemo } from './inputtext-demo/inputtext-demo.component';
import { PasswordBasicDemo } from './password-basic-demo/password-basic-demo.component';
import { RadioButtonGroupDemo } from './radio-button-group-demo/radio-button-group-demo.component';
import { DatepickerDemoComponent } from './datepicker-demo/datepicker-demo.component';
import { CheckboxDemoComponent } from './checkbox-demo/checkbox-demo.component';
import { ToastHeadlessDemo } from './toast-basic-demo/toast-basic-demo.component';
import { CardDemoComponent } from './card-demo/card-demo.component';
import { PanelDemoComponent } from './panel-demo/panel-demo.component';
import { MenuDemoComponent } from './menu-demo/menu-demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    ButtonDemo,
    InputTextBasicDemo,
    PasswordBasicDemo,
    RadioButtonGroupDemo,
    DatepickerDemoComponent,
    CheckboxDemoComponent,
    ToastHeadlessDemo,
    CardDemoComponent,
    PanelDemoComponent,
    MenuDemoComponent
  ]
})
export class AppComponent {}
