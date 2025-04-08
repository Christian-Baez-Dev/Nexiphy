import { Routes } from '@angular/router';
import { NoAuthGuard } from './guards/no-auth.guard';
import { IsAuthGuard } from './guards/is-auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'nexiphy',
    loadComponent: () => import('./shared/layouts/general-layout/general-layout.component'),
    canMatch:[IsAuthGuard],
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
        path: 'social-profile',
        loadChildren: () => import('./profile/profile.routes'),
      },
      {
        path: 'notifications',
        loadChildren: () => import('./notifications/notification.routes')
      },
    ],



  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes'),
    canMatch: [
      NoAuthGuard
    ]
  },
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.routes'),
    canMatch:[IsAuthGuard],

  },
  {
    path: '**',
    redirectTo: 'nexiphy/home',
    pathMatch: 'full'
  },

];

