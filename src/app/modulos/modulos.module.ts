import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageModuloComponent } from './presentation/pages/page-modulo/page-modulo.component';
import { ModuloComponent } from './presentation/views/modulo/modulo.component';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PageModuloComponent,
    ModuloComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PageModuloComponent
  ]
})
export class ModulosModule { }
