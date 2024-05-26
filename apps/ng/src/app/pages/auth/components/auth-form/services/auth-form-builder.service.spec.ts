import { TestBed } from '@angular/core/testing';

import { AuthFormBuilderService } from './auth-form-builder.service';

describe('AuthFormBuilderService', () => {
  let service: AuthFormBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthFormBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
