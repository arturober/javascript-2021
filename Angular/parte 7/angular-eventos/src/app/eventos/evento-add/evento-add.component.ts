import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Evento } from '../interfaces/evento';
import { EventosService } from '../services/eventos.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'evento-add',
  templateUrl: './evento-add.component.html',
  styleUrls: ['./evento-add.component.css']
})
export class EventoAddComponent implements OnInit {
  newEvento: Evento;
  @Output() add = new EventEmitter<Evento>();
  saved = false;
  fechaHoy = new Date().toISOString();

  constructor(private eventosService: EventosService, private router: Router) { }

  ngOnInit(): void {
    this.resetFormulario();
  }

  addEvento() {
    this.eventosService.addEvento(this.newEvento).subscribe(
      evento => {
        this.saved = true;
        this.router.navigate(['/eventos']);
      }
    );
  }

  resetFormulario() {
    this.newEvento = {
      name: '',
      description: '',
      image: '',
      price: null,
      date: ''
    };
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) { return; }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.newEvento.image = reader.result as string;
    });
  }

  validClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    return {
      [validClass]: ngModel.touched && ngModel.valid,
      [errorClass]: ngModel.touched && ngModel.invalid
    };
  }

}
