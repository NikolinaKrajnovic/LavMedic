import { TestBed } from '@angular/core/testing';

import { DomZdravljaService } from './dom-zdravlja.service';

describe('DomZdravljaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DomZdravljaService = TestBed.get(DomZdravljaService);
    expect(service).toBeTruthy();
  });
});
