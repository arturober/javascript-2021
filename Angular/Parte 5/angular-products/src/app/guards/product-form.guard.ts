import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductFormComponent } from '../product-form/product-form.component';

@Injectable({
  providedIn: 'root'
})
export class ProductFormGuard implements CanDeactivate<ProductFormComponent> {
  canDeactivate(
    component: ProductFormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.productAdded || confirm('Si sales, los cambios no se guardarán ¿Quieres salir?');
  }

}
