import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
      { path: 'perfil/:id', loadComponent: () => import('./pages/perfil/perfil.component').then(m => m.PerfilComponent) },
      { path: 'mi-perfil', loadComponent: () => import('./pages/mi-perfil/mi-perfil.component').then(m => m.MiPerfilComponent) },
      { path: 'matches', loadComponent: () => import('./pages/matches/matches.component').then(m => m.MatchesComponent) },
      { path: 'mensajes', loadComponent: () => import('./pages/mensajes/mensajes.component').then(m => m.MensajesComponent) },
      { path: 'registro', loadComponent: () => import('./pages/registro/registro.component').then(m => m.RegistroComponent) },
    ]
  },
  { path: '**', redirectTo: 'home' }
];