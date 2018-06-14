import { Component, OnInit } from '@angular/core';
import { APPCONFIG } from 'src/app/MainAppConfig';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
    public AppConfig: any;

    ngOnInit() {
        this.AppConfig = APPCONFIG;
    }

}
