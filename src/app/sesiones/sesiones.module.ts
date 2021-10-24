import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSesionComponent } from './presentation/pages/page-sesion/page-sesion.component';
import { SesionComponent } from './presentation/views/sesion/sesion.component';



@NgModule({
  declarations: [
    PageSesionComponent,
    SesionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SesionesModule { }
