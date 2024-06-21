import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DarkmodeService } from '../../services/darkmode.service';

@Component({
  selector: 'eui-darkmode',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './darkmode.component.html',
  styles: ``,
})
export class EuiDarkModeComponent implements OnInit {
  classes: string = '';
  label: string = 'Button';
  toggleDiv: HTMLElement | null = window.document.getElementById('darkWrapper');
  @Input() lightLabel: string = 'Light ☀️';
  @Input() darkLabel: string = 'Dark 🌙';

  constructor(private darkMode: DarkmodeService) {}

  ngOnInit(): void {
    console.log('mode: ' + this.darkMode.isDark());
    this.getClasses();
    if (!this.toggleDiv) {
      return;
    }
    if (this.darkMode.isDark()) {
      this.darkMode.setDark(this.toggleDiv);
    } else {
      this.darkMode.setLight(this.toggleDiv);
    }
  }

  toggleMode(): void {
    if (this.toggleDiv) {
      this.darkMode.toggleDarkMode(this.toggleDiv);
    }
    this.getClasses();
  }

  getClasses(): string {
    if (this.darkMode.isDark() == true) {
      //dark
      this.classes =
        'w-24 hover:cursor-pointer p-1 rounded-full bg-white text-black border-2 border-slate-300 ';
    } else {
      //light

      this.classes =
        'w-24 hover:cursor-pointer p-1 rounded-full bg-black text-white ';
    }
    return this.classes;
  }

  getLabel(): string {
    if (this.darkMode.isDark() == true) {
      this.label = this.lightLabel;
    } else {
      this.label = this.darkLabel;
    }
    return this.label;
  }
}
