import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarpatsComponent } from './carpats.component';

const routes: Routes = [{ path: '', component: CarpatsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarpatsRoutingModule {}
