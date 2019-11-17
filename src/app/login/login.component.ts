import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '@app/shared/services/authentication.service';
import { routerTransition } from '@app/router.animations';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl = `\dashboard`;
    error = '';
    // role Names
    roles: any = ['User', 'Owner', 'Subscriber'];

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

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || `/dashboard`;
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
                    console.log(data);
                    self.ngZone.run(() => {self.router.navigate([self.returnUrl], { relativeTo: this.route }); });
                },
                error => {
                    self.error = error;
                    self.loading = false;
                }
            );
    }
}
