import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';

abstract class AbstractFactory {
  constructor() {}
  abstract send(data: any): Observable<any>;
  parseJson(data: any): any {
    const response = {};
    if (data) {
      for (const key in data) {
        if ((data[key] !== null) || (data[key] !== '')) {
          response[key] = data[key];
        }
      }
    }
    return response;
  }
}

@Injectable()
export class FormService extends AbstractFactory {

  seeResult: Subject<any> = new Subject();
  seeResult$: Observable<any> = this.seeResult.asObservable();
  constructor() {
    super();
  }

  send(data: any): Observable<any> {
    console.log('FormService');
    return of(data);
  }
}
