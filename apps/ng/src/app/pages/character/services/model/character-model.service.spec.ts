import { TestBed } from '@angular/core/testing';

import { CharacterModelService } from './character-model.service';

describe('CharacterModelService', () => {
  let service: CharacterModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
