import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route, PreloadAllModules } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductDetailGuard } from './products/guards/product-detail.guard';
import { ProductDetailResolve } from './products/resolvers/product-detail.resolve';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { LeavePageGuard } from './guards/leave-page.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseUrlInterceptor } from './interceptors/base-url.interceptor';
import { ProductsModule } from './products/products.module';

const APP_ROUTES: Route[] = [
  { path: 'welcome', component: WelcomeComponent },
  {
    path: 'productos',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES, {preloadingStrategy: PreloadAllModules}),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true,
    }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
