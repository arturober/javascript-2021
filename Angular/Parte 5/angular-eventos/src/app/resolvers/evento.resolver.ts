import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Evento } from '../interfaces/evento';
import { EventosService } from '../services/eventos.service';

@Injectable({
  providedIn: 'root'
})
export class EventoResolver implements Resolve<Evento> {
  constructor(private eventosService: EventosService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Evento> {
    return this.eventosService.get(+route.params.id);
  }
}
