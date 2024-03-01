import { Component, Input } from '@angular/core';
import { cLayoutBase } from '../../classes/cLayoutBase';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'eui-imgcard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './imgcard.component.html',
  styles: ``,
})
export class EuiImgcardComponent extends cLayoutBase {
  @Input() imgUrl: string = '';
  @Input() imgAlt: string = '';
  @Input() url: string = '';
  @Input() extUrl: string = '';
}
