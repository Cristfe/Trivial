import { Injectable } from '@angular/core';
import { Pregunta } from './models/pregunta.model';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  preguntas: Pregunta[];
  preguntaActiva: number;

  constructor() {
    this.preguntaActiva = 0;
    this.preguntas = [
      new Pregunta('Texto 1', 2, ['resp1', 'resp2', 'resp3', 'resp4']),
      new Pregunta('Texto 2', 3, ['resp 1', 'resp 2', 'resp 3', 'resp 4']),
      new Pregunta('Texto 3', 1, ['Resp1', 'Resp2', 'Resp3', 'Resp4'])
    ];
  }

  getPreguntaActiva(): Pregunta {
    return this.preguntas[this.preguntaActiva];
  }

  cambiaPregunta() {
    return new Promise((resolve, reject) => {
      this.preguntaActiva++;
      resolve(this.getPreguntaActiva());
    });
  }

}