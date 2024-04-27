import { inject } from '@angular/core';

import { CharacterDataService } from '../services/character-data.service';

export const charactersResolver = () => {
  const userDataService = inject(CharacterDataService);

  return userDataService.loadAll();
};

export const CHARACTERS_DATA_KEY = 'charactersData';
