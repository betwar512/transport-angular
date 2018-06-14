import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AuthGuard } from 'src/app/services/auth/auth.gard';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: MainPageComponent ,canActivate: [AuthGuard] },
    { path: 'login', component: LoginPageComponent },
  ];

  export const AppRoutingModule = RouterModule.forRoot(routes,{useHash:true});
