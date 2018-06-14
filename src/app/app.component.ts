import { Component, OnInit } from '@angular/core';
import { PersonDto } from './modeldtos/PersonDto';
import { APPCONFIG } from 'src/app/MainAppConfig';
import { AddressDto } from './modeldtos/AddressDto';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public AppConfig: any;

  public clientAddress: AddressDto;
  public nokAddress: AddressDto;


  clientAddressTitle = 'Client Address';
  clientForTitle= 'Client Details';
  clientNoKTitle = 'Next of kin';
  clientNoKAddressTitle = 'Next of kin Address';


  ngOnInit(): void {
    this.AppConfig = APPCONFIG;
  }

  constructor(public client: PersonDto,public nok:PersonDto) {
    client = new PersonDto();
       nok = new PersonDto();
  }

  submit(){
    //TODO send to server 
    console.log('worked');
  }

}
