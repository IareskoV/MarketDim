import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotosSpinnerComponent } from './photos-spinner/photos-spinner.component';
import { FooterComponent } from './footer/footer.component';
import { PhotoComponent } from './photo/photo.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { OfficeCardComponent } from './office-card/office-card.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { HouseCardComponent } from './house-card/house-card.component';
import { FilterComponent } from './filter/filter.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PhotosComponent,
    PhotosSpinnerComponent,
    FooterComponent,
    PhotoComponent,
    ContactCardComponent,
    OfficeCardComponent,
    ProjectCardComponent,
    JoinUsComponent,
    HouseCardComponent,
    FilterComponent,
    ContactUsComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    PhotosComponent,
    PhotosSpinnerComponent,
    FooterComponent,
    PhotoComponent,
  ],
})
export class SharedModule {}
