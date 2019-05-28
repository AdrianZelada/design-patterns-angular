import { Component, OnInit } from '@angular/core';
import {TaskData} from './tasks';
import {FactoryClass} from '../factory-class/factory-class';
import {ComunicationService} from '../comunication.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {

  listTask: Array<any> = [];
  current: any = {};
  constructor(private factory: FactoryClass, private comunicationService: ComunicationService) { }

  ngOnInit() {
    // const factory = new FactoryClass();
    this.listTask = TaskData.map((item) => {
      return this.factory.createItem(item.type, item);
    });

    this.comunicationService.data$.subscribe((data) => {
      this.current = data;
    })
  }

  details(item) {
    item.log();
  }

  changeData() {
    this.current.update({
      title: Date.now()
    });
  }

}
