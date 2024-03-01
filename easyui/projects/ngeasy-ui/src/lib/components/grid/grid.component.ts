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
  @Input() cols: number = 3;
  @Input() smCols: number = 3;
  @Input() mdCols: number = 3;
  @Input() lgCols: number = 4;
  @Input() gap: number = 2;

  getGridClasses(): string {
    return (
      ' grid-cols-' +
      this.cols +
      ' sm:grid-cols-' +
      this.smCols +
      ' md:grid-cols-' +
      this.mdCols +
      ' lg:grid-cols-' +
      this.lgCols +
      ' gap-' +
      this.gap +
      ' '
    );
  }
}
