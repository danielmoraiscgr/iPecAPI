import { TestBed } from '@angular/core/testing';

import { TipomanejoService } from './tipomanejo.service';

describe('TipomanejoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipomanejoService = TestBed.get(TipomanejoService);
    expect(service).toBeTruthy();
  });
});
