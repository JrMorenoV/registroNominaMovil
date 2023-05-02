import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgregarPersonasPage } from '../paginasAdministrador/agregar-personas/agregar-personas.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, ReactiveFormsModule,],
})
export class HomePage {
  constructor() {}
  creacionTercero = AgregarPersonasPage;
}
