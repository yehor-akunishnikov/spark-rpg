import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./layouts/default-layout/default-layout.component').then(m => m.DefaultLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  }
];
