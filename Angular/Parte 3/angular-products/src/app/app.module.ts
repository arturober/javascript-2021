import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { ColorNumberPipe } from './pipes/color-number.pipe';
import { ProductItemComponent } from './product-item/product-item.component';
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFilterPipe,
    ColorNumberPipe,
    ProductItemComponent,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
