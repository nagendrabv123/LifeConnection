import { TestBed } from '@angular/core/testing';

import { PawServiceService } from './paw-service.service';

describe('PawServiceService', () => {
  let service: PawServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PawServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
