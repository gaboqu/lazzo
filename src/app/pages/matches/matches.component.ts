import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Match {
  nombre: string;
  edad: number;
  foto: string;
}

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.css'
})
export class MatchesComponent {

  matches: Match[] = [
    { nombre: 'Juan Caparros', edad: 36, foto: 'assets/images/foto_perfil1.jpg' },
    { nombre: 'Pablo Tawer', edad: 40, foto: 'assets/images/foto_perfil1.jpg' },
    { nombre: 'Esteban Quiroz', edad: 61, foto: 'assets/images/foto_perfil1.jpg' },
    { nombre: 'Martín Ríos', edad: 33, foto: 'assets/images/foto_perfil1.jpg' },
    { nombre: 'Diego Funes', edad: 45, foto: 'assets/images/foto_perfil1.jpg' },
    { nombre: 'Lucas Vera', edad: 29, foto: 'assets/images/foto_perfil1.jpg' }
  ];
  
}
