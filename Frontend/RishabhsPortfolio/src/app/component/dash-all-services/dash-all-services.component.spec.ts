import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAllServicesComponent } from './dash-all-services.component';

describe('DashAllServicesComponent', () => {
  let component: DashAllServicesComponent;
  let fixture: ComponentFixture<DashAllServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashAllServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashAllServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
