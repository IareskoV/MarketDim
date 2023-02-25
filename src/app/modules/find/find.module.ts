import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindRoutingModule } from './find-routing.module';
import { InvestorComponent } from './investor/investor.component';
import { MoreComponent } from './more/more.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DoneComponent } from './done/done.component';

@NgModule({
  declarations: [InvestorComponent, MoreComponent, DoneComponent],
  imports: [CommonModule, FindRoutingModule, SharedModule],
})
export class FindModule {}
