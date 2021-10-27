import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListaSocioComponent } from './presentation/pages/page-lista-socio/page-lista-socio.component';
import { ListaSocioComponent } from './presentation/views/lista-sesiones/lista-socio.component';
import { ListaSocioDetalleSesionesComponent } from './presentation/views/lista-socio-detalle-sesiones/lista-socio-detalle-sesiones.component';
import { RecursosModule } from '../recursos/recursos.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'socio', component:PageListaSocioComponent},
  {path: 'sesion', component:ListaSocioDetalleSesionesComponent},
];

@NgModule({
  declarations: [
    PageListaSocioComponent,
    ListaSocioComponent,
    ListaSocioDetalleSesionesComponent,
  ],
  imports: [
    CommonModule,
    RecursosModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    PageListaSocioComponent,
    ListaSocioDetalleSesionesComponent,
  ]
})
export class ListaSociosModule { }
