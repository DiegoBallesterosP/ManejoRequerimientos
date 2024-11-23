import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioPaginaComponent } from './inicio-pagina/inicio-pagina.component';
import { CrearRequerimientoComponent } from './crear-requerimiento/crear-requerimiento.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'inicio-pagina', component: InicioPaginaComponent },
      { path: 'crear-requerimiento', component: CrearRequerimientoComponent }
    ]
  }
];