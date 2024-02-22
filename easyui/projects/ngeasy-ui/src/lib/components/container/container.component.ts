import { Component, ContentChild, ElementRef } from '@angular/core';
import { cLayoutBase } from '../../classes/cLayoutBase';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'eui-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class EuiContainerComponent extends cLayoutBase {}
