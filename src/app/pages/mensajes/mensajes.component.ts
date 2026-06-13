import { Component, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Mensaje {
  texto: string;
  propio: boolean;
}

@Component({
  selector: 'app-mensajes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mensajes.component.html',
  styleUrl: './mensajes.component.css'
})
export class MensajesComponent implements AfterViewChecked {

  @ViewChild('chatBody') chatBody!: ElementRef;

  contactoNombre = 'Juan Caparros';
  contactoFoto = 'assets/images/foto_perfil1.jpg';

  nuevoMensaje = '';

  mensajes: Mensaje[] = [
    { texto: 'Hola! ¿Cómo estás?', propio: false },
    { texto: '¡Hola Juan! Todo bien, ¿y vos?', propio: true },
    { texto: 'Muy bien, me encantó tu perfil', propio: false },
    { texto: '¡Gracias! El tuyo también', propio: true }
  ];

  ngAfterViewChecked(): void {
    this.scrollAlFinal();
  }

  enviarMensaje(): void {
    const texto = this.nuevoMensaje.trim();
    if (!texto) return;

    this.mensajes.push({ texto, propio: true });
    this.nuevoMensaje = '';
  }

  private scrollAlFinal(): void {
    if (this.chatBody) {
      this.chatBody.nativeElement.scrollTop = this.chatBody.nativeElement.scrollHeight;
    }
  }
}