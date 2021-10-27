import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './view/principal/principal.component';
import { RouterModule } from '@angular/router';
import { RecursosModule } from '../recursos/recursos.module';
import { HistorialModulosModule } from '../historial-modulos/historial-modulos.module';
import { MenuPrincipal1Module } from '../menu-principal1/menu-principal1.module';
import { ModulosModule } from '../modulos/modulos.module';



@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    HistorialModulosModule,
    RecursosModule,
    ModulosModule,
    RouterModule
  ],
  exports:[
    PrincipalComponent
  ]
})
export class PrincipalModule { }
