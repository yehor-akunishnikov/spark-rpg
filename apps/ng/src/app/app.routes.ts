import { Route } from '@angular/router';

import { CHARACTERS_DATA_KEY, charactersResolver } from './data-layers/character/data/resolvers/characters.resolver';
import { logoutGuard } from './common/guards/logout.guard';
import { authGuard } from './common/guards/auth.guard';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./layouts/default-layout/default-layout.component').then(m => m.DefaultLayoutComponent),
    canActivate: [authGuard()],
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
        resolve: {
          [CHARACTERS_DATA_KEY]: charactersResolver,
        },
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full',
          },
          {
            path: 'list',
            loadComponent: () => import('./pages/characters/characters.component').then(m => m.CharactersComponent),
          },
          {
            path: 'create',
            loadComponent: () => import('./pages/character/character.component').then(m => m.CharacterComponent),
          },
          {
            path: 'edit/:id',
            loadComponent: () => import('./pages/character/character.component').then(m => m.CharacterComponent),
          },
        ]
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
