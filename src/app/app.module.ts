import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';
import { JwtInterceptor } from './shared/interceptor/jwt.interceptor';
import { CoreModule } from './shared/interceptor/core.module';
import { httpInterceptorProviders } from './shared/interceptor';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { GlobalErrorHandler } from './shared/modules/error-handler/globalerror.handle';
import { Router } from '@angular/router';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        CoreModule,
        Ng4LoadingSpinnerModule.forRoot(),
    ],
    declarations: [AppComponent],
    providers: [AuthGuard, httpInterceptorProviders,
        {provide: ErrorHandler, useClass: GlobalErrorHandler}],
    bootstrap: [AppComponent]
})
export class AppModule {

    constructor(private readonly router: Router) {
        router.events
            .subscribe(console.log);
    }
}
