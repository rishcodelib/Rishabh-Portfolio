import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechDividerComponent } from './tech-divider.component';

describe('TechDividerComponent', () => {
  let component: TechDividerComponent;
  let fixture: ComponentFixture<TechDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechDividerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
