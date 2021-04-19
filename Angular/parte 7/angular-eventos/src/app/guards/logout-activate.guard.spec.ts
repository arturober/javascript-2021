import { TestBed } from '@angular/core/testing';

import { LogoutActivateGuard } from './logout-activate.guard';

describe('LogoutActivateGuard', () => {
  let guard: LogoutActivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogoutActivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
