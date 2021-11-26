import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarrasuperiorComponent } from './barra-superior-usuario/barrasuperior.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PedidosOracionModule } from '../pedidos-oracion/pedidos-oracion.module';
import { SidebarBiComponent } from './sidebar-bi/sidebar-bi.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BarrasuperiorComponent,
    NavbarComponent,
    SidebarBiComponent,
  ],
  imports: [
    CommonModule,
    PedidosOracionModule,
    RouterModule
  ],
  exports: [
    BarrasuperiorComponent,
    NavbarComponent,
    SidebarBiComponent
  ]
})
export class RecursosModule { }
