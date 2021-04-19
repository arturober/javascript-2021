import { TestBed } from '@angular/core/testing';

import { EventoDetailService } from './evento-detail.service';

describe('EventoDetailService', () => {
  let service: EventoDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventoDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
