import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Evento } from '../interfaces/evento';
import { EventoResponse, EventosResponse } from '../interfaces/responses';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Evento[]> {
    return this.http.get<EventosResponse>('eventos').pipe(
      map(resp => resp.eventos)
    );
  }

  get(id: number): Observable<Evento> {
    return this.http.get<EventoResponse>('eventos/' + id).pipe(
      map(resp => resp.evento)
    );
  }

  insert(evento: Evento): Observable<Evento> {
    return this.http.post<EventoResponse>('eventos', evento).pipe(
      map(resp => resp.evento)
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`eventos/${id}`);
  }
}
