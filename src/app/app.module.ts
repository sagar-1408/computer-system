import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_components/authentication/login/login.component';
import { RegisterComponent } from './_components/authentication/register/register.component';
import { ForgotPasswordComponent } from './_components/authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './_components/authentication/reset-password/reset-password.component';
import { ChangePasswordComponent } from './_components/authentication/change-password/change-password.component';
import { HeaderComponent } from './_components/navigation/header/header.component';
import { FooterComponent } from './_components/navigation/footer/footer.component';
import { UserComponent } from './_components/system/user/user.component';
import { DashboardComponent } from './_components/system/dashboard/dashboard.component';
import { SystemRequestComponent } from './_components/system/system-request/system-request.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    DashboardComponent,
    SystemRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
