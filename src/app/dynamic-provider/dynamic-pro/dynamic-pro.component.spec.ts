import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicProComponent } from './dynamic-pro.component';

describe('DynamicProComponent', () => {
  let component: DynamicProComponent;
  let fixture: ComponentFixture<DynamicProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
