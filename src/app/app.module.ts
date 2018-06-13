import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AppMaterialModule } from 'src/app/material.module';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { ClientDto } from 'src/app/modeldtos/ClientDto';
import { ClientFormComponent } from 'src/app/layout/ui-componenets/client-form/client-form.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UploadServiceService } from './services/upload-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomHttpInterceptor } from './CustomHttpInterceptor';
import { AddressFormComponent } from './layout/address-form/address-form.component';
import { AddressAutoCompleteComponent } from 'src/app/layout/address-form/AddressAutoComplete.component';
import {AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    ClientFormComponent,
    AddressFormComponent,
    AddressAutoCompleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: '',
      libraries: ['places']
    }),
  ],
  providers: [
     ClientDto,
     UploadServiceService,
     {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true,
    }
    ],
  bootstrap: [AppComponent]
})

export class AppModule {}

