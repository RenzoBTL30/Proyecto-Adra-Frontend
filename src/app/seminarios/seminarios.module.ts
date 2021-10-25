import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeminariosComponent } from './view/seminarios/seminarios.component';
import { EncuestasValoracionComponent } from './view/encuestas-valoracion/encuestas-valoracion.component';


@NgModule({
  declarations: [
    SeminariosComponent,
    EncuestasValoracionComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SeminariosComponent
  ]
})
export class SeminariosModule { }
