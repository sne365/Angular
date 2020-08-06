import { TestBed } from '@angular/core/testing';

import { CanGaurdService } from './can-gaurd.service';

describe('CanGaurdService', () => {
  let service: CanGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
