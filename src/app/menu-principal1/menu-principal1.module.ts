import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageMenu1Component } from './presentation/pages/page-menu1/page-menu1.component';
import { Menu1Component } from './presentation/views/menu1/menu1.component';
import { RecursosModule } from '../recursos/recursos.module';
import { ModulosModule } from '../modulos/modulos.module';



@NgModule({
  declarations: [
    PageMenu1Component,
    Menu1Component
  ],
  imports: [
    CommonModule,
    RecursosModule,
    ModulosModule
  ],
  exports: [
    PageMenu1Component
  ]
})
export class MenuPrincipal1Module { }
