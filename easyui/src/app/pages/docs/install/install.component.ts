import { Component } from '@angular/core';
import { EasyUIModule } from 'ngeasy-ui';
import { SeperatorComponent } from '../../../components/seperator/seperator.component';

@Component({
  selector: 'app-install',
  standalone: true,
  imports: [EasyUIModule, SeperatorComponent],
  templateUrl: './install.component.html',
  styles: ``,
})
export class InstallPage {
  codes: string[] = [
    `npm install -D tailwindcss postcss autoprefixer`,
    `npx tailwindcss init`,
    `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "Primary hex",
        secondary: "Secondary hex",
        accent: "Accent hex",
      }
    },
  },
  plugins: [],
}`,
    `@tailwind base;
@tailwind components;
@tailwind utilities;`,
    `npm i @azaber/ngeasy-ui`,
    `import { EasyUIModule } from '@azaber/ngeasy-ui';`,
  ];
}
