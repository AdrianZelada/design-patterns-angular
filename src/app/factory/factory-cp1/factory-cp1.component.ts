import { Component, OnInit } from '@angular/core';
import {FactoryMain, FactoryService, SERVICE_COMPONENT_1} from '../factory.service';

@Component({
  selector: 'app-factory-cp1',
  templateUrl: './factory-cp1.component.html',
  styleUrls: ['./factory-cp1.component.scss'],
  providers:[
    {
      provide: FactoryService,
      useFactory: FactoryMain,
      deps: [SERVICE_COMPONENT_1]
    }
  ]
})
export class FactoryCp1Component implements OnInit {
  resultsCp1: any;
  resultCustom: number = 0;
  msgCommon: string = '';
  constructor(private factoryService: FactoryService) { }

  ngOnInit() {
    this.factoryService.seeResult$.subscribe((data) => {
      this.resultsCp1 = data;
    });
  }

  customAction() {
    this.resultCustom = this.factoryService.customAction(6);
  }

  commonAction() {
    this.msgCommon = this.factoryService.commonAction(20);
  }
}
