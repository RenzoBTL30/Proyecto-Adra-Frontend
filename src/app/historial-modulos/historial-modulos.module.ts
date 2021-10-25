import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistorialModulosComponent } from './view/historial-modulos/historial-modulos.component';


@NgModule({
  declarations: [
    HistorialModulosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HistorialModulosComponent
  ]
})
export class HistorialModulosModule { }
