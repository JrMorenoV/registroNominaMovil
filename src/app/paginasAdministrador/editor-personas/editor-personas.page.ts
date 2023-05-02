import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TercerosService } from 'src/app/Servicios/Terceros.service';
import { Empleado } from 'src/app/Componentes-Generales/persona.mode';

@Component({
  selector: 'app-editor-personas',
  templateUrl: './editor-personas.page.html',
  styleUrls: ['./editor-personas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, ]
})
export class EditorPersonasPage implements OnInit {

  public cedula!: number;
  tercerosForm!: FormGroup;
  estadoEmpleado!: any;
  usuariosControl!: any;


  constructor(private fb: FormBuilder, private tercerosService: TercerosService) { }

  ngOnInit() { FormControl
  }

  datosTerceros: Empleado | undefined;

  buscarTerceros(): void{
    console.log('Cedula a Buscar: ' + this.cedula);
    const persona = this.tercerosService.buscarPersonasPorCedula(this.cedula);
    
    this.datosTerceros = persona;
    console.log(this.datosTerceros);
    
    this.inicializacionFormulario();
    
  }

  inicializacionFormulario(): void {
    this.tercerosForm = new FormGroup({
      cedula: new FormControl(this.datosTerceros?.cedula),
      nombre: new FormControl(this.datosTerceros?.nombre),
      apellido: new FormControl(this.datosTerceros?.apellido),
      cargo: new FormControl(this.datosTerceros?.cargo),
      area: new FormControl(this.datosTerceros?.area),
      salario: new FormControl(this.datosTerceros?.salario),
      correo: new FormControl(this.datosTerceros?.correo),
      fechaNacimiento: new FormControl(this.datosTerceros?.fechaNacimiento),
      fechaIngreso: new FormControl(this.datosTerceros?.fechaIngreso),
      fechaFinal: new FormControl(this.datosTerceros?.fechaFinal),
    })
  }

  editorEmpleado(){
    console.log(this.tercerosForm);
    let tercero1 = new Empleado(
      this.tercerosForm.value.cedula,
      this.tercerosForm.value.nombre,
      this.tercerosForm.value.apellido,
      this.tercerosForm.value.cargo,
      this.tercerosForm.value.area,
      this.tercerosForm.value.salario,
      this.tercerosForm.value.correo,
      this.tercerosForm.value.fechaNacimiento,
      this.tercerosForm.value.fechaIngreso,
      this.tercerosForm.value.fechaFinal,
      this.tercerosForm.value.estadoEmpleado,
      this.tercerosForm.value.contraseña,
    );
    this.tercerosService.personaRenombrada(tercero1);
    this.tercerosForm.reset();
  }

  applyFilter(filterValue: any){
    this.usuariosControl['tercerosForm'].disable();
  }

}
