import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { ColorNumberPipe } from './pipes/color-number.pipe';
import { ProductItemComponent } from './product-item/product-item.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailGuard } from './guards/product-detail.guard';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { LeavePageGuard } from './guards/leave-page.guard';
import { ProductDetailResolve } from './resolvers/product-detail.resolve';
import { MinDateDirective } from './validators/min-date.directive';

const APP_ROUTES: Route[] = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'productos', component: ProductListComponent },
  {
    path: 'productos/:id',
    component: ProductDetailComponent,
    canActivate: [ProductDetailGuard],
    resolve: {
      producto: ProductDetailResolve
    }
  },
  {
    path: 'productos/:id/edit',
    component: ProductEditComponent,
    canActivate: [ProductDetailGuard],
    canDeactivate: [LeavePageGuard],
    resolve: {
      producto: ProductDetailResolve
    }
  },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFilterPipe,
    ColorNumberPipe,
    ProductItemComponent,
    StarRatingComponent,
    WelcomeComponent,
    ProductDetailComponent,
    ProductEditComponent,
    MinDateDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
