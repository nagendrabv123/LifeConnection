import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPawComponent } from './view-paw.component';

describe('ViewPawComponent', () => {
  let component: ViewPawComponent;
  let fixture: ComponentFixture<ViewPawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
