export class NoteTodo {
  constructor(data) {
    this.assign(data);
  }

  private assign (data) {
    let _this = this;
    Object.assign(_this , data);
  }

  log() {
    console.log('NoteTodo');
    console.log(this);
  }
}
