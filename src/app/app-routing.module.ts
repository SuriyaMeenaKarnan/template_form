import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ProfileDetComponent } from './logging/profile-det/profile-det.component';
import { LoginComponent } from './auth-module/login/login.component';
import { TabledataComponent } from './tabledata/tabledata.component';
import { MultipleSelectinMenuComponent } from './multiple-selectin-menu/multiple-selectin-menu.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

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
  },
  {
    path: 'tableData',
    component: TabledataComponent
  },
  {
    path: 'selectInMenu',
    component: MultipleSelectinMenuComponent
  },
  {
    path: 'dynamic-form',
    component: DynamicFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
