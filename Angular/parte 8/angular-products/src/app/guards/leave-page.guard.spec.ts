import { TestBed } from '@angular/core/testing';

import { LeavePageGuard } from './leave-page.guard';

describe('LeavePageGuard', () => {
  let guard: LeavePageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LeavePageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
