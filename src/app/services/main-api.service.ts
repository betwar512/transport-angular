import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonDto } from '../modeldtos/PersonDto';
import { Observable } from 'rxjs';
import { MainAppConfig } from 'src/app/MainAppConfig';
import { RequestDto } from '../modeldtos/RequestDto';


@Injectable()
export class MainApiService {

    public urlSend: string = MainAppConfig.API + '/';

    constructor(private http: HttpClient) { }

    requestLogin(requestObj: RequestDto){
        this.http.post(this.urlSend,requestObj);

    }
/**
 * Set session 
 */
storeSession(webSession: string):void{
    localStorage.setItem(SESSION_TOKEN,webSession);
}
/**
 * return session 
 */
getSession():string{
    return localStorage.getItem(SESSION_TOKEN);
}

}

const SESSION_TOKEN = 'SESSION_TOKEN_KEY';