import { TestBed } from '@angular/core/testing';

import { CharacterRestService } from './character-rest.service';

describe('CharacterRestService', () => {
  let service: CharacterRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
