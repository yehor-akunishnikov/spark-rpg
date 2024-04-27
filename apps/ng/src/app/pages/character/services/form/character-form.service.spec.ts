import { TestBed } from '@angular/core/testing';

import { CharacterFormService } from './character-form.service';

describe('CharacterCrudFormService', () => {
  let service: CharacterFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
