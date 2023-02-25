import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousesRoutingModule } from './houses-routing.module';
import { HouseComponent } from './house/house.component';
import { ApartmentComponent } from './apartment/apartment.component';
import { AllComponent } from './all/all.component';
import { VillaComponent } from './villa/villa.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HouseComponent,
    ApartmentComponent,
    AllComponent,
    VillaComponent,
  ],
  imports: [CommonModule, HousesRoutingModule, SharedModule],
})
export class HousesModule {}
