import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientDto } from '../modeldtos/ClientDto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {

  constructor(private http: HttpClient) { }

  uploadClient(client: ClientDto): Observable<ClientDto> {
      return  this.http.post<ClientDto>('', client );
  }
}
