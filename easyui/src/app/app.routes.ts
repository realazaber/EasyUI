import { Routes } from '@angular/router';
import { TestComponent } from './pages/test/test.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    title: 'home',
    component: HomeComponent,
    pathMatch: 'full',
    path: '',
  },

  {
    title: 'test',
    component: TestComponent,
    pathMatch: 'full',
    path: 'test',
  },
];
