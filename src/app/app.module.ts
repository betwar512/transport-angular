import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppMaterialModule } from 'src/app/material.module';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { PersonDto } from 'src/app/modeldtos/PersonDto';
import { ClientFormComponent } from 'src/app/layout/ui-componenets/client-form/client-form.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UploadServiceService } from './services/upload-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomHttpInterceptor } from './CustomHttpInterceptor';
import { AddressFormComponent } from './layout/ui-componenets/address-form/address-form.component';
import { AddressAutoCompleteComponent } from 'src/app/layout/ui-componenets/address-form/AddressAutoComplete.component';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { AddressDto } from 'src/app/modeldtos/AddressDto';
import { RequestDto } from 'src/app/modeldtos/RequestDto';
import { MainApiService } from 'src/app/services/main-api.service';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { MainPageComponent } from 'src/app/pages/main-page/main-page.component';
import { LoginPageComponent } from 'src/app/pages/login-page/login-page.component';
import { AuthGuard } from './services/auth/auth.gard';
import { LoginDto } from './services/auth/loginDto';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientFormComponent,
    AddressFormComponent,
    AddressAutoCompleteComponent,
    MainPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
     PersonDto,
     RequestDto,
     AddressDto,
     UploadServiceService,
     MainApiService,
     AuthGuard,
     LoginDto,
     {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true,
    }
    ],
  bootstrap: [AppComponent]
})

export class AppModule {}

