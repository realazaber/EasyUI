import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { cBaseComponent } from '../../classes/cBaseComponent';

@Component({
  selector: 'eui-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class EuiBadgeComponent extends cBaseComponent {}
