import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { mapsLazyLoadResolver } from './maps-lazy-load.resolver';

describe('mapsLazyLoadResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => mapsLazyLoadResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
