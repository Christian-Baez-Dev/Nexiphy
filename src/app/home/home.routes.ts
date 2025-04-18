import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home-page/home-page.component')

  },
  {
    path:'**',
    redirectTo: ''
  }

];

export default homeRoutes
