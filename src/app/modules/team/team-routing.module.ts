import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { PersonFullComponent } from './person-full/person-full.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  { path: '', component: AllComponent },
  { path: 'full', component: PersonFullComponent },
  { path: 'person', component: PersonComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamRoutingModule {}
