import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonDto } from '../modeldtos/PersonDto';
import { Observable } from 'rxjs';
import { MainAppConfig } from 'src/app/MainAppConfig';


@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {
    public urlSend: string = MainAppConfig.API + '/' ;
  constructor(private http: HttpClient) { }
 
  uploadClient(client: PersonDto): Observable<PersonDto> {
      return  this.http.post<PersonDto>(this.urlSend, client );
  }

getFormConfig(){
  this.http.get(this.urlSend).subscribe(
    (result:any)=>{

         }, 
         (error) =>{
            console.log(error);
         }
);
  

}

}
