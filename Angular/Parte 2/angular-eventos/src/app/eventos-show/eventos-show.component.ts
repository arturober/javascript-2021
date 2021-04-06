import {  Component, OnInit } from '@angular/core';
import { Evento } from '../interfaces/evento';

@Component({
  selector: 'eventos-show',
  templateUrl: './eventos-show.component.html',
  styleUrls: ['./eventos-show.component.css'],
})
export class EventosShowComponent implements OnInit {
  eventos: Evento[];
  search = '';

  newEvento: Evento = {
    title: '',
    description: '',
    image: '',
    price: 0,
    date: '',
  };

  constructor() {}

  ngOnInit(): void {
    this.eventos = [
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

  orderDate(): void {
    this.eventos.sort((e1, e2) => e1.date.localeCompare(e2.date));
    this.eventos = [...this.eventos];
  }

  orderPrice(): void {
    this.eventos.sort((e1, e2) => e1.price - e2.price);
    this.eventos = [...this.eventos];
  }

  addEvento(): void {

  }

  changeImage(fileInput: HTMLInputElement): void {
    if (!fileInput.files || fileInput.files.length === 0) {
      return;
    }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', (e) => {
      this.newEvento.image = reader.result as string;
    });
  }
}
