import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoDetailComponent } from './evento-detail.component';

describe('EventoDetailComponent', () => {
  let component: EventoDetailComponent;
  let fixture: ComponentFixture<EventoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
