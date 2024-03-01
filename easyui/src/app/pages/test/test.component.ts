import { Component } from '@angular/core';
import { EasyUIModule } from '../../../../projects/ngeasy-ui/src/public-api';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [EasyUIModule],
  templateUrl: './test.component.html',
  styles: ``,
})
export class TestComponent {}
