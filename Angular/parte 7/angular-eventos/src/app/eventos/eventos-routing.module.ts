import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventosShowComponent } from './eventos-show/eventos-show.component';
import { LoginActivateGuard } from '../guards/login-activate.guard';
import { EventoAddComponent } from './evento-add/evento-add.component';
import { SaveChangesGuard } from '../guards/save-changes.guard';
import { EventoDetailComponent } from './evento-detail/evento-detail.component';
import { EventoDetailResolve } from './resolvers/evento-detail.service';


const routes: Routes = [
  { path: '', component: EventosShowComponent },
  {
    path: 'add',
    component: EventoAddComponent,
    canDeactivate: [SaveChangesGuard]
  },
  {
    path: ':id',
    component: EventoDetailComponent,
    resolve: {
      evento: EventoDetailResolve
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }
