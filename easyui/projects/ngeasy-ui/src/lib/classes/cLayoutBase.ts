import { Component, Input } from '@angular/core';
import { eDirection } from '../types/directionPick.enum';

@Component({
  template: '',
})
export class cLayoutBase {
  @Input() dir?: eDirection | null = 'Col';
  @Input() smDir?: eDirection | null;
  @Input() mdDir?: eDirection | null;
  @Input() lgDir?: eDirection | null;

  getDirection(): string {
    let dirClasses: string = ' ';
    switch (this.dir) {
      case 'Col':
        dirClasses += 'flex-col ';
        break;
      case 'ColRev':
        dirClasses += 'flex-col-reverse ';
        break;
      case 'Row':
        dirClasses += 'flex-row ';
        break;
      case 'RowRev':
        dirClasses += 'flex-row-reverse ';
        break;
      default:
        dirClasses += '';
        break;
    }
    switch (this.smDir) {
      case 'Col':
        dirClasses += 'sm:flex-col ';
        break;
      case 'ColRev':
        dirClasses += 'sm:flex-col-reverse ';
        break;
      case 'Row':
        dirClasses += 'sm:flex-row ';
        break;
      case 'RowRev':
        dirClasses += 'sm:flex-row-reverse ';
        break;
      default:
        dirClasses += '';
        break;
    }
    switch (this.mdDir) {
      case 'Col':
        dirClasses += 'md:flex-col ';
        break;
      case 'ColRev':
        dirClasses += 'md:flex-col-reverse ';
        break;
      case 'Row':
        dirClasses += 'md:flex-row ';
        break;
      case 'RowRev':
        dirClasses += 'md:flex-row-reverse ';
        break;
      default:
        dirClasses += '';
        break;
    }
    switch (this.lgDir) {
      case 'Col':
        dirClasses += 'lg:flex-col ';
        break;
      case 'ColRev':
        dirClasses += 'lg:flex-col-reverse ';
        break;
      case 'Row':
        dirClasses += 'lg:flex-row ';
        break;
      case 'RowRev':
        dirClasses += 'lg:flex-row-reverse ';
        break;
      default:
        dirClasses += '';
        break;
    }

    return dirClasses;
  }
}
