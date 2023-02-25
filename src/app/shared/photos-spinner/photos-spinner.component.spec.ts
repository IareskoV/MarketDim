import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosSpinnerComponent } from './photos-spinner.component';

describe('PhotosSpinnerComponent', () => {
  let component: PhotosSpinnerComponent;
  let fixture: ComponentFixture<PhotosSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
