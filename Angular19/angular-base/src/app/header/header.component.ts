import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { BuscadorComponent } from '../buscador/buscador.component';

@Component({
  selector: 'app-header',
  imports: [LogoComponent, BuscadorComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
