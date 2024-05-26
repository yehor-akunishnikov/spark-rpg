import { Route } from '@angular/router';

export enum APP_ROUTES {
  HOME = 'home',
  CHARACTERS = 'characters',
  AUTH = 'auth',
  LOGIN = 'login',
  REGISTER = 'register',
  LOGOUT = 'logout'
}

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./layouts/default-layout/default-layout.component').then(m => m.DefaultLayoutComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: APP_ROUTES.HOME
      },
      {
        path: APP_ROUTES.HOME,
        loadComponent: () => import('./pages/home/home-page.component').then(m => m.HomePageComponent),
      },
      {
        path: `${APP_ROUTES.CHARACTERS}/:id`,
        loadComponent: () => import('./pages/character/character-page.component').then(m => m.CharacterPageComponent)
      },
      {
        path: APP_ROUTES.CHARACTERS,
        loadComponent: () => import('./pages/characters/characters-page.component').then(m => m.CharactersPageComponent),
      },
    ],
  },
  {
    path: APP_ROUTES.AUTH,
    loadComponent: () => import('./layouts/auth-layout/auth-layout.component').then(m => m.AuthLayoutComponent),
    children: [
      {
        path: '',
        redirectTo: APP_ROUTES.LOGIN,
        pathMatch: 'full'
      },
      {
        path: APP_ROUTES.LOGIN,
        loadComponent: () => import('./pages/auth/login/login-page.component').then(m => m.LoginPageComponent),
      },
      {
        path: APP_ROUTES.REGISTER,
        loadComponent: () => import('./pages/auth/register/register-page.component').then(m => m.RegisterPageComponent),
      },
      {
        path: APP_ROUTES.LOGOUT,
        loadComponent: () => import('./pages/auth/logout/logout-page.component').then(m => m.LogoutPageComponent),
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
  }
];
