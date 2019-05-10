import { Component, OnInit } from '@angular/core';
import {FactoryMain, FactoryService, SERVICE_COMPONENT_1} from '../factory.service';
import {ParentCpComponent} from '../parent-cp/parent-cp.component';

@Component({
  selector: 'app-factory-cp1',
  templateUrl: './factory-cp1.component.html',
  styleUrls: ['./factory-cp1.component.scss'],
  providers: [
    {
      provide: FactoryService,
      useFactory: FactoryMain,
      deps: [SERVICE_COMPONENT_1]
    }
  ]
})
export class FactoryCp1Component extends ParentCpComponent {
  constructor(public factoryService: FactoryService) {
    super(factoryService);
  }
}
