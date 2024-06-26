import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EasyUIModule } from 'ngeasy-ui';
import { routes } from '../../app.routes';
import { miscRoutes } from '../../modules/docs-pages/misc-pages';
import { moduleRoutes } from '../../modules/docs-pages/module-pages';
import { componentRoutes } from '../../modules/docs-pages/component-pages';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [EasyUIModule, RouterModule],
  templateUrl: './docs.component.html',
  styleUrl: './docs.component.scss',
})
export class DocsPage {
  miscRoutes: Routes = miscRoutes;
  moduleRoutes: Routes = moduleRoutes;
  componentRoutes: Routes = componentRoutes;

  constructor() {}
}
