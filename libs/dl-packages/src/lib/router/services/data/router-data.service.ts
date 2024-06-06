import { inject, Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { selectUrl } from '../../store';

@Injectable({
  providedIn: 'root'
})
export class RouterDataService {
  private readonly _store: Store = inject(Store);

  readonly currentUrl$ = this._store.select(selectUrl);
}
