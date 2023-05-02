import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { GeneralesModule } from './generales/generales.module';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AgregarPersonasPage } from './paginasAdministrador/agregar-personas/agregar-personas.page';
import { HomePage } from './home/home.page';
import { ListaPersonasPage } from './paginasAdministrador/lista-personas/lista-personas.page';
import { EditorPersonasPage } from './paginasAdministrador/editor-personas/editor-personas.page';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routin.module';



@NgModule({
  declarations: [AppComponent
    
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    GeneralesModule,
    IonicModule.forRoot({}),

  ],
  providers: [],
  bootstrap: [],
  exports: [],
  
})
export class AppModule { }