import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventosService } from '../services/eventos.service';
import { Evento } from '../interfaces/evento';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'evento-detail',
  templateUrl: './evento-detail.component.html',
  styleUrls: ['./evento-detail.component.css']
})
export class EventoDetailComponent implements OnInit {
  evento: Evento;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private eventosService: EventosService
  ) { }

  ngOnInit(): void {
    this.evento = this.route.snapshot.data.evento;
  }


  goBack() {
    this.router.navigate(['/eventos']);
  }
}
