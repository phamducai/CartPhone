import { TestBed } from '@angular/core/testing';

import { CartphoneService } from './cartphone.service';

describe('CartphoneService', () => {
  let service: CartphoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartphoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
