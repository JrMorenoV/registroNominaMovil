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




@NgModule({
  declarations: [
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomePage,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'lista-personas',
        component: ListaPersonasPage
      },
      {
        path: 'editor-personas',
        component: EditorPersonasPage
      },
      {
        path: 'agregar-personas',
        component: AgregarPersonasPage
      }
    ]),
    GeneralesModule,
    IonicModule.forRoot({}),

  ],
  providers: [],
  bootstrap: [],
  exports: [],
  
})
export class AppModule { }