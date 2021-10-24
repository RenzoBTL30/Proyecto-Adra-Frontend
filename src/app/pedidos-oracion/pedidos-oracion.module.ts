import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosOracionComponent } from './views/pedidos-oracion/pedidos-oracion.component';


@NgModule({
  declarations: [
    PedidosOracionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PedidosOracionComponent
  ]
})
export class PedidosOracionModule { }
