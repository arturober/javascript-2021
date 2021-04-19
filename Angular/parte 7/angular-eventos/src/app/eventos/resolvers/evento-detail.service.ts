import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Evento } from '../interfaces/evento';
import { Observable } from 'rxjs';
import { EventosService } from '../services/eventos.service';

@Injectable({
  providedIn: 'root'
})
export class EventoDetailResolve implements Resolve<Evento> {

  constructor(private eventosService: EventosService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Evento> {
    const id = +route.params.id;
    return this.eventosService.getEvento(id);
  }
}
