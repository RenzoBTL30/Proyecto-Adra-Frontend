import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnunciosComponent } from './views/anuncios/anuncios.component';



@NgModule({
  declarations: [
    AnunciosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AnunciosComponent
  ]
})
export class AnunciosModule { }
