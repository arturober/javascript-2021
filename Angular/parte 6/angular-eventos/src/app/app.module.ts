import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EventosShowComponent } from './eventos-show/eventos-show.component';
import { EventosFilterPipe } from './pipes/eventos-filter.pipe';
import { EventoItemComponent } from './evento-item/evento-item.component';
import { EventoAddComponent } from './evento-add/evento-add.component';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';
import { EventoDetailComponent } from './evento-detail/evento-detail.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthTokenInterceptor } from './interceptors/auth-token.interceptor';
import { LogoutActivateGuard } from './guards/logout-activate.guard';
import { LoginActivateGuard } from './guards/login-activate.guard';
import { SaveChangesGuard } from './guards/save-changes.guard';
import { EventoDetailResolve } from './resolvers/evento-detail.service';
import { MinDateDirective } from './validators/min-date.directive';
import { RegisterPageComponent } from './register-page/register-page.component';
import { SameValueDirective } from './validators/same-value.directive';

const APP_ROUTES: Route[] = [
  { path: 'login', component: LoginPageComponent, canActivate: [LogoutActivateGuard] },
  { path: 'register', component: RegisterPageComponent, canActivate: [LogoutActivateGuard] },
  { path: 'eventos', component: EventosShowComponent, canActivate: [LoginActivateGuard] },
  {
    path: 'eventos/add',
    component: EventoAddComponent,
    canActivate: [LoginActivateGuard],
    canDeactivate: [SaveChangesGuard]
  },
  {
    path: 'eventos/:id',
    component: EventoDetailComponent,
    canActivate: [LoginActivateGuard],
    resolve: {
      evento: EventoDetailResolve
    }
  },
  { path: '', redirectTo: '/eventos', pathMatch: 'full' },
  { path: '**', redirectTo: '/eventos', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    EventosShowComponent,
    EventosFilterPipe,
    EventoItemComponent,
    EventoAddComponent,
    EventoDetailComponent,
    LoginPageComponent,
    MinDateDirective,
    RegisterPageComponent,
    SameValueDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
