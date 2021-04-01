import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventosShowComponent } from './eventos-show/eventos-show.component';

@NgModule({
  declarations: [
    AppComponent,
    EventosShowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
