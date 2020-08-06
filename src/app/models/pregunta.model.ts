export class Pregunta {
    texto: string;
    respuestaCorrecta: number;
    respuestas: string[];

    constructor(pTexto: string, pRespuestaCorrecta: number, pRespuestas: string[]) {
        this.texto = pTexto;
        this.respuestaCorrecta = pRespuestaCorrecta;
        this.respuestas = pRespuestas;
    }
}