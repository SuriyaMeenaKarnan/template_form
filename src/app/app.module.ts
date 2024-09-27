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
import { TabledataComponent } from './tabledata/tabledata.component';
import { HttpClientModule } from '@angular/common/http';
import { FileExportService } from './file-export.service';
import { ExportAsModule } from 'ngx-export-as';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MultipleSelectinMenuComponent } from './multiple-selectin-menu/multiple-selectin-menu.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    TabledataComponent,
    MultipleSelectinMenuComponent,
    DynamicFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModuleModule,
    LoggingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    ExportAsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
  ],
  exports: [
    TemplateFormComponent,
    ReactiveFormComponent,
    AppComponent
  ],
  providers: [AuthService, CommonServiceService,FileExportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
