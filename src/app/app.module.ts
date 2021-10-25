import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PageLoginComponent } from './core/presentation/pages/page-login/page-login.component';
import { HistorialModulosModule } from './historial-modulos/historial-modulos.module';
import { MenuPrincipal1Module } from './menu-principal1/menu-principal1.module';
import { RecursosModule } from './recursos/recursos.module';
import { PageSesionComponent } from './sesiones/presentation/pages/page-sesion/page-sesion.component';
import { SesionesModule } from './sesiones/sesiones.module';

const routes : Routes = [
  {path: '', component:PageLoginComponent},
  {path: 'menuprincipal', 
    loadChildren: () => import('./menu-principal1/menu-principal1.module').then((m) => m.MenuPrincipal1Module)
  },
  {path: 'sesion', component:PageSesionComponent},
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
    HistorialModulosModule,
    RecursosModule,
    SesionesModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
