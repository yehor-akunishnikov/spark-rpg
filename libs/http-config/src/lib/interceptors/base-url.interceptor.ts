import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { API_BASE_URL_TOKEN } from '../tokens/base-url.token';

export const apiBaseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = inject(API_BASE_URL_TOKEN);

  const apiReq = req.clone({ url: `${baseUrl}/${req.url}` });

  return next(apiReq);
};
