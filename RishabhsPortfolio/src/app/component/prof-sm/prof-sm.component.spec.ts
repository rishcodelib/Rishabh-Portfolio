import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfSmComponent } from './prof-sm.component';

describe('ProfSmComponent', () => {
  let component: ProfSmComponent;
  let fixture: ComponentFixture<ProfSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfSmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
