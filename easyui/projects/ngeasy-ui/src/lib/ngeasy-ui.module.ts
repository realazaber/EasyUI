import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EuiButtonComponent } from './components/button/button.component';
import { EuiBadgeComponent } from './components/badge/badge.component';
import { EuiContainerComponent } from './components/container/container.component';
import { EuiSectionComponent } from './components/section/section.component';
import { EuiLayoutModule } from './modules/layout/layout.module';
import { EuiCardComponent } from './components/card/card.component';
import { EuiImgcardComponent } from './components/imgcard/imgcard.component';
import { EuiRowComponent } from './components/row/row.component';
import { EuiColComponent } from './components/col/col.component';
import { EuiGridComponent } from './components/grid/grid.component';
import { EuiDarkModeComponent } from './components/darkmode/darkmode.component';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EuiButtonComponent,
    EuiBadgeComponent,
    EuiCardComponent,
    EuiColComponent,
    EuiDarkModeComponent,
    EuiRowComponent,
    EuiImgcardComponent,
    EuiLayoutModule,
    EuiContainerComponent,
    EuiSectionComponent,
    EuiGridComponent,
  ],
  exports: [
    CommonModule,
    EuiButtonComponent,
    EuiBadgeComponent,
    EuiCardComponent,
    EuiColComponent,
    EuiDarkModeComponent,
    EuiRowComponent,
    EuiImgcardComponent,
    EuiLayoutModule,
    EuiContainerComponent,
    EuiSectionComponent,
    EuiGridComponent,
  ],
})
export class EasyUIModule {}
