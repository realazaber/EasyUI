import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkmodeService {
  darkOn: WritableSignal<boolean> = signal(false);
  key: string = 'eui-darkmode';
  toggleDiv: any = null;
  constructor() {}

  toggleDarkMode(darkModeElement: HTMLElement): void {
    this.darkOn.set(!this.darkOn());

    if (darkModeElement) {
      if (this.darkOn()) {
        this.setDark(darkModeElement);
      } else {
        this.setLight(darkModeElement);
      }
    }
  }

  setDark(darkModeElement: HTMLElement): void {
    localStorage.setItem(this.key, 'dark');
    darkModeElement.classList.add('dark');
    darkModeElement.classList.remove('light');
  }

  setLight(darkModeElement: HTMLElement): void {
    localStorage.setItem(this.key, 'light');
    darkModeElement.classList.add('light');
    darkModeElement.classList.remove('dark');
  }

  isDark(): boolean {
    const lStorage: string | null = localStorage.getItem(this.key);
    if (lStorage == null) {
      return false;
    }
    if (lStorage == 'dark') {
      return true;
    } else {
      return false;
    }
  }
}
