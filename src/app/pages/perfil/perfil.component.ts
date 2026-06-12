import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {

  // Por ahora repetimos la misma imagen como placeholder
  fotos: string[] = [
    'assets/images/foto_perfil1.jpg',
    'assets/images/foto_perfil1.jpg',
    'assets/images/foto_perfil1.jpg',
    'assets/images/foto_perfil1.jpg',
    'assets/images/foto_perfil1.jpg'
  ];

  lightboxAbierto = false;
  fotoActual = 0;

  abrirLightbox(index: number): void {
    this.fotoActual = index;
    this.lightboxAbierto = true;
  }

  cerrarLightbox(): void {
    this.lightboxAbierto = false;
  }

  fotoSiguiente(): void {
    this.fotoActual = (this.fotoActual + 1) % this.fotos.length;
  }

  fotoAnterior(): void {
    this.fotoActual = (this.fotoActual - 1 + this.fotos.length) % this.fotos.length;
  }
}