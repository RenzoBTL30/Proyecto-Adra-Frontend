import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalbiComponent } from './view/principalbi/principalbi.component';
import { RecursosModule } from '../recursos/recursos.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    PrincipalbiComponent
  ],
  imports: [
    CommonModule,
    RecursosModule,
    RouterModule
  ],
  exports: [
    PrincipalbiComponent
  ]
})
export class PrincipalbiModule { }
