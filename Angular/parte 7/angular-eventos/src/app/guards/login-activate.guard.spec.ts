import { TestBed } from '@angular/core/testing';

import { LoginActivateGuard } from './login-activate.guard';

describe('LoginActivateGuard', () => {
  let guard: LoginActivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginActivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
