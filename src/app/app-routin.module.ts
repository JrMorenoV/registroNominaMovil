import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular'; // Import the IonicModule
import { CommonModule } from '@angular/common'; // Import the CommonModule


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'lista-personas',
    loadComponent: () => import('./paginasAdministrador/lista-personas/lista-personas.page').then( m => m.ListaPersonasPage)
  },
  {
    path: 'editor-personas',
    loadComponent: () => import('./paginasAdministrador/editor-personas/editor-personas.page').then( m => m.EditorPersonasPage)
  },
  {
    path: 'agregar-personas',
    loadComponent: () => import('./paginasAdministrador/agregar-personas/agregar-personas.page').then( m => m.AgregarPersonasPage)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


