import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialModulosModule } from '../historial-modulos/historial-modulos.module';
import { HistorialModulosComponent } from '../historial-modulos/view/historial-modulos/historial-modulos.component';
import { SesionesModule } from '../sesiones/sesiones.module';
import { PageMenu1Component } from './presentation/pages/page-menu1/page-menu1.component';

const routes: Routes = [
  {path: 'inicio', component:PageMenu1Component},
  {path: 'historialmodulos', component:HistorialModulosComponent},
];

@NgModule({
  imports: [
      HistorialModulosModule,
      RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MenuprincipalRoutingModule { }