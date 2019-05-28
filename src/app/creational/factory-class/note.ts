import {ComunicationService} from '../comunication.service';

export class NoteTodo {
  constructor(data, private comunicationService: ComunicationService) {
    this.assign(data);
  }

  private assign (data) {
    let _this = this;
    Object.assign(_this , data);
  }

  log() {
    console.log('NoteTodo');
    console.log(this);
    this.comunicationService.setData(this);
  }

  update(data) {
    let _this = this;
    console.log('NoteTodo');
    Object.assign(_this, data);
  }
}
