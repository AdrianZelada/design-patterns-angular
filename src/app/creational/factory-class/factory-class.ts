import {TaskTodo} from './task';
import {EventTodo} from './event';
import {NoteTodo} from './note';
import {Injectable} from '@angular/core';
import {ComunicationService} from '../comunication.service';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class FactoryClass {
  constructor(private comunicationService: ComunicationService) {}
  createItem(type, data) {
    let item;
    switch (type) {
      case 'task':
        item = new TaskTodo(data, this.comunicationService);
        break;
      case 'event':
        item = new EventTodo(data, this.comunicationService);
        break;
      case 'note':
        item = new NoteTodo(data, this.comunicationService);
        break;
    }
    return item;
  }
}
