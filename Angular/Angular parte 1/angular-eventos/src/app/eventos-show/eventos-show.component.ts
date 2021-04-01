import { Component, OnInit } from '@angular/core';
import { Evento } from '../interfaces/evento';

@Component({
  selector: 'eventos-show',
  templateUrl: './eventos-show.component.html',
  styleUrls: ['./eventos-show.component.css']
})
export class EventosShowComponent implements OnInit {
  eventos: Evento[];

  constructor() { }

  ngOnInit(): void {
    this.eventos = [
      {
        title: 'Evento de prueba',
        description: 'Nos lo pasaremos genial',
        date: '2021-03-15',
        image: '',
        price: 23.95
      }, {
        title: 'Evento de prueba 2',
        description: 'Este es peor',
        date: '2020-08-14',
        image: '',
        price: 15.5
      }
    ];
  }

}
