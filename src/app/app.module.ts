import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
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


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    FooterComponent,
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
    FormsModule
  ],
  providers: [
     PersonDto,
     RequestDto,
     AddressDto,
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

