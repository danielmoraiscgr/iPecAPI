import { TestBed } from '@angular/core/testing';

import { ManejoService } from './manejo.service';

describe('ManejoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManejoService = TestBed.get(ManejoService);
    expect(service).toBeTruthy();
  });
});
