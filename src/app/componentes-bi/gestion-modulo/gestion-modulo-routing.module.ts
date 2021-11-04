import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecursosModule } from 'src/app/recursos/recursos.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    RecursosModule
  ],
  exports: [RouterModule]
})
export class GestionModuloRoutingModule { }
