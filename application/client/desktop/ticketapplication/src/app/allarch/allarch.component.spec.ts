import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllarchComponent } from './allarch.component';

describe('AllarchComponent', () => {
  let component: AllarchComponent;
  let fixture: ComponentFixture<AllarchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllarchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllarchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});