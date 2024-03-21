import { Route } from '@angular/router';

import { CURRENT_USER_DATA_KEY, currentUserResolver } from './data-layers/user/rest/resolvers/current-user.resolver';
import { logoutGuard } from './common/guards/logout.guard';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./layouts/default-layout/default-layout.component').then(m => m.DefaultLayoutComponent),
    resolve: {
      [CURRENT_USER_DATA_KEY]: currentUserResolver,
    },
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'characters',
        loadComponent: () => import('./pages/characters/characters.component').then(m => m.CharactersComponent),
      },
    ],
  },
  {
    path: 'auth',
    loadComponent: () => import('./layouts/auth-layout/auth-layout.component').then(m => m.AuthLayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'register',
        canActivate: [logoutGuard()],
        loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent),
      },
      {
        path: 'login',
        canActivate: [logoutGuard()],
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
      },
      {
        path: 'logout',
        redirectTo: 'login'
      }
    ],
  },
  {
    path: '**',
    redirectTo: '',
  }
];
