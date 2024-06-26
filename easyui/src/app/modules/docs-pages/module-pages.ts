import { Routes } from '@angular/router';
import { FormspageComponent } from '../../pages/docs/modules/formspage/formspage.component';

export const moduleRoutes: Routes = [
  {
    title: 'Forms',
    component: FormspageComponent,
    pathMatch: 'full',
    path: 'forms',
  },
];
