import { Pipe, PipeTransform } from '@angular/core';
import { Evento } from '../interfaces/evento';

@Pipe({
  name: 'eventosFilter',
})
export class EventosFilterPipe implements PipeTransform {

  transform(eventos: Evento[], filtro: string): Evento[] {
    return eventos.filter(
      e => e.name.toLowerCase().includes(filtro.toLowerCase()) ||
           e.description.toLowerCase().includes(filtro.toLowerCase())
    );
  }

}
