import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageModuloComponent } from './presentation/pages/page-modulo/page-modulo.component';
import { ModuloComponent } from './presentation/views/modulo/modulo.component';



@NgModule({
  declarations: [
    PageModuloComponent,
    ModuloComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageModuloComponent
  ]
})
export class ModulosModule { }
