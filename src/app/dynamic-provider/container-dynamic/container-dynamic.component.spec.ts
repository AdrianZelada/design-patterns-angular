import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerDynamicComponent } from './container-dynamic.component';

describe('ContainerDynamicComponent', () => {
  let component: ContainerDynamicComponent;
  let fixture: ComponentFixture<ContainerDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
