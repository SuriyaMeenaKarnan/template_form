import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const route:Routes =[
  {
    path: "login",
    component: LoginComponent
  }
]


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModuleModule { }
