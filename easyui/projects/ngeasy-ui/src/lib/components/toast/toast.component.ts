import { Component, Input, OnInit } from '@angular/core';
import { cBaseComponent } from '../../classes/cBaseComponent';
import { CommonModule } from '@angular/common';
import { IPostion } from '../../types/position';

@Component({
  selector: 'eui-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styles: ``,
})
export class EuiToastComponent extends cBaseComponent implements OnInit {
  @Input() label: string = '';
  @Input() position: IPostion | undefined = IPostion.Bottom;
  @Input() distance: number = 10;
  @Input() duration: number = 3;
  classes: string = '';
  @Input() isActive: boolean = true;

  ngOnInit(): void {
    this.classes = this.getClasses();
    switch (this.position) {
      case IPostion.BottomLeft:
        this.classes += ` bottom-${this.distance} left-${this.distance}`;
        break;
      case IPostion.BottomRight:
        this.classes += ` bottom-${this.distance} right-${this.distance}`;
        break;
      case IPostion.TopLeft:
        this.classes += ` top-${this.distance} left-${this.distance}`;
        break;
      case IPostion.TopRight:
        this.classes += ` top-${this.distance} right-${this.distance}`;
        break;
      case IPostion.Bottom:
        this.classes += ` bottom-10 left-${this.distance} right-${this.distance}`;
        break;
      case IPostion.Top:
        this.classes += ` top-${this.distance} left-${this.distance} right-${this.distance}`;
        break;
      default:
        break;
    }
  }

  activateToast(): void {
    this.isActive = true;

    setTimeout(() => {
      this.isActive = false;
    }, this.duration * 1000);
  }
}
