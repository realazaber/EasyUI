import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { cAlignBase } from '../../classes/cAlignBase';

@Component({
  selector: 'eui-col',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './col.component.html',
  styles: ``,
})
export class EuiColComponent extends cAlignBase {}
