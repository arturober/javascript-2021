import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
  transform(productos: Producto[], filter: string): Producto[] {
    return productos.filter(p => p.description.toLowerCase().includes(filter.toLowerCase()));
  }
}
