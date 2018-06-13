import { Component, OnInit, Input } from '@angular/core';
import { ClientDto } from '../../modeldtos/ClientDto';


@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  @Input() public client: ClientDto;

  constructor() { }

  ngOnInit() {
  }


  onSubmit(){
    //TODO do something with client 
    console.log(this.client);
  }



}
