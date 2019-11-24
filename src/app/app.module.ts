import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
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
    providers: [AuthGuard, httpInterceptorProviders],
    bootstrap: [AppComponent]
})
export class AppModule {}
