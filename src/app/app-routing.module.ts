import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeModule } from './components/home/home.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FbGaurdGuard } from './guards/fb-gaurd.guard';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    loadChildren:()=>import('./components/home/home.module').then(m => m.HomeModule),
    canActivate:[FbGaurdGuard]
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"signup",component:SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
