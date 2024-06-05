import { TestBed } from '@angular/core/testing';

import { CoordinateUtilsService } from './coordinate-utils.service';

describe('CoordinateUtilsService', () => {
  let service: CoordinateUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordinateUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
