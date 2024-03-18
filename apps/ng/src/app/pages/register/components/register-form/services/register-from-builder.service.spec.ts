import { TestBed } from '@angular/core/testing';

import { RegisterFromBuilderService } from './register-from-builder.service';

describe('RegisterFromBuilderService', () => {
  let service: RegisterFromBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterFromBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
