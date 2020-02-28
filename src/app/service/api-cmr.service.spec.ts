import { TestBed } from '@angular/core/testing';

import { ApiCmrService } from './api-cmr.service';

describe('ApiCmrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiCmrService = TestBed.get(ApiCmrService);
    expect(service).toBeTruthy();
  });
});
