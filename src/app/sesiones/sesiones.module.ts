import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSesionComponent } from './presentation/pages/page-sesion/page-sesion.component';
import { SesionComponent } from './presentation/views/sesion/sesion.component';
import { ModulosModule } from '../modulos/modulos.module';
import { EvaluacionComponent } from './presentation/views/evaluacion/evaluacion/evaluacion.component';



@NgModule({
  declarations: [
    PageSesionComponent,
    SesionComponent,
    EvaluacionComponent
  ],
  imports: [
    CommonModule,
    ModulosModule
  ],
  exports:[
    PageSesionComponent
  ]
})
export class SesionesModule { }
