import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideImageKitLoader } from '@angular/common';
import { ApplicationConfig } from '@angular/core';

import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';

import {
  API_BASE_URL_TOKEN,
  apiBaseUrlInterceptor,
  authErrorInterceptor
} from '@spark-rpg/http-config';

import { environment } from '../environments/environment';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withComponentInputBinding()),
    provideHttpClient(
      withFetch(),
      withInterceptors([
        apiBaseUrlInterceptor,
        authErrorInterceptor
      ])
    ),
    provideAnimations(),
    provideStore({
      router: routerReducer
    }),
    provideRouterStore(),
    provideStoreDevtools(),
    provideEffects([]),
    provideImageKitLoader(environment.imgCdnPrlEndpoint),
    {
      provide: API_BASE_URL_TOKEN,
      useValue: environment.apiBaseUrl
    }
  ]
};
