import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuInicioComponent } from './view/menu-inicio/menu-inicio.component';
import { RecursosModule } from 'src/app/recursos/recursos.module';
import { MenuinicioRoutingModule } from './menu-inicio-routing.module';
import { SidebarModule } from 'ng-sidebar';



@NgModule({
  declarations: [
    MenuInicioComponent
  ],
  imports: [
    CommonModule,
    RecursosModule,
    SidebarModule.forRoot(),
    MenuinicioRoutingModule
  ],
  exports: [
    MenuInicioComponent
  ]
})
export class MenuInicioModule { }
