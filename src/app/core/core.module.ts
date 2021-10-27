import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './presentation/pages/page-login/page-login.component';
import { LoginComponent } from './presentation/views/login/login.component';
import { RecursosModule } from '../recursos/recursos.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PageLoginComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RecursosModule,
    RouterModule
  ],
  exports: [
    PageLoginComponent
  ]
})
export class CoreModule { }
