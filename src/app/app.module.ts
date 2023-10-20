import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';

import {GoogleLoginProvider, GoogleSigninButtonModule, SocialLoginModule} from '@abacritt/angularx-social-login';
import {environment} from "../environments/environment";
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    GoogleSigninButtonModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.clientId)
          },
        ]
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
