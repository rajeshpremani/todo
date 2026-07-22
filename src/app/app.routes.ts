import { Routes } from '@angular/router';
import { ViewTask } from './components/view-task/view-task';
import { Dashboard } from './components/dashboard/dashboard';
import { Login } from './features/auth/login/login';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [

  {
    path: '',
    component: Login
  },

  //Post Login Routes
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'dashboard',
        component: Dashboard
      },
      {
        path: 'view-task/:id',
        component: ViewTask
      }
    ]
  },

  {
    path: '**',
    redirectTo: ''
  }

];
