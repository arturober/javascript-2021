import { Injectable } from '@angular/core';
import { Evento } from '../interfaces/evento';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  constructor() { }

  getAll(): Evento[] {
    return [
      {
        title: 'Evento de prueba',
        description: 'Nos lo pasaremos genial',
        date: '2021-03-15',
        image: 'assets/evento1.jpg',
        price: 23.95,
      },
      {
        title: 'Evento de prueba 2',
        description: 'Este es peor',
        date: '2020-08-14',
        image: 'assets/evento2.png',
        price: 35.5,
      },
    ];
  }
}
