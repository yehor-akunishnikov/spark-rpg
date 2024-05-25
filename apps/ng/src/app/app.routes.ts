import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./layouts/default-layout/default-layout.component').then(m => m.DefaultLayoutComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home-page.component').then(m => m.HomePageComponent),
      },
      {
        path: 'characters',
        loadComponent: () => import('./pages/characters/characters-page.component').then(m => m.CharactersPageComponent),
        children: [
          {
            path: ':id',
            loadComponent: () => import('./pages/characters/character/character-page.component').then(m => m.CharacterPageComponent)
          }
        ]
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  }
];
