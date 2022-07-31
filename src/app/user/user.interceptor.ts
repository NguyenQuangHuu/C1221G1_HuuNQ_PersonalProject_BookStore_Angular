import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenStoreService} from './token-store.service';

@Injectable()
export class UserInterceptor implements HttpInterceptor {
  token: any;
  user: any;
  constructor(private tokenService: TokenStoreService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let userRequest = request;
    this.token = this.tokenService.getObjectToken().token;
    if (this.token != null) {
      userRequest = request.clone({
        setHeaders: {
          Authorization : `Bearer ${this.token}`
        },
      });
    }
    return next.handle(userRequest);
  }
}
export const userInterceptor = [
  { provide: HTTP_INTERCEPTORS, useClass: UserInterceptor, multi: true }
];
