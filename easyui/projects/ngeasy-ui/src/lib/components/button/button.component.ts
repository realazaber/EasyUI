import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { cBaseComponent } from '../../classes/cBaseComponent';

@Component({
  selector: 'eui-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class EuiButtonComponent extends cBaseComponent {
  @Input() label: string = '';
}
