import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'eui-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid.component.html',
  styles: ``,
})
export class EuiGridComponent {
  @Input() cols: number = 1;
  @Input() smCols: number | null = null;
  @Input() mdCols: number | null = null;
  @Input() lgCols: number | null = null;
  @Input() xlCols: number | null = null;
  @Input() gap: number = 2;

  getGridClasses(): string {
    let classes = ' grid-cols-' + this.cols;

    if (this.smCols) {
      classes += ' sm:grid-cols-' + this.smCols;
    }

    if (this.mdCols) {
      classes += ' md:grid-cols-' + this.mdCols;
    }

    if (this.lgCols) {
      classes += ' lg:grid-cols-' + this.lgCols;
    }

    if (this.xlCols) {
      classes += ' xl:grid-cols-' + this.xlCols;
    }

    classes += ' gap-' + this.gap + ' ';

    return classes;
  }
}
