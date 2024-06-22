import { Component } from '@angular/core';
import { EasyUIModule } from 'ngeasy-ui';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [EasyUIModule],
  templateUrl: './buttons.component.html',
  styles: ``,
})
export class ButtonsPage {
  codes: string[] = [
    `<eui-button
  size="Medium"
  bgColor="Success"
  Example</eui-button>`,
  ];
}
