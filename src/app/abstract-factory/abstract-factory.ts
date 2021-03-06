import {InjectionToken} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from './form-user/user-service';
import {StoreService} from './form-store/store-service';
import {FormService} from './form.service';
export const USER_SERVICE = new InjectionToken<any>('USER SERVICE');
export const STORE_SERVICE = new InjectionToken<string>('STORE_SERVICE');

export function AbstractFactoryMain(ServiceName, http: HttpClient): FormService {
  switch (ServiceName) {
    case 'USER_SERVICE':
      return new UserService(http);
      break;
    case 'STORE_SERVICE':
      return new StoreService(http);
      break;
  }
}
