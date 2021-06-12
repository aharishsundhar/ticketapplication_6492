import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddarchComponent } from './addarch.component';

describe('AddarchComponent', () => {
  let component: AddarchComponent;
  let fixture: ComponentFixture<AddarchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddarchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddarchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});