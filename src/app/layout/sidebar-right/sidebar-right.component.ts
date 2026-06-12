import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar-right',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-right.component.html',
  styleUrl: './sidebar-right.component.css'
})
export class SidebarRightComponent {

  modo: 'home' | 'perfil' = 'home';

  constructor(private router: Router) {
    this.actualizarModo(this.router.url);

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.actualizarModo(event.urlAfterRedirects);
      });
  }

private actualizarModo(url: string): void {
    if (url.startsWith('/perfil') || url.startsWith('/mensajes') || url.startsWith('/matches')) {
      this.modo = 'perfil';
    } else {
      this.modo = 'home';
    }
  }
}