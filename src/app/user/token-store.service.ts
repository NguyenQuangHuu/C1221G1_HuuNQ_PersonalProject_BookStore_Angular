import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStoreService {

  constructor() { }

  getObjectToken(): any {
    if (sessionStorage.getItem('h0m3m3m3') !== null) {
      return JSON.parse(sessionStorage.getItem('h0m3m3m3'));
    }
    return '';
  }

  setToken(value: any): void {
    sessionStorage.setItem('h0m3m3m3', JSON.stringify(value));
  }

  getUser(): string {
    return this.getObjectToken().username;
  }

  logOut(): void {
    sessionStorage.removeItem('h0m3m3m3');
  }
}
