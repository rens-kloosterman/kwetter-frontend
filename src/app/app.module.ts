import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { TweetsComponent } from './tweets/tweets.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthModule } from "@auth0/auth0-angular";
import { TestAuthComponent } from './test-auth/test-auth.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    TweetsComponent,
    HomeComponent,
    LogoutComponent,
    TestAuthComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AuthModule.forRoot({
      domain: 'dev-f32d4z1k.us.auth0.com',
      clientId: 'DLTTSJAXkWWN3qhLWcXWXCQhDUeBCTDc'
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
