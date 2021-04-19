import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ComponentDeactivate } from '../guards/leave-page.guard';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Welcome | Angular Products');
  }
}
