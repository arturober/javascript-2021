import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EventosShowComponent } from './eventos-show/eventos-show.component';
import { FormsModule } from '@angular/forms';
import { EventosFilterPipe } from './pipes/eventos-filter.pipe';
import { EventoItemComponent } from './evento-item/evento-item.component';
import { EventoAddComponent } from './evento-add/evento-add.component';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { EventoDetailComponent } from './evento-detail/evento-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EventosShowComponent,
    EventosFilterPipe,
    EventoItemComponent,
    EventoAddComponent,
    EventoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
