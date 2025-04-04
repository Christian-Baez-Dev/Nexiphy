import { Routes } from '@angular/router';

export const profileRoutes: Routes = [
  {
    path: '',
    loadComponent: ()  => import('./pages/social-profile-page/social-profile-page.component')
  }

];


export default profileRoutes

