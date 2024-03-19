import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { lastValueFrom } from 'rxjs';

export const apiDataResolver = () => {
  const httpClient = inject(HttpClient);

  return lastValueFrom(httpClient.get<Record<string, string>>('/api'));
};

export const API_DATA_RESOLVER_KEY = 'apiData';
