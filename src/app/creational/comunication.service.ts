import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {
  private data: Subject<any> = new Subject<any>();
  public data$: Observable<any> = this.data.asObservable();
  constructor() { }

  setData(item) {
    this.data.next(item);
  }
}
