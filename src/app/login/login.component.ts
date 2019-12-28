import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '@app/shared/services/authentication.service';
import { routerTransition } from '@app/router.animations';
import { User } from '@app/_models/user';
import * as _ from 'lodash';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl = '/SelectLoginFranchise';
    error = '';
    // role Names
    roles: any = ['User', 'Owner', 'Subscriber'];
    currentUser: User;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private ngZone: NgZone,
        private authenticationService: AuthenticationService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            role: ['', [Validators.required]]
        });
        this.f.role.setValue(this.roles[0]);
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/SelectLoginFranchise';
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.loginForm.controls;
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        const self = this;
        self.authenticationService
            .login(self.f.username.value, self.f.password.value, self.f.role.value)
            .pipe(first())
            .subscribe(
                data => {
                    self.currentUser = self.authenticationService.currentUserValue;
                    let isInRole = false;
                    if (_.isArray(self.currentUser.roles)) {
                        isInRole = _.includes(self.currentUser.roles, self.f.role.value);
                    } else {
                        isInRole = _.isEqual(self.currentUser.roles, self.f.role.value);
                    }
                    self.currentUser.role = self.f.role.value;
                    self.authenticationService.currentUserSubject.next(self.currentUser);
                    // console.log(self.authenticationService.currentUserValue());
                    if (isInRole) {
                        self.ngZone.run(() => { self.router.navigate([self.returnUrl],
                             { relativeTo: this.route }); });
                    }
                },
                error => {
                    self.error = error['error']['error_description'];
                    self.loading = false;
                }
            );
    }

    roleChange(event) {
        if (event.target.value === 'Owner') {
            this.returnUrl = '/dashboard';
        } else if (event.target.value === 'User') {
            this.returnUrl = '/SelectLoginFranchise';
        }
    }
}
