import { Injectable, Optional, Inject } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

import { AuthenticationService } from '../services/authentication.service';
import { User } from '@app/_models/user';
import * as _ from 'lodash';

@Injectable({
    providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const token = localStorage.getItem('jwt');

        console.log(token);
        if (!_.isNil(token)) {
            const decoded = jwt_decode(token);
            console.log(decoded);
            const currentUser = {
                username:
                    decoded[
                        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
                    ],
                id: decoded['UserId']
            } as User;
            this.authenticationService.currentUserSubject.next(currentUser);
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        return next.handle(request);
    }
}
