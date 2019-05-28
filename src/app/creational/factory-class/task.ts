import {ComunicationService} from '../comunication.service';

export class TaskTodo {
  constructor(data, private comunicationService: ComunicationService) {
    this.assign(data);
  }

  private assign (data) {
    let _this = this;
    Object.assign(_this , data);
  }

  log() {
    console.log('TaskTodo');
    console.log(this);
    this.comunicationService.setData(this);
  }

  update(data) {
    let _this = this;
    console.log('TaskTodo');
    Object.assign(_this, data);
  }
}
