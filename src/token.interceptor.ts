import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authData = JSON.parse(localStorage.getItem('auth'));
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ` + (authData ?  authData.token : '')
            }
        });
        return next.handle(request);
    }
}
