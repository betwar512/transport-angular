import { Component, OnInit } from '@angular/core';
import { AddressDto } from 'src/app/modeldtos/AddressDto';
import { APPCONFIG } from 'src/app/MainAppConfig';
import { PersonDto } from 'src/app/modeldtos/PersonDto';
import { MainApiService } from 'src/app/services/main-api.service';
import { RequestDto } from '../../modeldtos/RequestDto';
import { UploadClientBody } from '../../modeldtos/UploadClientBody';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

    public AppConfig: any;
  
   
  
  
    clientAddressTitle = 'Client Address';
    clientForTitle= 'Client Details';
    clientNoKTitle = 'Next of kin';
    clientNoKAddressTitle = 'Next of kin Address';

    clientSubTitle = 'Enter your client information here';
    clientNokSubTitle = 'Enter your client emergency contact ';
  
  
    ngOnInit(): void {
      this.AppConfig = APPCONFIG;
      this.client.firstName = 'test 1';
      this.nok.firstName = 'test 2';
    }
  
    constructor(public client: PersonDto,public nok:PersonDto ,
       public mainService:MainApiService,  public clientAddress: AddressDto,
      public nokAddress: AddressDto) {
      
    }
  
    submit(){

        let req:RequestDto = new RequestDto();

       let body = new UploadClientBody();
       body.client = this.client;
       body.clientAddress = this.clientAddress;
       body.contactPerson = this.nok;
       body.contactAddress = this.nokAddress;
       req.body = body;
      //TODO send to server 
      this.mainService.postClientDetails(req).subscribe(
        result => {

          console.log(result);
        }, error =>{ 
          console.log(error);
      })
      console.log('worked');
    
  
    }
  }