import { TestBed } from '@angular/core/testing';

import { EventoResolver } from './evento.resolver';

describe('EventoResolver', () => {
  let resolver: EventoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EventoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
