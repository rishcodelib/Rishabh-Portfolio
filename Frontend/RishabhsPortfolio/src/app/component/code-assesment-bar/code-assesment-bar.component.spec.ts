import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeAssesmentBarComponent } from './code-assesment-bar.component';

describe('CodeAssesmentBarComponent', () => {
  let component: CodeAssesmentBarComponent;
  let fixture: ComponentFixture<CodeAssesmentBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeAssesmentBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeAssesmentBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
