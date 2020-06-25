import { TestBed } from '@angular/core/testing';

import { AparteService } from './aparte.service';

describe('AparteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AparteService = TestBed.get(AparteService);
    expect(service).toBeTruthy();
  });
});
