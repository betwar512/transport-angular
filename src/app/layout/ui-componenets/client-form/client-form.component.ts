import { Component, OnInit, Input } from '@angular/core';
import { PersonDto } from 'src/app/modeldtos/PersonDto';



@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  @Input() public client: PersonDto;
  @Input() public formTitle: string = "Title";
  @Input() public subTitle: string = '';
  startDate = new Date(1965, 0, 1);

  constructor() { }

  ngOnInit() {
    console.log(this.client);
  }


}
