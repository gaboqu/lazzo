import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Contacto {
  nombre: string;
  foto: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  // Conversación seleccionada actualmente
  private contactoSeleccionadoSource = new BehaviorSubject<Contacto | null>(null);

  // Observable al que se suscriben los componentes
  contactoSeleccionado$ = this.contactoSeleccionadoSource.asObservable();

  seleccionarContacto(contacto: Contacto): void {
    this.contactoSeleccionadoSource.next(contacto);
  }
}