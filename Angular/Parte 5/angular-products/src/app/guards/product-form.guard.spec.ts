import { TestBed } from '@angular/core/testing';

import { ProductFormGuard } from './product-form.guard';

describe('ProductFormGuard', () => {
  let guard: ProductFormGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductFormGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
