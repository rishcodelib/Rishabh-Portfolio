import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertiComponent } from './certi.component';

describe('CertiComponent', () => {
  let component: CertiComponent;
  let fixture: ComponentFixture<CertiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
