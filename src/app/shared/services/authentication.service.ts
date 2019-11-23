import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { User } from 'src/app/_models/user';
import * as jwt_decode from 'jwt-decode';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    public currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(new User());
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string, roleText: string) {
        const userData = 'username=' + username + '&password=' + password + '&grant_type=password&role=' + roleText;
        const reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic MDk5MTUzYzI2MjUxNDliYzhlY2IzZTg1ZTAzZjAwMjI6ZGIzT0lzaitCWEU5TlpEeTB0OFczVGNOZWtyRisyZC8xc0ZuV0c0SG5WOFRaWTMwaVRPZHRWV0pHOGFiV3ZCMUdsT2dKdVFaZGNGMkx1cW0vaGNjTXc9PQ=='});

        return this.http.post(`${environment.identityApiUrl}/oauth2/token`, userData, { headers: reqHeader })
            .pipe(map(res => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('jwt', res['access_token']);
                const decoded = jwt_decode(res['access_token']);
                console.log(decoded);
                const currentUser = {
                    username: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
                    id: decoded['UserId']} as User;
                this.currentUserSubject.next(currentUser);
                return res;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('jwt');
        this.currentUserSubject.next(null);
    }
}
