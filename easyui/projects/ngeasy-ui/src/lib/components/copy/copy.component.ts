import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EuiToastComponent } from '../toast/toast.component';
import { IPostion } from '../../types/position';
import { cToastProps } from '../../classes/cToastProps';

@Component({
  selector: 'eui-copy',
  standalone: true,
  imports: [CommonModule, EuiToastComponent],
  templateUrl: './copy.component.html',
  styles: ``,
})
export class EuiCopyComponent extends cToastProps {
  @Input() label: string = '';
  @Input() content: string = '';
  @Input() toastDuration: number = 3;
  position: IPostion = IPostion.Top;
  toastActive: boolean = false;

  copy(): void {
    navigator.clipboard.writeText(this.content);
    this.toastActive = true;
    setTimeout(() => {
      this.toastActive = false;
    }, this.toastDuration * 1000);
  }
}
