import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PageLoginComponent } from './core/presentation/pages/page-login/page-login.component';
import { RecursosModule } from './recursos/recursos.module';
import { PageSesionComponent } from './sesiones/presentation/pages/page-sesion/page-sesion.component';

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
    RecursosModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
