import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryCp2Component } from './factory-cp2.component';

describe('FactoryCp2Component', () => {
  let component: FactoryCp2Component;
  let fixture: ComponentFixture<FactoryCp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactoryCp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryCp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
