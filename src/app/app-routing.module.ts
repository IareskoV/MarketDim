import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'investitions',
    loadChildren: () =>
      import('./modules/investitions/investitions.module').then(
        (m) => m.InvestitionsModule
      ),
  },
  {
    path: 'carpats',
    loadChildren: () =>
      import('./modules/carpats/carpats.module').then((m) => m.CarpatsModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'catalog',
    loadChildren: () =>
      import('./modules/catalog/catalog.module').then((m) => m.CatalogModule),
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./modules/contacts/contacts.module').then(
        (m) => m.ContactsModule
      ),
  },
  {
    path: 'find',
    loadChildren: () =>
      import('./modules/find/find.module').then((m) => m.FindModule),
  },
  {
    path: 'investitions',
    loadChildren: () =>
      import('./modules/investitions/investitions.module').then(
        (m) => m.InvestitionsModule
      ),
  },
  {
    path: 'houses',
    loadChildren: () =>
      import('./modules/houses/houses.module').then((m) => m.HousesModule),
  },
  {
    path: 'team',
    loadChildren: () =>
      import('./modules/team/team.module').then((m) => m.TeamModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
