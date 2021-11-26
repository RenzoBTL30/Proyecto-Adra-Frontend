import { ThisReceiver } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { GestionModuloComponent } from './views/gestion-modulo/gestion-modulo.component';
import { GestionSesionComponent } from './views/gestion-sesion/gestion-sesion.component';

const routes: Routes = [
  {path: 'modulos1', component:GestionModuloComponent},
  {path: 'sesiones', component:GestionSesionComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class GestionModuloRoutingModule { }
