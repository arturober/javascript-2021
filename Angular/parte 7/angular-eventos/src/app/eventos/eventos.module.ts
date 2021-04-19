import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { EventosShowComponent } from './eventos-show/eventos-show.component';
import { EventosFilterPipe } from './pipes/eventos-filter.pipe';
import { EventoItemComponent } from './evento-item/evento-item.component';
import { EventoAddComponent } from './evento-add/evento-add.component';
import { EventoDetailComponent } from './evento-detail/evento-detail.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    EventosShowComponent,
    EventosFilterPipe,
    EventoItemComponent,
    EventoAddComponent,
    EventoDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    EventosRoutingModule,
    SharedModule
  ]
})
export class EventosModule { }
