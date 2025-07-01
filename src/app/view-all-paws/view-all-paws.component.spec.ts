import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllPawsComponent } from './view-all-paws.component';

describe('ViewAllPawsComponent', () => {
  let component: ViewAllPawsComponent;
  let fixture: ComponentFixture<ViewAllPawsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllPawsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllPawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
