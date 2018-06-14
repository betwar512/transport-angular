import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonDto } from '../modeldtos/PersonDto';
import { Observable } from 'rxjs';
import { MainAppConfig } from 'src/app/MainAppConfig';
import { RequestDto } from '../modeldtos/RequestDto';
import { LoginDto } from './auth/loginDto';
import { Router } from '@angular/router';


@Injectable()
export class MainApiService {

   

    constructor(private http: HttpClient,  private router: Router) { }

    requestLogin(requestObj: RequestDto){
        this.http.post( MainAppConfig.API,requestObj);

    }

/**
 * subscrive to catch response and show user whats going on 
 * @param request Client request to add 
 */
public postClientDetails(request:RequestDto): Observable<any> {
    request.action = 'CONSULTANTTIMESHEET';
    request.session = this.getSession();
    return  this.http.post<any>( MainAppConfig.API,request);
} 

    
/**
 * Request login to get session 
 * @param username 
 * @param password 
 */
public loginRequest(username:string , password:string){
               let req:RequestDto = new RequestDto();
               const loginDto = new LoginDto();
               loginDto.password = password;
               loginDto.username = username;
               req.action = 'CONSULTANT';
               req.body = loginDto;

               this.http.post( MainAppConfig.API,req).subscribe((result)=>{
                      
                     let sessionBody =  result['body']['sessionweb'];
                     console.log(sessionBody);
                     this.storeSession(sessionBody);

                     if(this.getSession()){
                        this.router.navigate(['/']);
                     }
                },
              e => {
                    console.log(e);
            })  ;  
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