export class TaskTodo {
  constructor(data) {
    this.assign(data);
  }

  private assign (data) {
    let _this = this;
    Object.assign(_this , data);
  }

  log() {
    console.log('TaskTodo');
    console.log(this);
  }
}
