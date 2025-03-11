import { flush } from '@angular/core/testing';
import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/home-layout/home-layout.component'),
    children: [
      {
        path: 'home-network',
        loadComponent: () => import('./pages/home-page/home-page.component')
      },
      {
        path: 'home-marketplace',
        loadComponent: () => import('./pages/marketplace-page/marketplace-page.component')
      },
      {
        path: '',
        redirectTo: 'home-network',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'home-network',
        pathMatch: 'full'
      },
    ]
  },

];

export default homeRoutes
