import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AuthModuleModule } from './auth-module/auth-module.module';
import { LoggingModule } from './logging/logging.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './auth-module/authService/auth.service';
import { CommonServiceService } from './common/common-service.service';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModuleModule,
    LoggingModule,
    BrowserAnimationsModule
  ],
  exports: [
    TemplateFormComponent,
    ReactiveFormComponent,
    AppComponent
  ],
  providers: [AuthService, CommonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
