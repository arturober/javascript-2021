import { TestBed } from '@angular/core/testing';

import { ProductDetailResolve } from './product-detail.resolve';

describe('ProductDetailService', () => {
  let service: ProductDetailResolve;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDetailResolve);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
