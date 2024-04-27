import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ApplicationConfig } from '@angular/core';

import { CharacterDataService } from './data-layers/character/data/services/character-data.service';
import { UserDataService } from './data-layers/user/data/services/user-data.service';
import { httpErrorInterceptor } from './common/interceptors/auth.interceptor';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withComponentInputBinding()),
    provideHttpClient(withFetch(), withInterceptors([httpErrorInterceptor])),
    provideAnimations(),
    UserDataService,
    CharacterDataService
  ],
};
