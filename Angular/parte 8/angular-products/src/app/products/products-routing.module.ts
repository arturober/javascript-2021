import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailGuard } from './guards/product-detail.guard';
import { ProductDetailResolve } from './resolvers/product-detail.resolve';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { LeavePageGuard } from '../guards/leave-page.guard';


const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    data: {
      animation: 'productListPage'
    }
  },
  {
    path: ':id',
    component: ProductDetailComponent,
    canActivate: [ProductDetailGuard],
    resolve: {
      producto: ProductDetailResolve
    },
    data: {
      animation: 'productDetailPage'
    }
  },
  {
    path: ':id/edit',
    component: ProductEditComponent,
    canActivate: [ProductDetailGuard],
    canDeactivate: [LeavePageGuard],
    resolve: {
      producto: ProductDetailResolve
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
