import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PageLoginComponent } from './core/presentation/pages/page-login/page-login.component';
import { HistorialModulosComponent } from './historial-modulos/view/historial-modulos/historial-modulos.component';
import { PageMenu1Component } from './menu-principal1/presentation/pages/page-menu1/page-menu1.component';
import { Menu1Component } from './menu-principal1/presentation/views/menu1/menu1.component';
import { PrincipalModule } from './principal/principal.module';
import { PrincipalComponent } from './principal/view/principal/principal.component';
import { RecursosModule } from './recursos/recursos.module';
import { PageSesionComponent } from './sesiones/presentation/pages/page-sesion/page-sesion.component';
import { SesionesModule } from './sesiones/sesiones.module';


const routes : Routes = [
  {path: '', component:PageLoginComponent},
  
  {path: 'menuprincipal',
    component:PrincipalComponent,
    children:[
      {path: 'inicio', component:PageMenu1Component},
      {path: 'historialmodulos', component:HistorialModulosComponent},

    ]
  },

  {path: 'sesion', component:PageSesionComponent},

  {path: 'moduloasesor',
    loadChildren: () => import('./modulo-asesor/modulo-asesor.module').then((m) => m.ModuloAsesorModule)},
  
  {path: 'menuprincipalbi',
    loadChildren: () => import('./componentes-bi/menu-inicio/menu-inicio.module').then((m) => m.MenuInicioModule)},
  
  {path: '**', component:PageLoginComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RecursosModule,
    SesionesModule,
    PrincipalModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
