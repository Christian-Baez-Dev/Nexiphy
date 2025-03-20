import { flush } from '@angular/core/testing';
import { Routes } from '@angular/router';

export const messagesRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/messages-page/messages-page.component')

  },
  {
    path: 'chat',
    loadComponent: () => import('./pages/chat-page/chat-page.component')
  },
  {
    path: '**',
    redirectTo: ''
  }

];

export default messagesRoutes
