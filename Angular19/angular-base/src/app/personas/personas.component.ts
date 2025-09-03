import { Component } from "@angular/core";

@Component({
    selector: 'personas-app', /*nombre deseado*/
    imports: [],
    templateUrl: './personas.component.html', /*vista*/
    styleUrl: './personas.component.css'
})

export class miComponentePersona{
    public mensaje= 'mi mensaje';
    public otromensaje= 'segundo mensaje';
}