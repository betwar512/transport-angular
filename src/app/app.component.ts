import { Component } from '@angular/core';
import { ClientDto } from './modeldtos/ClientDto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  ;

  title = 'transport-external-project';

  constructor(public client : ClientDto){
    client = new ClientDto();
  }

}
