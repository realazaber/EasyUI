import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { ContactPage } from './pages/contact/contact.component';
import { DocsPage } from './pages/docs/docs.component';

import { componentRoutes } from './modules/docs-pages/component-pages';
import { miscRoutes } from './modules/docs-pages/misc-pages';
import { moduleRoutes } from './modules/docs-pages/module-pages';

let docRoutes: Routes = [];

miscRoutes.forEach((route: any) => {
  docRoutes.push(route);
});

moduleRoutes.forEach((route: any) => {
  docRoutes.push(route);
});

componentRoutes.forEach((route: any) => {
  docRoutes.push(route);
});

export const routes: Routes = [
  {
    title: 'Easy UI',
    component: HomePage,
    pathMatch: 'full',
    path: '',
  },
  {
    title: 'Docs',
    path: 'docs',
    component: DocsPage,
    children: docRoutes,
  },
  {
    title: 'Contact',
    component: ContactPage,
    pathMatch: 'full',
    path: 'contact',
  },
];
