import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryMainComponent } from './factory-main.component';

describe('FactoryMainComponent', () => {
  let component: FactoryMainComponent;
  let fixture: ComponentFixture<FactoryMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactoryMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
