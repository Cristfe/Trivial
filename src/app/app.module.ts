import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegoComponent } from './juego/juego.component';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { RespuestasComponent } from './respuestas/respuestas.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegoComponent,
    PreguntaComponent,
    RespuestasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
