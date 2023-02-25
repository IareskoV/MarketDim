import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { AllComponent } from './all/all.component';
import { PersonComponent } from './person/person.component';
import { PersonFullComponent } from './person-full/person-full.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AllComponent, PersonComponent, PersonFullComponent],
  imports: [CommonModule, TeamRoutingModule, SharedModule],
})
export class TeamModule {}
