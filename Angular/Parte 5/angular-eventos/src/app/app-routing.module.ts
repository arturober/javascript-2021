import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventosShowComponent } from './eventos-show/eventos-show.component';
import { EventoAddComponent } from './evento-add/evento-add.component';
import { EventoDetailComponent } from './evento-detail/evento-detail.component';
import { EventoResolver } from './resolvers/evento.resolver';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginGuard } from './guards/login.guard';

const ROUTES: Routes = [
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'auth/registro',
    component: RegistroComponent
  },
  {
    path: 'eventos',
    component: EventosShowComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'eventos/add',
    component: EventoAddComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'eventos/:id',
    component: EventoDetailComponent,
    canActivate: [LoginGuard],
    resolve: {
      evento: EventoResolver
    }
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/eventos'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/eventos'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
