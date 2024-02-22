import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { cBaseComponent } from '../../classes/cBaseComponent';

@Component({
  selector: 'eui-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
})
export class EuiSectionComponent extends cBaseComponent {}
