import { TestBed } from '@angular/core/testing';

import { BoundariesMapProcessorService } from './boundaries-map-processor.service';

describe('BoundariesMapProcessorService', () => {
  let service: BoundariesMapProcessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoundariesMapProcessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
