import {FormService} from '../form.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export class StoreService extends FormService {
  constructor(private http: HttpClient) {
    super();
  }

  send(data: any): Observable<any> {
    console.log('StoreService');
    return super.send(data);
  }
}
