import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from '../interfaces/evento';

@Component({
  selector: 'evento-detail',
  templateUrl: './evento-detail.component.html',
  styleUrls: ['./evento-detail.component.css'],
})
export class EventoDetailComponent implements OnInit {
  evento!: Evento;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.data.subscribe(
      data => this.evento = data.evento
    );
  }

  goBack() {
    this.router.navigate(['/eventos']);
  }
}
