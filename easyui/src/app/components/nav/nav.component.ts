import { Component } from '@angular/core';
import { EasyUIModule } from '../../../../projects/ngeasy-ui/src/public-api';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [EasyUIModule, RouterModule],
  templateUrl: './nav.component.html',
  styles: ``,
})
export class NavComponent {}
