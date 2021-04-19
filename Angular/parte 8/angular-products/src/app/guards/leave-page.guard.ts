import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductEditComponent } from '../products/product-edit/product-edit.component';

export interface ComponentDeactivate {
  canDeactivate: () => boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>;
}

@Injectable({
  providedIn: 'root'
})
export class LeavePageGuard implements CanDeactivate<ComponentDeactivate> {
  canDeactivate(
    component: ComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return component.canDeactivate();
  }
}
