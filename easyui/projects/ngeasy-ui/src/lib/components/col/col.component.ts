import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'eui-col',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './col.component.html',
  styles: ``,
})
export class EuiColComponent {
  @Input() ygap: number = 2;
  @Input() rowStart: 'sm' | 'md' | 'lg' | null = null;

  getColClasses(): string {
    let classes = '';
    classes += 'gap-y-' + this.ygap + ' ';
    if (this.rowStart != null) {
      classes += this.rowStart + ':flex-row ';
    }

    return classes;
  }
}
