import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsAlertComponent } from './bs-alert.component';

describe('BsAlertComponent', () => {
  let component: BsAlertComponent;
  let fixture: ComponentFixture<BsAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
