import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'password-basic-demo',
    templateUrl: './password-basic-demo.component.html',
    standalone: true,
    imports: [FormsModule, PasswordModule]
})
export class PasswordBasicDemo {
    value!: string;
}