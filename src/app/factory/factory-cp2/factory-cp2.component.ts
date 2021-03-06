import { Component, OnInit } from '@angular/core';
import {FactoryMain, FactoryService, SERVICE_COMPONENT_2} from '../factory.service';
import {ParentCpComponent} from '../parent-cp/parent-cp.component';

@Component({
  selector: 'app-factory-cp2',
  templateUrl: './factory-cp2.component.html',
  styleUrls: ['./factory-cp2.component.scss'],
  providers:[
    {
      provide: FactoryService,
      useFactory: FactoryMain,
      deps: [SERVICE_COMPONENT_2]
    }
  ]
})
export class FactoryCp2Component extends ParentCpComponent {
// export class FactoryCp2Component implements OnInit {

  // resultsCp2: any;
  // resultCustom: number = 0;
  // msgCommon: string = '';
  constructor(public factoryService: FactoryService) {
    super(factoryService);
  }

  // ngOnInit() {
  //   this.factoryService.seeResult$.subscribe((data) => {
  //     this.resultsCp2 = data;
  //   });
  // }
  //
  // customAction() {
  //   this.resultCustom = this.factoryService.customAction(6);
  // }
  //
  // commonAction() {
  //   this.msgCommon = this.factoryService.commonAction(20);
  // }

}
