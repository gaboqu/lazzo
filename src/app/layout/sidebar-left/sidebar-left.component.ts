import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar-left',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-left.component.html',
  styleUrl: './sidebar-left.component.css'
})
export class SidebarLeftComponent {

  // Modo actual del sidebar: 'home' o 'perfil'
  modo: 'home' | 'perfil' = 'home';

  constructor(private router: Router) {
    // Detectamos el modo al iniciar
    this.actualizarModo(this.router.url);

    // Y cada vez que cambia la ruta
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.actualizarModo(event.urlAfterRedirects);
      });
  }

  private actualizarModo(url: string): void {
    if (url.startsWith('/perfil')) {
      this.modo = 'perfil';
    } else {
      this.modo = 'home';
    }
  }
}