import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarrasuperiorComponent } from './barrasuperior/barrasuperior.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    BarrasuperiorComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BarrasuperiorComponent,
    NavbarComponent
  ]
})
export class RecursosModule { }
