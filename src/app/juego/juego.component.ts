import { Component, OnInit } from '@angular/core';
import { PreguntasService } from '../preguntas.service'
import { Pregunta } from '../models/pregunta.model';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  preguntaActiva: Pregunta;
  mensaje: string;

  constructor(private preguntasService: PreguntasService) {
    private preguntasService = PreguntasService;
    this.mensaje = "ESPERANDO RESPUESTA"
  }

ngOnInit(): void {
  this.preguntaActiva = this.preguntasService.getPreguntaActiva();
  console.log(this.preguntaActiva);
}

onRespuestaSeleccionada($event) {
  if ($event === this.preguntaActiva.respuestaCorrecta) {
    this.mensaje = 'RESPUESTA CORRECTA';
  } else {
    this.mensaje = 'RESPUESTA INCORRECTA';
  }
  setTimeout(async () => {
    this.preguntaActiva = await this.preguntasService.cambiaPregunta();
  }, 3000);
}


}
