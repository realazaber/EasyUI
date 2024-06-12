import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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

  constructor(private darkMode: DarkmodeService) {}

  ngOnInit(): void {
    this.getClasses();
  }

  toggleMode(): void {
    let toggleDiv: HTMLElement | null =
      window.document.getElementById('darkWrapper');
    if (toggleDiv) {
      this.darkMode.toggleDarkMode(toggleDiv);
    }
    this.getClasses();
  }

  getClasses(): string {
    if (this.darkMode.getMode() == true) {
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
    if (this.darkMode.getMode() == true) {
      this.label = 'Light ☀️';
    } else {
      this.label = 'Dark 🌙';
    }
    return this.label;
  }
}
