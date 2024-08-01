import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDetComponent } from './profile-det/profile-det.component';
import { Routes } from '@angular/router';
import { AuthModuleModule } from '../auth-module/auth-module.module';
 
const auth: Routes = [
  
]


@NgModule({
  declarations: [
    ProfileDetComponent
  ],
  imports: [
    CommonModule,
    AuthModuleModule
  ],
  exports: [
    ProfileDetComponent
  ]
})
export class LoggingModule { }
