import { TestBed } from '@angular/core/testing';

import { StatsFormService } from './stats-form.service';

describe('StatsFormService', () => {
  let service: StatsFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatsFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
