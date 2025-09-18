import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-demo',
  templateUrl: './menu-demo.component.html',
  standalone: true,
  imports: [MenubarModule]
})
export class MenuDemoComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        command: () => {
          console.log('Ir a Inicio');
        }
      },
      {
        label: 'Registro',
        icon: 'pi pi-user-plus',
        command: () => {
          console.log('Ir a Registro');
        }
      },
      {
        label: 'Información',
        icon: 'pi pi-info-circle',
        command: () => {
          console.log('Ir a Información');
        }
      },
      {
        label: 'Contacto',
        icon: 'pi pi-envelope',
        url: 'mailto:ejemplo@correo.com'
      }
    ];
  }
}
