import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
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
