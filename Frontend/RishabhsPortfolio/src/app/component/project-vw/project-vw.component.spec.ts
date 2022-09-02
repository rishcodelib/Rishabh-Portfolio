import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectVWComponent } from './project-vw.component';

describe('ProjectVWComponent', () => {
  let component: ProjectVWComponent;
  let fixture: ComponentFixture<ProjectVWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectVWComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectVWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
