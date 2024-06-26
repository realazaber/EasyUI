import { Routes } from '@angular/router';
import { InstallPage } from '../../pages/docs/misc/install/install.component';

export const miscRoutes: Routes = [
  {
    title: 'Install',
    component: InstallPage,
    pathMatch: 'full',
    path: 'install',
  },
];
