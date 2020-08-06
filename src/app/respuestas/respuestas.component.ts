import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-respuestas',
  templateUrl: './respuestas.component.html',
  styleUrls: ['./respuestas.component.css']
})
export class RespuestasComponent implements OnInit {

  @Input() respuestas: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
