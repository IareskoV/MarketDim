import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpatsComponent } from './carpats.component';

describe('CarpatsComponent', () => {
  let component: CarpatsComponent;
  let fixture: ComponentFixture<CarpatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarpatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
