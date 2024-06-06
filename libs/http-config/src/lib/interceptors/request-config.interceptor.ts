import { HttpInterceptorFn } from '@angular/common/http';

export const requestConfigInterceptor: HttpInterceptorFn = (req, next) => {
  const apiReq = req.clone({
    withCredentials: true,
  });

  return next(apiReq);
};
