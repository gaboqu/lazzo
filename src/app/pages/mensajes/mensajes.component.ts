import { Component, ElementRef, ViewChild, AfterViewChecked, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService, Contacto } from '../../services/chat.service';

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
export class MensajesComponent implements OnInit, AfterViewChecked {

  @ViewChild('chatBody') chatBody!: ElementRef;

  contactoSeleccionado: Contacto | null = null;
  nuevoMensaje = '';

  // Mensajes por contacto (la clave es el nombre)
  private conversaciones: { [nombre: string]: Mensaje[] } = {
    'Juan Caparros': [
      { texto: 'Hola! ¿Cómo estás?', propio: false },
      { texto: '¡Hola Juan! Todo bien, ¿y vos?', propio: true },
      { texto: 'Muy bien, me encantó tu perfil', propio: false }
    ],
    'Pablo Tawer': [
      { texto: 'Me encantó tu perfil', propio: false },
      { texto: '¡Gracias Pablo! ¿Cómo va todo?', propio: true }
    ],
    'Esteban Quiroz': [
      { texto: '¿Tomamos un café?', propio: false },
      { texto: '¡Me encantaría! ¿Cuándo?', propio: true },
      { texto: 'El finde que viene', propio: false }
    ]
  };

  mensajes: Mensaje[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.contactoSeleccionado$.subscribe(contacto => {
      this.contactoSeleccionado = contacto;
      if (contacto) {
        this.mensajes = this.conversaciones[contacto.nombre] || [];
      }
    });
  }

  ngAfterViewChecked(): void {
    this.scrollAlFinal();
  }

  enviarMensaje(): void {
    const texto = this.nuevoMensaje.trim();
    if (!texto || !this.contactoSeleccionado) return;

    this.mensajes.push({ texto, propio: true });
    this.nuevoMensaje = '';
  }

  private scrollAlFinal(): void {
    if (this.chatBody) {
      this.chatBody.nativeElement.scrollTop = this.chatBody.nativeElement.scrollHeight;
    }
  }
}