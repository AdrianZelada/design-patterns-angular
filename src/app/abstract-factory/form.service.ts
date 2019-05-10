import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
// import {AbstractFactory} from './abstract-factory';


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

@Injectable({
  providedIn: 'root'
})
export class FormService extends AbstractFactory {

  seeResult: Subject<any> = new Subject();
  seeResult$: Observable<any> = this.seeResult.asObservable();
  constructor() {
    super();
  }

  send(data: any): Observable<any> {
    return of(data);
  }
}
