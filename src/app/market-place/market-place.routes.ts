import { Routes } from '@angular/router';

export const marketPlaceRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home-market-place/home-market-place.component')

  },
  {
    path:'**',
    redirectTo: ''
  }

];

export default marketPlaceRoutes
