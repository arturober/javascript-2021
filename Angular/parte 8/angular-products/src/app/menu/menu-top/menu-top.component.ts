import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.css']
})
export class MenuTopComponent implements OnInit {
  title = 'Angular Products';
  constructor() { }

  ngOnInit(): void {
  }

}
