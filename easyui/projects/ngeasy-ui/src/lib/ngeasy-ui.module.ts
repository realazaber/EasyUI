import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EuiButtonComponent } from './components/button/button.component';
import { EuiBadgeComponent } from './components/badge/badge.component';
import { EuiContainerComponent } from './components/container/container.component';
import { EuiSectionComponent } from './components/section/section.component';
import { EuiLayoutModule } from './modules/layout/layout.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EuiButtonComponent,
    EuiBadgeComponent,
    EuiLayoutModule,
    EuiContainerComponent,
    EuiSectionComponent,
  ],
  exports: [
    CommonModule,
    EuiButtonComponent,
    EuiBadgeComponent,
    EuiLayoutModule,
    EuiContainerComponent,
    EuiSectionComponent,
  ],
})
export class EasyUIModule {}
