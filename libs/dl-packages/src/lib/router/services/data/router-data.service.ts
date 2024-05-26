import { inject, Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { RouterDlModule } from '../../router-dl.module';
import { selectUrl } from '../../store';

@Injectable({
  providedIn: RouterDlModule
})
export class RouterDataService {
  private readonly _store: Store = inject(Store);

  currentUrl$ = this._store.select(selectUrl);
}
