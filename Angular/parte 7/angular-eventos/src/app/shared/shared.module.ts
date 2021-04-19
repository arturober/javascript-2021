import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinDateDirective } from './validators/min-date.directive';
import { SameValueDirective } from './validators/same-value.directive';



@NgModule({
  declarations: [
    MinDateDirective,
    SameValueDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MinDateDirective,
    SameValueDirective,
  ]
})
export class SharedModule { }
