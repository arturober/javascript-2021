import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventosShowComponent } from './eventos-show/eventos-show.component';
import { FormsModule } from '@angular/forms';
import { EventosFilterPipe } from './pipes/eventos-filter.pipe';
import { EventoItemComponent } from './evento-item/evento-item.component';
import { EventoAddComponent } from './evento-add/evento-add.component';

@NgModule({
  declarations: [
    AppComponent,
    EventosShowComponent,
    EventosFilterPipe,
    EventoItemComponent,
    EventoAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
