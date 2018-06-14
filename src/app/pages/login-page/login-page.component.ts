import { Component, OnInit } from '@angular/core';
import { MainApiService } from '../../services/main-api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public username: string;
  public password: string;

  constructor(public loginService: MainApiService) { }

  ngOnInit() {



  }

  loginRequest(){
    this.loginService.loginRequest(this.username,this.password);
  }

}
