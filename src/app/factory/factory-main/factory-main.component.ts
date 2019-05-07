import { Component, OnInit } from '@angular/core';
import {FactoryService} from '../factory.service';

@Component({
  selector: 'app-factory-main',
  templateUrl: './factory-main.component.html',
  styleUrls: ['./factory-main.component.scss']
})
export class FactoryMainComponent implements OnInit {

  results: any;
  constructor(private factoryService: FactoryService) { }

  ngOnInit() {
    this.factoryService.seeResult$.subscribe((data) => {
      this.results = data;
    });
  }

}
