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

  constructor(private preguntasService: PreguntasService) { }

  ngOnInit(): void {
    this.preguntasService.getPreguntaActiva();
  }

}
