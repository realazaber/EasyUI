import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'eui-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './row.component.html',
  styles: ``,
})
export class EuiRowComponent {
  @Input() xgap: number = 2;
  @Input() colStart: 'sm' | 'md' | 'lg' | null = null;

  getRowClasses(): string {
    let classes = '';
    classes += 'gap-x-' + this.xgap + ' ';
    if (this.colStart != null) {
      classes += this.colStart + ':flex-col ';
    }

    return classes;
  }
}
