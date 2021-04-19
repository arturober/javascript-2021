import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { EventoAddComponent } from '../evento-add/evento-add.component';

@Injectable({
  providedIn: 'root'
})
export class SaveChangesGuard implements CanDeactivate<EventoAddComponent> {
  canDeactivate(
    component: EventoAddComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean {
      if (component.saved) {
        return true;
      }
      return confirm('¿Quieres salir? Los cambios no se guardarán');
  }
}
