import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { LogoutActivateGuard } from './guards/logout-activate.guard';
import { RegisterPageComponent } from './auth/register-page/register-page.component';
import { EventosShowComponent } from './eventos/eventos-show/eventos-show.component';
import { LoginActivateGuard } from './guards/login-activate.guard';
import { EventoAddComponent } from './eventos/evento-add/evento-add.component';
import { SaveChangesGuard } from './guards/save-changes.guard';
import { EventoDetailComponent } from './eventos/evento-detail/evento-detail.component';
import { EventoDetailResolve } from './eventos/resolvers/evento-detail.service';

const APP_ROUTES: Route[] = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [LogoutActivateGuard]
  },
  {
    path: 'eventos',
    loadChildren: () => import('./eventos/eventos.module').then(m => m.EventosModule),
    canActivate: [LoginActivateGuard]
  },
  { path: '', redirectTo: '/eventos', pathMatch: 'full' },
  { path: '**', redirectTo: '/eventos', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES, {preloadingStrategy: PreloadAllModules}),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
