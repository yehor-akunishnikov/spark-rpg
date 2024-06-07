import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';

import { MapsStore } from '../store';

export const mapsLazyLoadResolver: ResolveFn<Promise<boolean>> = async () => {
  const mapsStore = inject(MapsStore);

  await mapsStore.loadAll();

  return true;
};
