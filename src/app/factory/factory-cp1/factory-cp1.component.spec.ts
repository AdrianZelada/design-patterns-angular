import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryCp1Component } from './factory-cp1.component';

describe('FactoryCp1Component', () => {
  let component: FactoryCp1Component;
  let fixture: ComponentFixture<FactoryCp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactoryCp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryCp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
