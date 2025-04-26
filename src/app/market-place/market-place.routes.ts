import { Routes } from '@angular/router';

export const marketPlaceRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home-market-place/home-market-place.component')
  },
  {
    path: 'create',
    loadComponent: () => import('./pages/create-announcement/create-announcement.component')
  },
  {
    path:'profile/:userName',
    loadComponent: () => import('./pages/marketplace-profile/marketplace-profile.component')
  },
  {
    path:'**',
    redirectTo: ''
  }

];

export default marketPlaceRoutes
