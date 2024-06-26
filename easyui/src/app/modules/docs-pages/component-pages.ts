import { ButtonsPage } from '../../pages/docs/components/buttons/buttons.component';
import { ModalsPage } from '../../pages/docs/components/modals/modals.component';
import { BadgesPage } from '../../pages/docs/components/badges/badges.component';
import { DarkmodePage } from '../../pages/docs/components/darkmode/darkmode.component';
import { ColpageComponent } from '../../pages/docs/components/colpage/colpage.component';
import { RowpageComponent } from '../../pages/docs/components/rowpage/rowpage.component';
import { AccordionpageComponent } from '../../pages/docs/components/accordionpage/accordionpage.component';
import { CodeblockpageComponent } from '../../pages/docs/components/codeblockpage/codeblockpage.component';
import { ContainerpageComponent } from '../../pages/docs/components/containerpage/containerpage.component';
import { SectionpageComponent } from '../../pages/docs/components/sectionpage/sectionpage.component';
import { CopypageComponent } from '../../pages/docs/components/copypage/copypage.component';
import { GridpageComponent } from '../../pages/docs/components/gridpage/gridpage.component';
import { CardpageComponent } from '../../pages/docs/components/cardpage/cardpage.component';
import { ImgcardpageComponent } from '../../pages/docs/components/imgcardpage/imgcardpage.component';
import { ToastpageComponent } from '../../pages/docs/components/toastpage/toastpage.component';
import { Routes } from '@angular/router';
import { InputspageComponent } from '../../pages/docs/modules/inputspage/inputspage.component';

export const componentRoutes: Routes = [
  {
    title: 'Accordion',
    component: AccordionpageComponent,
    pathMatch: 'full',
    path: 'accordions',
  },
  {
    title: 'Badges',
    component: BadgesPage,
    pathMatch: 'full',
    path: 'badges',
  },
  {
    title: 'Buttons',
    component: ButtonsPage,
    pathMatch: 'full',
    path: 'buttons',
  },
  {
    title: 'Code Block',
    component: CodeblockpageComponent,
    pathMatch: 'full',
    path: 'codeblock',
  },
  {
    title: 'Col',
    component: ColpageComponent,
    pathMatch: 'full',
    path: 'col',
  },
  {
    title: 'Copy',
    component: CopypageComponent,
    pathMatch: 'full',
    path: 'copy',
  },
  {
    title: 'Container',
    component: ContainerpageComponent,
    pathMatch: 'full',
    path: 'container',
  },
  {
    title: 'Card',
    component: CardpageComponent,
    pathMatch: 'full',
    path: 'cardblock',
  },
  {
    title: 'Copy block',
    component: CopypageComponent,
    pathMatch: 'full',
    path: 'copyblock',
  },
  {
    title: 'Dark Mode',
    component: DarkmodePage,
    pathMatch: 'full',
    path: 'darkmode',
  },

  {
    title: 'Grid',
    component: GridpageComponent,
    pathMatch: 'full',
    path: 'grid',
  },
  {
    title: 'Image Card',
    component: ImgcardpageComponent,
    pathMatch: 'full',
    path: 'imgcard',
  },
  {
    title: 'Inputs',
    component: InputspageComponent,
    pathMatch: 'full',
    path: 'inputs',
  },

  {
    title: 'Modals',
    component: ModalsPage,
    pathMatch: 'full',
    path: 'modals',
  },
  {
    title: 'Row',
    component: RowpageComponent,
    pathMatch: 'full',
    path: 'row',
  },
  {
    title: 'Section',
    component: SectionpageComponent,
    pathMatch: 'full',
    path: 'section',
  },
  {
    title: 'Toast',
    component: ToastpageComponent,
    pathMatch: 'full',
    path: 'toast',
  },
];
