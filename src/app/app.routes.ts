import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    loadComponent: () => import('./shared/layouts/general-layout/general-layout.component'),
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.routes'),
      },
      {
        path: 'marketplace',
        loadChildren: () => import('./market-place/market-place.routes'),
      },
      {
        path: 'profile',
        loadChildren: () => import('./market-place/market-place.routes'),
      },
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes'),
  },
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.routes'),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },

];

