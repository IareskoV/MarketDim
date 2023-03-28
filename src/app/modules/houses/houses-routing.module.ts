import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseComponent } from './house/house.component';
import { VillaComponent } from './villa/villa.component';

const routes: Routes = [
  { path: 'villa', component: VillaComponent },
  { path: 'franco', component: HouseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HousesRoutingModule {}
