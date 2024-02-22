import { Component, Input } from '@angular/core';
import { eBgColorPick } from '../types/colorPick';
import { eSizePick } from '../types/sizePick';

@Component({
  template: '',
})
export class cBaseComponent {
  @Input() bgColor?: eBgColorPick | null = null;
  @Input() size?: eSizePick | null = null;

  getClasses(): string {
    let extraClasses: string = ' ';
    switch (this.bgColor) {
      case 'Primary':
        extraClasses += 'bg-primary ';
        break;
      case 'Secondary':
        extraClasses += 'bg-secondary ';
        break;
      case 'Accent':
        extraClasses += 'bg-accent ';
        break;
      case 'Success':
        extraClasses += 'bg-green-500 text-white ';
        break;
      case 'Warning':
        extraClasses += 'bg-yellow-500 text-white ';
        break;
      case 'Danger':
        extraClasses += 'bg-red-500 text-white ';
        break;
      case 'Info':
        extraClasses += 'bg-blue-500 text-white ';
        break;
      default:
        extraClasses += ' ';
        break;
    }
    switch (this.size) {
      case 'Small':
        extraClasses += 'text-sm p-1';
        break;
      case 'Medium':
        extraClasses += 'text-md px-3 py-2';
        break;
      case 'Large':
        extraClasses += 'text-lg px-4 py-3';
        break;
      case 'XLarge':
        extraClasses += 'text-xl px-5 py-4';
        break;
      default:
        extraClasses += 'p-1';
        break;
    }

    return extraClasses;
  }
}
