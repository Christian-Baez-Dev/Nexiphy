import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/auth-layout/auth-layout.component'),
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/login-page/login-page.component')
      },
      {
        path: 'register',
        loadComponent: () => import('./pages/register-page/register-page.component')
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'full'
      },
    ]
  },

];

export default authRoutes
