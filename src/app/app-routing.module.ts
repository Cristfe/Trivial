import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JuegoComponent } from './juego/juego.component';

const routes: Routes = [
  { path: '', redirectTo: '/juego', pathMatch: 'full' },
  { path: 'juego', component: JuegoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }