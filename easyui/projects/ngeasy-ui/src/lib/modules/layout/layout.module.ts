import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EuiSectionComponent } from '../../components/section/section.component';
import { EuiContainerComponent } from '../../components/container/container.component';
import { EuiColComponent } from '../../components/col/col.component';
import { EuiRowComponent } from '../../components/row/row.component';

@NgModule({
  declarations: [],
  imports: [
    EuiSectionComponent,
    EuiContainerComponent,
    EuiColComponent,
    EuiRowComponent,
    CommonModule,
  ],
  exports: [
    EuiSectionComponent,
    EuiContainerComponent,
    EuiColComponent,
    EuiRowComponent,
    CommonModule,
  ],
})
export class EuiLayoutModule {}
