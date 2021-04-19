import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTopComponent } from './menu-top/menu-top.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MenuTopComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuTopComponent,  ]
})
export class MenuModule { }
