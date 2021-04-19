import { Component, OnInit } from '@angular/core';
import { Evento } from '../interfaces/evento';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { EventosService } from '../services/eventos.service';

@Component({
  selector: 'eventos-show',
  templateUrl: './eventos-show.component.html',
  styleUrls: ['./eventos-show.component.css']
})
export class EventosShowComponent implements OnInit {
  eventos: Evento[] = [];
  search = '';

  constructor(private eventosService: EventosService) { }

  ngOnInit(): void {
    this.eventosService.getEventos().subscribe(
      eventos => this.eventos = eventos
    );
  }

  orderDate(e: Event) {
    e.preventDefault();
    this.eventos.sort((e1, e2) => e1.date.localeCompare(e2.date));
    this.eventos = [...this.eventos];
  }

  orderPrice(e: Event) {
    e.preventDefault();
    this.eventos.sort((e1, e2) => e1.price - e2.price);
    this.eventos = [...this.eventos];
  }

  addEvento(newEvento: Evento) {
    this.eventos = [...this.eventos, newEvento];
  }

  deleteEvento(evento: Evento) {
    this.eventos = this.eventos.filter(e => e !== evento);
  }
}
