import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContenedorComponent } from './contenedor/contenedor.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContenedorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-base';
}
