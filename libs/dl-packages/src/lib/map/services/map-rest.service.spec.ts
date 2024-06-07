import { TestBed } from '@angular/core/testing';

import { MapRestService } from './map-rest.service';

describe('MapRestService', () => {
  let service: MapRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
