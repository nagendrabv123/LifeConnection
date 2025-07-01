import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PawServicesComponent } from './paw-services.component';

describe('PawServicesComponent', () => {
  let component: PawServicesComponent;
  let fixture: ComponentFixture<PawServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PawServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PawServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
