import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Evento } from '../interfaces/evento';
import { EventosService } from '../services/eventos.service';

@Component({
  selector: 'evento-add',
  templateUrl: './evento-add.component.html',
  styleUrls: ['./evento-add.component.css']
})
export class EventoAddComponent implements OnInit {
  nombreImagen = '';
  newEvento!: Evento;
  @Output() added = new EventEmitter<Evento>();

  constructor(private eventosService: EventosService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  addEvento(): void {
    this.eventosService.insert(this.newEvento).subscribe(
      evento => {
        this.added.emit(evento);
        this.resetForm();
      }
    );
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

  resetForm(): void {
    this.newEvento = {
      title: '',
      description: '',
      image: '',
      price: 0,
      date: '',
    };
    this.nombreImagen = '';
  }
}
