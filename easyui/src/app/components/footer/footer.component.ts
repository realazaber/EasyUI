import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EasyUIModule } from 'ngeasy-ui';
import { routes } from '../../app.routes';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [EasyUIModule, RouterModule, LogoComponent],
  templateUrl: './footer.component.html',
  styles: ``,
})
export class FooterComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  routes: Routes | undefined = undefined;

  ngOnInit(): void {
    this.routes = routes;
  }
}
