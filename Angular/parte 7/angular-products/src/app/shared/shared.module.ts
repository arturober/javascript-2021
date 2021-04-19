import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { MinDateDirective } from './validators/min-date.directive';



@NgModule({
  declarations: [
    StarRatingComponent,
    MinDateDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarRatingComponent,
    MinDateDirective
  ]
})
export class SharedModule { }
