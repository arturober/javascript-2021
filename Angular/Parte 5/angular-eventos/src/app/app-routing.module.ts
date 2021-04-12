import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventosShowComponent } from './eventos-show/eventos-show.component';
import { EventoAddComponent } from './evento-add/evento-add.component';
import { EventoDetailComponent } from './evento-detail/evento-detail.component';
import { EventoResolver } from './resolvers/evento.resolver';

const ROUTES: Routes = [
  {
    path: 'eventos',
    component: EventosShowComponent
  },
  {
    path: 'eventos/add',
    component: EventoAddComponent
  },
  {
    path: 'eventos/:id',
    component: EventoDetailComponent,
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
