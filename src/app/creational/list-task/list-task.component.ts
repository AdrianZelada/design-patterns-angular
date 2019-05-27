import { Component, OnInit } from '@angular/core';
import {TaskData} from './tasks';
import {FactoryClass} from '../factory-class/factory-class';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {

  listTask: Array<any> = []
  constructor() { }

  ngOnInit() {
    const factory = new FactoryClass();
    this.listTask = TaskData.map((item) => {
      return factory.createItem(item.type, item);
    });
  }

  details(item) {
    item.log();
  }

}
