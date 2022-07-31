import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';
const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }
  signIn(user: User): Observable<any> {
    console.log(user);
    return this.http.post(`${API_URL}/api/users/sign-in`, user);
  }
}
