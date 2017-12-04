import { TestBed, inject } from '@angular/core/testing';

import { StarlightdbService } from './starlightdb.service';

describe('StarlightdbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StarlightdbService]
    });
  });

  it('should be created', inject([StarlightdbService], (service: StarlightdbService) => {
    expect(service).toBeTruthy();
  }));
});
