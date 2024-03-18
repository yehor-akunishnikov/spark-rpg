import { Route } from '@angular/router';

import { API_DATA_RESOLVER_KEY, apiDataResolver } from './pages/api-data/resolvers/api-data.resolver';

export const appRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () => import('./layouts/default-layout/default-layout.component').then(m => m.DefaultLayoutComponent),
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
          }
        ],
      },
      {
        path: 'test-api-data',
        loadComponent: () => import('./pages/api-data/api-data.component').then(m => m.ApiDataComponent),
        resolve: {
          [API_DATA_RESOLVER_KEY]: apiDataResolver,
        }
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
            loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent),
          },
          {
            path: 'login',
            loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
          }
        ],
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
  }
];
