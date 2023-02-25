import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { InvestitionsRoutingModule } from './investitions-routing.module';
import { InvestitionsComponent } from './investitions.component';

@NgModule({
  declarations: [InvestitionsComponent],
  imports: [CommonModule, InvestitionsRoutingModule, SharedModule],
})
export class InvestitionsModule {}
