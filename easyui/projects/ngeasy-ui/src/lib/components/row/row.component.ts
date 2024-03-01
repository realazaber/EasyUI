import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { cAlignBase } from '../../classes/cAlignBase';

@Component({
  selector: 'eui-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './row.component.html',
  styles: ``,
})
export class EuiRowComponent extends cAlignBase {}
