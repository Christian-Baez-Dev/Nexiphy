import { Routes } from '@angular/router';

export const notificationRotues: Routes = [
  {
    path: '',
    loadComponent: ()  => import('./pages/notifications-page/notifications-page.component')
  }

];


export default notificationRotues

