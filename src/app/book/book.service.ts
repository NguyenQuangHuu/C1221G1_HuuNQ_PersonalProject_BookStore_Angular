import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';
const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  getAllBook(name: string, page: number, sort: string, type: 'desc'): Observable<Book[]> {
    return this.http.get<Book[]>(`${API_URL}/api/books?name=${name}&page=${page}&sort=${sort},${type}`);
  }

  getBookById(id: string): Observable<Book> {
    return this.http.get(`${API_URL}/api/books/${id}`);
  }
}
