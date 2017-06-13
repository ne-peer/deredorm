import { TestBed, inject } from '@angular/core/testing';

import { UnitUtilService } from './unit-util.service';

describe('UnitUtilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnitUtilService]
    });
  });

  it('should be created', inject([UnitUtilService], (service: UnitUtilService) => {
    expect(service).toBeTruthy();
  }));
});
