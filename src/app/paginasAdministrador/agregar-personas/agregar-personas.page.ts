import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TercerosService } from 'src/app/Servicios/Terceros.service';
import { Empleado } from 'src/app/Componentes-Generales/persona.mode';

@Component({
  selector: 'app-agregar-personas',
  templateUrl: './agregar-personas.page.html',
  styleUrls: ['./agregar-personas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule,]
})
export class AgregarPersonasPage implements OnInit {
  empleadosForm!: FormGroup;

  constructor(private tercersosServices: TercerosService, private fb: FormBuilder) {
    this.createFormGroup();
   }

  ngOnInit() {
  }

  createFormGroup():void {
    this.empleadosForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      cedula: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      cargo: ['', [Validators.required]],
      area: ['', [Validators.required]],
      salario: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      correo: ['', [Validators.required, Validators.email]],
      fechaNacimiento: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      fechaIngreso: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      fechaFinal: ['', [Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      
    })
  }
  agregarTerceros(){
      if(this.empleadosForm.status === 'INVALID') return;
      console.log(this.empleadosForm)
      let persona1 = new Empleado(
      this.empleadosForm.value.cedula,
      this.empleadosForm.value.nombre,
      this.empleadosForm.value.apellido,
      this.empleadosForm.value.cargo,
      this.empleadosForm.value.area,
      this.empleadosForm.value.salario,
      this.empleadosForm.value.correo,
      this.empleadosForm.value.fechaNacimiento,
      this.empleadosForm.value.fechaIngreso,
      this.empleadosForm.value.fechaFinal,
      this.empleadosForm.value.estadoEmpleado,
      this.empleadosForm.value.contraseña,
      )
      console.log(this.empleadosForm.value)
      this.tercersosServices.personaAgregada(persona1)
      this.empleadosForm.reset()
  }
  
}
