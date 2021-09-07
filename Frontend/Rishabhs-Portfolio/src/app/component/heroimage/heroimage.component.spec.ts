import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroimageComponent } from './heroimage.component';

describe('HeroimageComponent', () => {
  let component: HeroimageComponent;
  let fixture: ComponentFixture<HeroimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
