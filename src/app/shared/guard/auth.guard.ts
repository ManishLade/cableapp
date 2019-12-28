import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authenticationService: AuthenticationService) {}

    canActivate() {
        console.log(this.authenticationService.currentUserValue);
        if (localStorage.getItem('jwt')) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
