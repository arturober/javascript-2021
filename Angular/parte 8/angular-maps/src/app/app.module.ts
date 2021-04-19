import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiYXJ0dXJvYmVyIiwiYSI6ImNrMXFlc29vazExaDUzbms2cWdpb3l6cGwifQ.hyoOv4iVc6XqWPYBKa4NkQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
