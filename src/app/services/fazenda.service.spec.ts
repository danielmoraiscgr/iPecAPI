import { TestBed } from '@angular/core/testing';

import { FazendaService } from './fazenda.service';

describe('FazendaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FazendaService = TestBed.get(FazendaService);
    expect(service).toBeTruthy();
  });
});
