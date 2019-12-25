import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Authentication Components
import { LoginComponent } from './_components/authentication/login/login.component';
import { RegisterComponent } from './_components/authentication/register/register.component';
import { ForgotPasswordComponent } from './_components/authentication/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './_components/authentication/change-password/change-password.component';
import { ResetPasswordComponent } from './_components/authentication/reset-password/reset-password.component';
// System Components
import { DashboardComponent } from './_components/system/dashboard/dashboard.component';
import { UserComponent } from './_components/system/user/user.component';
import { SystemRequestComponent } from './_components/system/system-request/system-request.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', data: { title: 'Login Component' }, pathMatch: 'full' },
  {
    path: 'login', component: LoginComponent, data: { title: 'Login Component' },
    children: [
      { path: '', component: LoginComponent }
    ]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'request',
    component: SystemRequestComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
