import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-panel-demo',
  templateUrl: './panel-demo.component.html',
  standalone: true,
  imports: [PanelModule]
})
export class PanelDemoComponent {}
