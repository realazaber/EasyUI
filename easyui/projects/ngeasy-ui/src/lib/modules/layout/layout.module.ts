import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EuiSectionComponent } from '../../components/section/section.component';
import { EuiContainerComponent } from '../../components/container/container.component';

@NgModule({
  declarations: [],
  imports: [EuiSectionComponent, EuiContainerComponent, CommonModule],
  exports: [EuiSectionComponent, EuiContainerComponent, CommonModule],
})
export class EuiLayoutModule {}
