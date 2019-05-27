import {TaskTodo} from './task';
import {EventTodo} from './event';
import {NoteTodo} from './note';

export class FactoryClass {
  constructor() {}
  createItem(type, data) {
    let item;
    switch (type) {
      case 'task':
        item = new TaskTodo(data);
        break;
      case 'event':
        item = new EventTodo(data);
        break;
      case 'note':
        item = new NoteTodo(data);
        break;
    }
    return item;
  }
}
