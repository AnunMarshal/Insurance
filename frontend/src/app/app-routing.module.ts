import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { InsuranceCreateComponent } from './modules/insurance/insurance-create/insurance-create.component';
import { AuthGuard } from './auth/auth.guard';
import { InsuranceComponent } from './modules/insurance/insurance.component';
import { InsuranceShowComponent } from './modules/insurance/insurance-show/insurance-show.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'insurances',
        component: InsuranceComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'insurance/new',
        component: InsuranceCreateComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'insurance/show/:id',
        component: InsuranceShowComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'insurance/:id/edit',
        component: InsuranceCreateComponent,
        canActivate: [AuthGuard]
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
