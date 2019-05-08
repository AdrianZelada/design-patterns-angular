import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactoryMainComponent } from './factory-main/factory-main.component';
import { FactoryCp1Component } from './factory-cp1/factory-cp1.component';
import { FactoryCp2Component } from './factory-cp2/factory-cp2.component';
import {FactoryRoutingModule} from './factory-routing.module';
import {SERVICE_COMPONENT_1, SERVICE_COMPONENT_2} from './factory.service';
import { ParentCpComponent } from './parent-cp/parent-cp.component';

@NgModule({
  declarations: [FactoryMainComponent, FactoryCp1Component, FactoryCp2Component, ParentCpComponent],
  imports: [
    CommonModule,
    FactoryRoutingModule
  ],
  providers: [
    {
      provide: SERVICE_COMPONENT_1, useValue: 'SERVICE_COMPONENT_1'
    },
    {
      provide: SERVICE_COMPONENT_2, useValue: 'SERVICE_COMPONENT_2'
    }
  ]
})
export class FactoryModule { }
