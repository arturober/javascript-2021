import { Injectable } from '@angular/core';
import { Evento } from '../interfaces/evento';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EventosResponse, EventoResponse } from '../interfaces/responses';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private http: HttpClient) { }

  getEventos(): Observable<Evento[]> {
    return this.http.get<EventosResponse>(`/eventos`).pipe(
      map(resp => resp.eventos)
    );
  }

  getEvento(id: number): Observable<Evento> {
    return this.http.get<EventoResponse>(`/eventos/${id}`).pipe(
      map(resp => resp.evento)
    );
  }

  addEvento(evento: Evento): Observable<Evento> {
    return this.http.post<EventoResponse>(`/eventos`, evento).pipe(
      map(resp => resp.evento)
    );
  }

  deleteEvento(id: number): Observable<void> {
    return this.http.delete<void>(`/eventos/${id}`);
  }
}
