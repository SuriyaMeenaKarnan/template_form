import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ProfileDetComponent } from './logging/profile-det/profile-det.component';
import { LoginComponent } from './auth-module/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'template-form',
    pathMatch: 'full'
  },
  {
    path: 'template-form',
    component: TemplateFormComponent
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileDetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
