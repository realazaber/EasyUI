import { Component, Input } from '@angular/core';
import { eBgColorPick } from '../types/colorPick';
import { eSizePick } from '../types/sizePick';

@Component({
  template: '',
})
export class cBaseComponent {
  @Input() bgColor?: eBgColorPick | string | null = null;
  @Input() size?: eSizePick | null = null;
  @Input() opacity?:
    | 0
    | 5
    | 10
    | 15
    | 20
    | 25
    | 30
    | 35
    | 40
    | 45
    | 50
    | 55
    | 60
    | 65
    | 70
    | 75
    | 80
    | 85
    | 90
    | 95
    | 100 = 0;

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
        extraClasses += ' bg-[';
        extraClasses += this.bgColor;
        extraClasses += '] ';
        break;
    }
    switch (this.size) {
      case 'Small':
      case 'S':
        extraClasses += 'text-sm p-1';
        break;
      case 'Medium':
      case 'M':
        extraClasses += 'text-md px-3 py-2';
        break;
      case 'Large':
      case 'L':
        extraClasses += 'text-lg px-4 py-3';
        break;
      case 'XLarge':
      case 'XL':
        extraClasses += 'text-xl px-5 py-4';
        break;
      default:
        extraClasses += 'p-1';
        break;
    }

    if (this.opacity) {
      extraClasses += ' opacity-' + this.opacity + ' ';
    }

    return extraClasses;
  }
}
