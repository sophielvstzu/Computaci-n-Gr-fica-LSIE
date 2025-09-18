import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-card-demo',
  templateUrl: './card-demo.component.html',
  standalone: true,
  imports: [CardModule]
})
export class CardDemoComponent {}
