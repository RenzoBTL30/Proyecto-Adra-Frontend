import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PageLoginComponent } from './core/presentation/pages/page-login/page-login.component';
import { MenuPrincipal1Module } from './menu-principal1/menu-principal1.module';
import { PageMenu1Component } from './menu-principal1/presentation/pages/page-menu1/page-menu1.component';

const routes : Routes = [
  {path: '', component:PageLoginComponent},
  {path: 'menuprincipal', component:PageMenu1Component},
  {path: '**', component:PageLoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    MenuPrincipal1Module,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
