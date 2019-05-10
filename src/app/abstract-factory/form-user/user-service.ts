import {FormService} from '../form.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
// import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService extends FormService {
  constructor(public http: HttpClient) {
    super();
  }

  send(data: any): Observable<any> {
    return this.http.post('http://localhost:3400/user', data);
  }
}
