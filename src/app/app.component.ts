import { Component, OnInit } from '@angular/core';
import { ClientDto } from './modeldtos/ClientDto';
import { APPCONFIG } from 'src/app/MainAppConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public AppConfig: any;
  ngOnInit(): void {
    this.AppConfig = APPCONFIG;
  }

  constructor(public client: ClientDto) {
    client = new ClientDto();
  }

}
