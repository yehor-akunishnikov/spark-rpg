import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideImageKitLoader } from '@angular/common';
import { ApplicationConfig } from '@angular/core';

import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideStore } from '@ngrx/store';

import { provideRouterStore } from '@ngrx/router-store';
import { provideEffects } from '@ngrx/effects';

import { environment } from '../environments/environment';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withComponentInputBinding()),
    provideHttpClient(withFetch()),
    provideAnimations(),

    provideStore(),
    provideRouterStore(),
    provideStoreDevtools(),
    provideEffects([]),
    provideImageKitLoader(environment.imgCdnPrlEndpoint)
  ]
};
