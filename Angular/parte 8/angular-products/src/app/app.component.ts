import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, query, style, group, animate } from '@angular/animations';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('animateRoute', [
      transition('productListPage => productDetailPage', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%' })),
        query(':enter', style({ transform: 'translateX(100%)' })),
        group([
          query(':leave', [
            animate('.5s', style({ transform: 'translateX(-100%)' })),
          ]),
          query(':enter', [
            animate('.5s', style({ transform: 'none' })),
          ]),
        ])
      ]),
      transition('productDetailPage => productListPage', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%' })),
        query(':enter', style({ transform: 'translateX(-100%)' })),
        group([
          query(':leave', [
            animate('0.5s', style({ transform: 'translateX(100%)' })),
          ]),
          query(':enter', [
            animate('0.5s', style({ transform: 'none' })),
          ]),
        ])
      ]),
    ])
  ]
})
export class AppComponent {
  getRouteState(routerOutlet: RouterOutlet) {
    return routerOutlet.activatedRouteData.animation;
  }
}
