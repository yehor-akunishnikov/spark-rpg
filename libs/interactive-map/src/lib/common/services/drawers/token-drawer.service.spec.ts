import { TestBed } from '@angular/core/testing';

import { TokenDrawerService } from './token-drawer.service';

describe('TokenDrawerService', () => {
  let service: TokenDrawerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenDrawerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
