import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Empleado } from 'src/app/Componentes-Generales/persona.mode';
import { TercerosService } from 'src/app/Servicios/Terceros.service';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.page.html',
  styleUrls: ['./lista-personas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ListaPersonasPage implements OnInit {

  personas: Empleado[];

  constructor(private readonly terceros: TercerosService) {
    this.personas = this.terceros.getPersonas();
   }

  ngOnInit() {
  }


}
