import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { EasyUIModule } from 'ngeasy-ui';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [EasyUIModule, RouterModule],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss',
})
export class ComponentsPage implements OnInit {
  componentRoutes: Routes | undefined = undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.componentRoutes = routes[1].children;
  }
}
