import { TestBed, inject } from '@angular/core/testing';

import { ImasdbService } from './imasdb.service';

describe('ImasdbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImasdbService]
    });
  });

  it('should be created', inject([ImasdbService], (service: ImasdbService) => {
    expect(service).toBeTruthy();
  }));
});
