import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {AbstractFactory} from './abstract-factory';

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
