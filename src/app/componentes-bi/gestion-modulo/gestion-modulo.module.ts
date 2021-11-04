import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionModuloRoutingModule } from './gestion-modulo-routing.module';
import { GestionModuloComponent } from './views/gestion-modulo/gestion-modulo.component';
import { GestionSesionComponent } from './views/gestion-sesion/gestion-sesion.component';
import { RecursosModule } from 'src/app/recursos/recursos.module';


@NgModule({
  declarations: [
    GestionModuloComponent,
    GestionSesionComponent
  ],
  imports: [
    CommonModule,
    GestionModuloRoutingModule,
    RecursosModule
  ],
  exports: [
    GestionModuloComponent,
    GestionSesionComponent
  ]
})
export class GestionModuloModule { }
