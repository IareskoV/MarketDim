import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestitionsComponent } from './investitions.component';

const routes: Routes = [{ path: '', component: InvestitionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestitionsRoutingModule {}
