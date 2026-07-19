import { Routes } from '@angular/router';
import { ViewTask } from './components/view-task/view-task';
import { Dashboard } from './components/dashboard/dashboard';

export const routes: Routes = [

  {
    path: '',
    component: Dashboard
  },

  {
    path: 'view-task/:id',
    component: ViewTask
  },

  {
    path: '**',
    redirectTo: ''
  }

];
