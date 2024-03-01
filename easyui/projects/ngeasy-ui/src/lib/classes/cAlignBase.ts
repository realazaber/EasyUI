import { Component, Input } from '@angular/core';

@Component({
  template: '',
})
export class cAlignBase {
  @Input() xgap: number = 2;
  @Input() ygap: number = 2;

  @Input() rowStart: 'sm' | 'md' | 'lg' | null = null;
  @Input() colStart: 'sm' | 'md' | 'lg' | null = null;

  getRowClasses(): string {
    let classes = '';
    classes += 'gap-x-' + this.xgap + ' ';
    if (this.colStart != null) {
      classes += this.colStart + ':flex-col ';
    }

    return classes;
  }

  getColClasses(): string {
    let classes = '';
    classes += 'gap-y-' + this.ygap + ' ';
    if (this.rowStart != null) {
      classes += this.rowStart + ':flex-row ';
    }

    return classes;
  }

  getClasses(): string {
    let classes = '';

    classes += 'gap-x-' + this.xgap + ' ';
    if (this.colStart != null) {
      classes += this.colStart + ':flex-col ';
    }

    classes += 'gap-y-' + this.ygap + ' ';
    if (this.rowStart != null) {
      classes += this.rowStart + ':flex-row ';
    }

    return classes;
  }
}
