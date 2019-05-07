import {Injectable, InjectionToken} from '@angular/core';
import {Observable, Subject} from 'rxjs';
export const SERVICE_COMPONENT_1 = new InjectionToken<string>('SERVICE_COMPONENT_1');
export const SERVICE_COMPONENT_2 = new InjectionToken<string>('SERVICE_COMPONENT_2');


abstract class FactoryAbstract {
  abstract customAction(input: number): number;
  commonAction(input: number): string {
    return input > 100 ? 'Es Mayor a 100' : 'Es Menor que 100';
  }
}

@Injectable({
  providedIn: 'root'
})
export class FactoryService extends FactoryAbstract{

  seeResult: Subject<any> = new Subject();
  seeResult$: Observable<any> = this.seeResult.asObservable();
  constructor() {
    super();
  }

  customAction(input: number): number{
    return input;
  }
}


export function FactoryMain(serviceName) {
  switch (serviceName) {
    case 'SERVICE_COMPONENT_1':
      return new ServiceComponent1();
      break;
    case 'SERVICE_COMPONENT_2':
      return new ServiceComponent2();
      break;
  }
}


export class ServiceComponent1 extends FactoryService{

  constructor() {
    super();
  }

  customAction(input: number) {
    const r = input * 6;
    this.seeResult.next(r);
    return r;
  }
}

export class ServiceComponent2 extends FactoryService{

  constructor() {
    super();
  }

  customAction(input: number) {
    const r = input + 54;
    this.seeResult.next(r);
    return r;
  }
}
