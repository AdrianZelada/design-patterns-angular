import { Component, OnInit } from '@angular/core';
import {FactoryService} from '../factory.service';

@Component({
  selector: 'app-parent-cp',
  templateUrl: './parent-cp.component.html',
  styleUrls: ['./parent-cp.component.scss']
})
export class ParentCpComponent implements OnInit {

  resultsSubscribe: any;
  resultCustom: number = 0;
  msgCommon: string = '';
  constructor(private factoryService: FactoryService) { }

  ngOnInit() {
    this.factoryService.seeResult$.subscribe((data) => {
      this.resultsSubscribe = data;
    });
  }

  customAction() {
    this.resultCustom = this.factoryService.customAction(6);
  }

  commonAction() {
    this.msgCommon = this.factoryService.commonAction(20);
  }
}
