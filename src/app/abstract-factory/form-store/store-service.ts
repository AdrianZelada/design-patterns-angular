import {FormService} from '../form.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StoreService extends FormService {
  constructor(private http: HttpClient) {
    super();
  }


  send(data: any): Observable<any> {
    return this.http.post('http://localhost:3400/store', data)
  }
}
