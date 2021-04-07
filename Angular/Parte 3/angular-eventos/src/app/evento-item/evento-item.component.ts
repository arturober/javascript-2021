import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Evento } from '../interfaces/evento';

@Component({
  selector: 'evento-item',
  templateUrl: './evento-item.component.html',
  styleUrls: ['./evento-item.component.css']
})
export class EventoItemComponent implements OnInit {
  @Input() evento!: Evento;
  @Output() deleted = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteEvento(): void {
    this.deleted.emit();
  }
}
