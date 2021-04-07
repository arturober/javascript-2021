import {  Component, OnInit } from '@angular/core';
import { Evento } from '../interfaces/evento';
import { EventosService } from '../services/eventos.service';

@Component({
  selector: 'eventos-show',
  templateUrl: './eventos-show.component.html',
  styleUrls: ['./eventos-show.component.css'],
})
export class EventosShowComponent implements OnInit {
  eventos: Evento[];
  search = '';

  constructor(private eventosService: EventosService) {}

  ngOnInit(): void {
    this.eventos = this.eventosService.getAll();
  }

  orderDate(): void {
    this.eventos.sort((e1, e2) => e1.date.localeCompare(e2.date));
    this.eventos = [...this.eventos];
  }

  orderPrice(): void {
    this.eventos.sort((e1, e2) => e1.price - e2.price);
    this.eventos = [...this.eventos];
  }

  deleteEvento(evento: Evento): void {
    this.eventos = this.eventos.filter(e => e !== evento);
  }

  addEvento(evento: Evento): void {
    this.eventos = [...this.eventos, evento];
  }
}
