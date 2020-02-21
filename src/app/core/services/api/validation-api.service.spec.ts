import { TestBed } from '@angular/core/testing';

import { ValidationApiService } from './validation-api.service';

describe('ValidationApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidationApiService = TestBed.get(ValidationApiService);
    expect(service).toBeTruthy();
  });
});
