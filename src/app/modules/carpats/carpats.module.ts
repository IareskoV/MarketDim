import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarpatsRoutingModule } from './carpats-routing.module';
import { CarpatsComponent } from './carpats.component';

@NgModule({
  declarations: [CarpatsComponent],
  imports: [CommonModule, CarpatsRoutingModule, SharedModule],
})
export class CarpatsModule {}
