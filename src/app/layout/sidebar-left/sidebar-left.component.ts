import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';

interface Conversacion {
  nombre: string;
  foto: string;
  ultimoMensaje: string;
}

@Component({
  selector: 'app-sidebar-left',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar-left.component.html',
  styleUrl: './sidebar-left.component.css'
})
export class SidebarLeftComponent {

  // Modo actual del sidebar: 'home', 'perfil' o 'mensajes'
  modo: 'home' | 'perfil' | 'mensajes' = 'home';

  conversaciones: Conversacion[] = [
    { nombre: 'Juan Caparros', foto: 'assets/images/foto_perfil1.jpg', ultimoMensaje: 'Hola! ¿Cómo estás?' },
    { nombre: 'Pablo Tawer', foto: 'assets/images/foto_perfil1.jpg', ultimoMensaje: 'Me encantó tu perfil' },
    { nombre: 'Esteban Quiroz', foto: 'assets/images/foto_perfil1.jpg', ultimoMensaje: '¿Tomamos un café?' }
  ];

  constructor(private router: Router) {
    this.actualizarModo(this.router.url);

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.actualizarModo(event.urlAfterRedirects);
      });
  }

  private actualizarModo(url: string): void {
    if (url.startsWith('/perfil')) {
      this.modo = 'perfil';
    } else if (url.startsWith('/mensajes')) {
      this.modo = 'mensajes';
    } else {
      this.modo = 'home';
    }
  }
}